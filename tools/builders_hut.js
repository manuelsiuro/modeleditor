// 1. THE COLOR PALETTE
const PALETTE = {
    walls: 0x8B5E3C,
    roof: 0x5C3A1E,
    planks: 0xDCC8A0,
    stones: 0x808080,
    hammerMetal: 0x7A7A7A,
    hammerHandle: 0xC4A060,
    door: 0x4A2E14,
    foundation: 0x6B4226,
    grass: 0x5A8F4A,
    blueprint: 0xE8D8B8,
    earth: 0x8B7355,
    toolbox: 0x704214
};

// 2. CORE STRUCTURE & GEOMETRY

// Foundation / Ground Patch
addMesh(new THREE.BoxGeometry(4, 0.1, 4), PALETTE.grass, [0, 0.05, 0], [0, 0, 0], "GrassBase");
addMesh(new THREE.BoxGeometry(2, 0.11, 2), PALETTE.earth, [0.5, 0.05, 1.2], [0, 0.3, 0], "DisturbedEarth");

// Hut Foundation
addMesh(new THREE.BoxGeometry(1.6, 0.2, 1.3), PALETTE.foundation, [0, 0.15, 0], [0, 0, 0], "HutFoundation");

// The Hut (Small Cuboid)
addMesh(new THREE.BoxGeometry(1.5, 1.2, 1.2), PALETTE.walls, [0, 0.7, 0], [0, 0, 0], "HutBody");

// The Roof (Sloped Cuboid)
const roofLeft = addMesh(new THREE.BoxGeometry(1.0, 0.1, 1.4), PALETTE.roof, [-0.4, 1.5, 0], [0, 0, Math.PI / 6], "RoofLeft");
const roofRight = addMesh(new THREE.BoxGeometry(1.0, 0.1, 1.4), PALETTE.roof, [0.4, 1.5, 0], [0, 0, -Math.PI / 6], "RoofRight");

// The Door (Indentation)
addMesh(new THREE.BoxGeometry(0.05, 0.8, 0.5), PALETTE.door, [0.75, 0.5, 0], [0, 0, 0], "Door");

// The Window
addMesh(new THREE.BoxGeometry(0.4, 0.3, 0.05), 0x222222, [0, 0.9, 0.6], [0, 0, 0], "WindowFront");

// 3. PROPS AND ENVIRONMENT DETAILS

// Plank Stack
const addPlank = (x, y, z, rotY = 0) => {
    addMesh(new THREE.BoxGeometry(0.8, 0.05, 0.2), PALETTE.planks, [x, y, z], [0, rotY, 0], "Plank");
};
for(let i=0; i<5; i++) {
    addPlank(-1.2, 0.15 + i*0.06, 0.8, 0.1);
}
for(let i=0; i<4; i++) {
    addPlank(-1.4, 0.15 + i*0.06, 0.7, -0.05);
}

// Stone Pile
const addStone = (x, y, z) => {
    const size = 0.2 + Math.random() * 0.1;
    addMesh(new THREE.BoxGeometry(size, size, size), PALETTE.stones, [x, y, z], [Math.random(), Math.random(), 0], "Stone");
};
addStone(1.2, 0.2, -0.8);
addStone(1.4, 0.2, -0.6);
addStone(1.3, 0.4, -0.7);
addStone(1.5, 0.2, -0.9);

// Hammer
const hammerGroup = new THREE.Group();
const handle = addMesh(new THREE.CylinderGeometry(0.02, 0.02, 0.4, 6), PALETTE.hammerHandle, [0, 0, 0], [0, 0, 0], "HammerHandle");
const head = addMesh(new THREE.BoxGeometry(0.12, 0.08, 0.08), PALETTE.hammerMetal, [0, 0.18, 0], [0, 0, 0], "HammerHead");
hammerGroup.add(handle);
hammerGroup.add(head);
hammerGroup.position.set(0.8, 0.3, 0.5);
hammerGroup.rotation.set(0.2, 0, 0.5);
modelGroup.add(hammerGroup);

