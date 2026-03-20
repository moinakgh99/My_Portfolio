import * as THREE from "three"; 

function initThreeBackground(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  // ── Renderer ────────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
  renderer.setClearColor(0x000000, 0);

  // ── Scene / Camera ───────────────────────────────────────────
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    60,
    canvas.offsetWidth / canvas.offsetHeight,
    0.1,
    1000,
  );

  camera.position.z = 80;

  // ── Particles (nodes) ───────────────────────────────────────
  const PARTICLE_COUNT = 180;
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const nodeData = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 120;
    const z = (Math.random() - 0.5) * 60;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    nodeData.push({
      ox: x,
      oy: y,
      oz: z,
      vx: (Math.random() - 0.5) * 0.04,
      vy: (Math.random() - 0.5) * 0.025,
    });
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const pMat = new THREE.PointsMaterial({
    color: 0x00f5c4,
    size: 0.7,
    transparent: true,
    opacity: 0.65,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(pGeo, pMat);
  scene.add(points);

  // ── Connection lines ─────────────────────────────────────────
  const MAX_CONNECTIONS = 280;
  const linePositions = new Float32Array(MAX_CONNECTIONS * 6);

  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));

  const lineMat = new THREE.LineSegments(
    lineGeo,
    new THREE.LineBasicMaterial({
      color: 0x7b61ff,
      transparent: true,
      opacity: 0.18,
    }),
  );

  scene.add(lineMat);

  // ── Floating accent spheres ──────────────────────────────────
  const spheres = [];

  for (let i = 0; i < 6; i++) {
    const r = 0.4 + Math.random() * 0.6;

    const geo = new THREE.SphereGeometry(r, 8, 8);

    const mat = new THREE.MeshBasicMaterial({
      color: i % 2 === 0 ? 0x00f5c4 : 0x7b61ff,
      transparent: true,
      opacity: 0.25,
      wireframe: true,
    });

    const mesh = new THREE.Mesh(geo, mat);

    mesh.position.set(
      (Math.random() - 0.5) * 140,
      (Math.random() - 0.5) * 80,
      (Math.random() - 0.5) * 30,
    );

    mesh.userData = {
      speed: 0.003 + Math.random() * 0.005,
      axis: new THREE.Vector3(
        Math.random(),
        Math.random(),
        Math.random(),
      ).normalize(),
    };

    scene.add(mesh);
    spheres.push(mesh);
  }

  // ── Mouse interaction ────────────────────────────────────────
  const mouse = { x: 0, y: 0 };

  document.addEventListener("mousemove", (e) => {
    mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // ── Resize handler ───────────────────────────────────────────
  function onResize() {
    const w = canvas.parentElement.offsetWidth;
    const h = canvas.parentElement.offsetHeight;

    renderer.setSize(w, h);

    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  window.addEventListener("resize", onResize);

  // ── Animation loop ───────────────────────────────────────────
  let lineCount = 0;
  const CONNECT_DIST = 28;

  function animate() {
    requestAnimationFrame(animate);

    const pos = pGeo.attributes.position.array;

    // Move particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      nodeData[i].ox += nodeData[i].vx;
      nodeData[i].oy += nodeData[i].vy;

      pos[i * 3] = nodeData[i].ox;
      pos[i * 3 + 1] = nodeData[i].oy;
      pos[i * 3 + 2] = nodeData[i].oz;

      if (Math.abs(nodeData[i].ox) > 100) nodeData[i].vx *= -1;
      if (Math.abs(nodeData[i].oy) > 60) nodeData[i].vy *= -1;
    }

    pGeo.attributes.position.needsUpdate = true;

    // Draw connection lines
    lineCount = 0;

    for (let i = 0; i < PARTICLE_COUNT && lineCount < MAX_CONNECTIONS; i++) {
      for (
        let j = i + 1;
        j < PARTICLE_COUNT && lineCount < MAX_CONNECTIONS;
        j++
      ) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];

        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECT_DIST) {
          const base = lineCount * 6;

          linePositions[base] = pos[i * 3];
          linePositions[base + 1] = pos[i * 3 + 1];
          linePositions[base + 2] = pos[i * 3 + 2];

          linePositions[base + 3] = pos[j * 3];
          linePositions[base + 4] = pos[j * 3 + 1];
          linePositions[base + 5] = pos[j * 3 + 2];

          lineCount++;
        }
      }
    }

    lineGeo.attributes.position.needsUpdate = true;
    lineGeo.setDrawRange(0, lineCount * 2);

    // Rotate spheres
    spheres.forEach((s) => {
      s.rotateOnAxis(s.userData.axis, s.userData.speed);
    });

    // Camera sway
    camera.position.x += (mouse.x * 8 - camera.position.x) * 0.04;
    camera.position.y += (-mouse.y * 5 - camera.position.y) * 0.04;

    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animate();
}

export { initThreeBackground }; 
