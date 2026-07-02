/* =============================================================
   THREE.JS SCENE — Floating 3D AI Brain with Neural Network
   ============================================================= */

(function () {
  'use strict';

  function initBrain() {
    const container = document.getElementById('heroBrain');
    if (!container || typeof THREE === 'undefined') return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    camera.position.set(0, 0, 8);

    // Mouse tracking
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    document.addEventListener('mousemove', (e) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // Colors
    const indigo = new THREE.Color('#6366f1');
    const cyan = new THREE.Color('#22d3ee');
    const violet = new THREE.Color('#a855f7');

    // Group
    const group = new THREE.Group();
    scene.add(group);

    // === BRAIN CORE: Icosahedron with custom shader gradient ===
    const brainGeo = new THREE.IcosahedronGeometry(2, 4);

    // Use vertex colors to create gradient
    const brainMat = new THREE.MeshBasicMaterial({
      color: 0x1a1b2e,
      transparent: true,
      opacity: 0.4,
      wireframe: false,
    });

    const brain = new THREE.Mesh(brainGeo, brainMat);
    group.add(brain);

    // === BRAIN WIREFRAME OVERLAY ===
    const wireGeo = new THREE.IcosahedronGeometry(2, 3);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const wireframe = new THREE.Mesh(wireGeo, wireMat);
    group.add(wireframe);

    // === INNER SPHERE (GLOWING) ===
    const innerGeo = new THREE.IcosahedronGeometry(1.4, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.08,
      wireframe: false,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    group.add(inner);

    // === NEURAL POINTS (vertices of icosahedron) ===
    const pointPositions = brainGeo.attributes.position;
    const pointCount = pointPositions.count;
    const pointsGeo = new THREE.BufferGeometry();
    const pointsArr = new Float32Array(pointCount * 3);
    const pointColors = new Float32Array(pointCount * 3);

    for (let i = 0; i < pointCount; i++) {
      pointsArr[i * 3] = pointPositions.getX(i);
      pointsArr[i * 3 + 1] = pointPositions.getY(i);
      pointsArr[i * 3 + 2] = pointPositions.getZ(i);

      // Color gradient based on position
      const mix = (pointsArr[i * 3 + 1] + 2) / 4;
      const c = new THREE.Color().lerpColors(indigo, cyan, mix);
      pointColors[i * 3] = c.r;
      pointColors[i * 3 + 1] = c.g;
      pointColors[i * 3 + 2] = c.b;
    }
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(pointsArr, 3));
    pointsGeo.setAttribute('color', new THREE.BufferAttribute(pointColors, 3));

    const pointsMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const points = new THREE.Points(pointsGeo, pointsMat);
    group.add(points);

    // === NEURAL CONNECTIONS (lines between nearby points) ===
    const linePositions = [];
    const lineColors = [];
    const maxDist = 1.0;
    const sampled = [];
    const step = 8; // sample every Nth vertex for performance

    for (let i = 0; i < pointCount; i += step) {
      sampled.push({
        x: pointPositions.getX(i),
        y: pointPositions.getY(i),
        z: pointPositions.getZ(i),
      });
    }

    for (let i = 0; i < sampled.length; i++) {
      for (let j = i + 1; j < sampled.length; j++) {
        const a = sampled[i];
        const b = sampled[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dz = a.z - b.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < maxDist && Math.random() > 0.5) {
          linePositions.push(a.x, a.y, a.z, b.x, b.y, b.z);
          // Color based on average position
          const mix = ((a.y + b.y) / 2 + 2) / 4;
          const c = new THREE.Color().lerpColors(indigo, cyan, mix);
          lineColors.push(c.r, c.g, c.b, c.r, c.g, c.b);
        }
      }
    }

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    linesGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const linesMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const lines = new THREE.LineSegments(linesGeo, linesMat);
    group.add(lines);

    // === ORBITING ELECTRONS / SATELLITES ===
    const orbiters = [];
    for (let i = 0; i < 3; i++) {
      const orbGeo = new THREE.SphereGeometry(0.05, 16, 16);
      const orbMat = new THREE.MeshBasicMaterial({
        color: i === 0 ? indigo : i === 1 ? cyan : violet,
        transparent: true,
        opacity: 0.9,
      });
      const orb = new THREE.Mesh(orbGeo, orbMat);
      const orbitRadius = 3 + i * 0.4;
      orb.userData = {
        radius: orbitRadius,
        speed: 0.3 + i * 0.15,
        phase: (i * Math.PI * 2) / 3,
        axis: i % 2 === 0 ? 'y' : 'x',
      };
      group.add(orb);
      orbiters.push(orb);
    }

    // === AMBIENT LIGHT (not really needed for basic materials, but standard) ===
    // Skip — using basic materials

    // === ANIMATION ===
    const clock = new THREE.Clock();

    function animate() {
      const t = clock.getElapsedTime();
      const dt = clock.getDelta();

      // Mouse parallax
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      // Group rotation
      group.rotation.y = t * 0.1 + mouse.x * 0.3;
      group.rotation.x = Math.sin(t * 0.2) * 0.15 + mouse.y * 0.2;

      // Wireframe counter-rotation
      wireframe.rotation.y = -t * 0.15;
      wireframe.rotation.x = t * 0.1;

      // Inner sphere pulse
      const pulse = 1 + Math.sin(t * 1.5) * 0.05;
      inner.scale.setScalar(pulse);
      innerMat.opacity = 0.08 + Math.sin(t * 1.5) * 0.04;

      // Points subtle scale
      points.scale.setScalar(1 + Math.sin(t * 0.8) * 0.02);

      // Lines opacity flicker
      linesMat.opacity = 0.2 + Math.sin(t * 0.5) * 0.1;

      // Orbiters
      orbiters.forEach((orb) => {
        const d = orb.userData;
        const angle = t * d.speed + d.phase;
        if (d.axis === 'y') {
          orb.position.set(
            Math.cos(angle) * d.radius,
            Math.sin(angle * 1.3) * 0.5,
            Math.sin(angle) * d.radius
          );
        } else {
          orb.position.set(
            Math.cos(angle) * d.radius,
            Math.sin(angle) * d.radius,
            Math.sin(angle * 1.3) * 0.5
          );
        }
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();

    // Resize
    function onResize() {
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    }

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(onResize, 150);
    });

    // Cleanup on page hide
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        renderer.setAnimationLoop(null);
      }
    });
  }

  // Wait for DOM + Three to be ready
  function start() {
    if (typeof THREE === 'undefined') {
      setTimeout(start, 50);
      return;
    }
    initBrain();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
