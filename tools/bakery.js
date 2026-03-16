// 1. THE COLOR PALETTE
const PALETTE = {
    walls: 0xC87038,
    roof: 0x5C3A1E,
    chimney: 0x4A4A4A,
    embers: 0xE03020,
    frames: 0xA0724A,
    bread: 0xDAA520,
    flour: 0xF0E8D8,
    coal: 0x2A2A2A,
    foundation: 0x6B4226,
    ovenGlow: 0xFF8C00,
    path: 0xA89070
};

// 2. CORE STRUCTURE & GEOMETRY

// Foundation
addMesh(new THREE.BoxGeometry(3.5, 0.2, 3.5), PALETTE.foundation, [0, 0.1, 0], [0, 0, 0], "Foundation");

// Main Building (Orange/Terracotta)
addMesh(new THREE.BoxGeometry(2.8, 1.6, 2.5), PALETTE.walls, [0, 0.9, 0], [0, 0, 0], "BakeryBody");

// Roof (Dark Brown)
addMesh(new THREE.BoxGeometry(1.8, 0.15, 3.2), PALETTE.roof, [-0.8, 2.3, 0], [0, 0, Math.PI / 6], "RoofLeft");
addMesh(new THREE.BoxGeometry(1.8, 0.15, 3.2), PALETTE.roof, [0.8, 2.3, 0], [0, 0, -Math.PI / 6], "RoofRight");

// Chimney (Dark Grey)
addMesh(new THREE.BoxGeometry(0.5, 2.5, 0.5), PALETTE.chimney, [-1.1, 1.45, -0.8], [0, 0, 0], "Chimney");
addMesh(new THREE.BoxGeometry(0.15, 0.15, 0.15), PALETTE.embers, [-1.1, 2.75, -0.8], [0, 0, 0], "ChimneyEmbers");

// Oven Opening with Glow
addMesh(new THREE.BoxGeometry(0.1, 0.6, 0.8), 0x222222, [1.4, 0.6, 0], [0, 0, 0], "OvenAlcove");
addMesh(new THREE.BoxGeometry(0.05, 0.3, 0.4), PALETTE.ovenGlow, [1.38, 0.5, 0], [0, 0, 0], "OvenFireGlow");

// Door & Window
addMesh(new THREE.BoxGeometry(0.1, 1.0, 0.8), PALETTE.frames, [1.4, 0.7, 1.0], [0, 0, 0], "MainDoor");
addMesh(new THREE.BoxGeometry(0.6, 0.5, 0.1), PALETTE.frames, [0, 1.2, 1.26], [0, 0, 0], "WindowFront");

// 3. PROPS AND ENVIRONMENT DETAILS

// Welcome Path
addMesh(new THREE.BoxGeometry(1.5, 0.05, 1.0), PALETTE.path, [2.2, 0.05, 1.0], [0, 0, 0], "StonePath");

// Display Table & Bread
addMesh(new THREE.BoxGeometry(0.8, 0.6, 1.2), PALETTE.frames, [2.0, 0.3, -0.5], [0, 0, 0], "DisplayTable");
const addLoaf = (x, y, z) => addMesh(new THREE.BoxGeometry(0.2, 0.15, 0.3), PALETTE.bread, [x, y, z], [0, Math.random(), 0], "BreadLoaf");
addLoaf(2.0, 0.65, -0.3);
addLoaf(2.1, 0.65, -0.6);
addLoaf(1.9, 0.65, -0.7);

// Flour Sacks
const addSack = (x, z) => addMesh(new THREE.BoxGeometry(0.4, 0.5, 0.4), PALETTE.flour, [x, 0.35, z], [0, 0.2, 0], "FlourSack");
addSack(1.8, 1.8);
addSack(2.2, 1.7);

// Coal Pile (Small cubes)
for(let i=0; i<8; i++) {
    const rx = 1.2 + Math.random() * 0.5;
    const rz = -1.5 - Math.random() * 0.5;
    addMesh(new THREE.BoxGeometry(0.15, 0.15, 0.15), PALETTE.coal, [rx, 0.15, rz], [Math.random(), Math.random(), 0], "CoalChunk");
}

// Bread Paddle (Peel)
const paddleHandle = addMesh(new THREE.BoxGeometry(0.04, 1.2, 0.04), PALETTE.frames, [1.3, 0.6, -1.0], [0.2, 0, 0], "PaddleHandle");
addMesh(new THREE.BoxGeometry(0.2, 0.03, 0.3), PALETTE.frames, [1.3, 0.1, -1.15], [0.2, 0, 0], "PaddleHead");