// Sawhorse / Workbench
const addSawhorse = (x, z, rot) => {
    const group = new THREE.Group();
    // Legs
    const leg1 = addMesh(new THREE.BoxGeometry(0.04, 0.6, 0.04), PALETTE.walls, [-0.2, 0.25, 0.15], [0.3, 0, 0.2], "Leg");
    const leg2 = addMesh(new THREE.BoxGeometry(0.04, 0.6, 0.04), PALETTE.walls, [0.2, 0.25, 0.15], [0.3, 0, -0.2], "Leg");
    const leg3 = addMesh(new THREE.BoxGeometry(0.04, 0.6, 0.04), PALETTE.walls, [-0.2, 0.25, -0.15], [-0.3, 0, 0.2], "Leg");
    const leg4 = addMesh(new THREE.BoxGeometry(0.04, 0.6, 0.04), PALETTE.walls, [0.2, 0.25, -0.15], [-0.3, 0, -0.2], "Leg");
    // Top beam
    const beam = addMesh(new THREE.BoxGeometry(0.6, 0.05, 0.1), PALETTE.walls, [0, 0.52, 0], [0, 0, 0], "Beam");
    group.add(leg1, leg2, leg3, leg4, beam);
    group.position.set(x, 0, z);
    group.rotation.y = rot;
    modelGroup.add(group);
};
addSawhorse(-1.5, -0.8, 0.5);

// Workbench
addMesh(new THREE.BoxGeometry(0.8, 0.5, 0.4), PALETTE.walls, [-1.2, 0.25, -1.2], [0, 0.2, 0], "WorkbenchBase");
addMesh(new THREE.BoxGeometry(0.9, 0.05, 0.5), PALETTE.planks, [-1.2, 0.52, -1.2], [0, 0.2, 0], "WorkbenchTop");

// Blueprint / Plan
addMesh(new THREE.BoxGeometry(0.3, 0.01, 0.2), PALETTE.blueprint, [-1.2, 0.55, -1.2], [0, 0.4, 0], "Blueprint");

// Toolbox
const toolbox = addMesh(new THREE.BoxGeometry(0.4, 0.25, 0.25), PALETTE.toolbox, [1.0, 0.2, 1.2], [0, -0.4, 0], "Toolbox");
addMesh(new THREE.BoxGeometry(0.4, 0.02, 0.25), PALETTE.toolbox, [1.0, 0.35, 1.3], [-0.8, -0.4, 0], "ToolboxLid");

// Nails (Tiny cubes)
for(let i=0; i<10; i++) {
    addMesh(new THREE.BoxGeometry(0.02, 0.02, 0.02), PALETTE.stones, [-1.3 + Math.random()*0.3, 0.55, -1.3 + Math.random()*0.2], [0, 0, 0], "Nail");
}

// Ladder
const ladderGroup = new THREE.Group();
const railLeft = addMesh(new THREE.BoxGeometry(0.04, 1.8, 0.04), PALETTE.walls, [-0.15, 0, 0], [0,0,0], "RailL");
const railRight = addMesh(new THREE.BoxGeometry(0.04, 1.8, 0.04), PALETTE.walls, [0.15, 0, 0], [0,0,0], "RailR");
for(let i=0; i<6; i++) {
    addMesh(new THREE.BoxGeometry(0.34, 0.03, 0.03), PALETTE.walls, [0, -0.7 + i*0.25, 0], [0,0,0], "Rung");
}
ladderGroup.position.set(-0.6, 0.8, 0.8);
ladderGroup.rotation.set(-0.3, 0.2, 0);
modelGroup.add(ladderGroup);

// Grass Tufts
const addGrassTuft = (x, z) => {
    const blades = 3 + Math.floor(Math.random() * 3);
    for(let i=0; i<blades; i++) {
        addMesh(new THREE.ConeGeometry(0.03, 0.1 + Math.random()*0.1, 3), PALETTE.grass, 
            [x + (Math.random()-0.5)*0.15, 0.1, z + (Math.random()-0.5)*0.15], 
            [0, Math.random()*Math.PI, 0], "GrassTuft");
    }
};
addGrassTuft(1.8, 1.8);
addGrassTuft(-1.8, 1.5);
addGrassTuft(1.5, -1.5);

// 4. LIGHTING AND PRESENTATION

// Clear, practical directional sunlight
sun.color.setHex(0xffffff);
sun.intensity = 1.4;
sun.position.set(5, 10, 5);

// Subtle ambient fill
const ambient = scene.children.find(c => c instanceof THREE.AmbientLight);
if (ambient) {
    ambient.intensity = 0.5;
    ambient.color.setHex(0xe0e0ff);
}

// Background
scene.background = new THREE.Color(0x90caf9);

// Initial Camera View
camera.position.set(6, 6, 6);
camera.lookAt(0, 0, 0);
orbit.update();