// Firewood Stack
const addLog = (x, y, z) => addMesh(new THREE.CylinderGeometry(0.08, 0.08, 0.5, 6), PALETTE.foundation, [x, y, z], [Math.PI/2, 0, 0.5], "Firewood");
addLog(-1.8, 0.15, -1.0);
addLog(-1.8, 0.15, -1.2);
addLog(-1.8, 0.3, -1.1);

// Rolling Pin on Display Table
addMesh(new THREE.CylinderGeometry(0.03, 0.03, 0.4, 8), PALETTE.frames, [2.0, 0.65, -0.8], [0, 0, Math.PI / 2], "RollingPin");

// Grass and Flowers
const addGrass = (x, z) => {
    const group = new THREE.Group();
    for(let i=0; i<3; i++) {
        const blade = addMesh(new THREE.ConeGeometry(0.05, 0.2 + Math.random() * 0.2, 3), 0x7cfc00, [x + (Math.random()-0.5)*0.2, 0.1, z + (Math.random()-0.5)*0.2], [0, Math.random()*Math.PI, 0], "GrassBlade");
    }
};

const addFlower = (x, z, color) => {
    addMesh(new THREE.CylinderGeometry(0.02, 0.02, 0.2, 4), 0x228B22, [x, 0.1, z], [0, 0, 0], "FlowerStem");
    addMesh(new THREE.SphereGeometry(0.06, 4, 4), color, [x, 0.22, z], [0, 0, 0], "FlowerPetals");
};

addGrass(-2.5, 2.0);
addGrass(2.8, -2.2);
addGrass(-2.0, -2.5);
addFlower(2.5, 2.3, 0xff69b4); // Pink flower
addFlower(-2.8, 1.8, 0xffff00); // Yellow flower

// 4. RUNTIME EFFECTS (Animation)

// Chimney Smoke Simulation (Simple low-poly smoke using rising cubes)
const smokePuffs = [];
for(let i=0; i<6; i++) {
    const puff = addMesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), 0xcccccc, [-1.1, 2.8, -0.8], [0,0,0], "SmokePuff");
    puff.visible = false;
    smokePuffs.push({
        mesh: puff,
        life: Math.random() * 5.0,
        speed: 0.01 + Math.random() * 0.01
    });
}

// Emissive glow pulse on building
const bakeryBody = modelGroup.children.find(c => c.name === "BakeryBody");
if (bakeryBody) {
    bakeryBody.material.emissive = new THREE.Color(0xff8c00);
    bakeryBody.material.emissiveIntensity = 0;
}

// Animation loop
const clock = new THREE.Clock();
function updateAnimations() {
    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();

    // Smoke Animation
    smokePuffs.forEach(p => {
        p.life += delta;
        if (p.life > 5) {
            p.life = 0;
            p.mesh.position.set(-1.1, 2.8, -0.8);
            p.mesh.scale.set(0.1, 0.1, 0.1);
            p.mesh.visible = true;
        }
        p.mesh.position.y += p.speed;
        p.mesh.position.x += Math.sin(elapsed + p.life) * 0.005;
        p.mesh.scale.multiplyScalar(1.005);
        p.mesh.material.opacity = 1.0 - (p.life / 5.0);
        p.mesh.material.transparent = true;
    });

    // Glow Pulse
    if (bakeryBody) {
        bakeryBody.material.emissiveIntensity = 0.1 + Math.sin(elapsed * 2) * 0.1;
    }

    requestAnimationFrame(updateAnimations);
}
updateAnimations();

// 5. LIGHTING AND PRESENTATION OVERRIDES

// Warm Directional Sunlight
sun.color.setHex(0xfff0d0);
sun.intensity = 1.5;
sun.position.set(5, 12, 8);

// Soft Warm Ambient Fill
const ambient = scene.children.find(c => c instanceof THREE.AmbientLight);
if (ambient) {
    ambient.color.setHex(0xffe0b0);
    ambient.intensity = 0.5;
}

// Oven Glow (Point Light)
const ovenLight = new THREE.PointLight(0xff8c00, 15, 3);
ovenLight.position.set(1.4, 0.6, 0);
scene.add(ovenLight);

// Chimney Glow (Small point light at top)
const chimneyLight = new THREE.PointLight(0xff4500, 5, 1);
chimneyLight.position.set(-1.1, 2.7, -0.8);
scene.add(chimneyLight);

// Set background to a warm, clear sky
scene.background = new THREE.Color(0xfff4e0);

// Isometric Camera Setup (Approximation using Perspective)
camera.position.set(10, 10, 10);
camera.lookAt(0, 0, 0);
orbit.update();
