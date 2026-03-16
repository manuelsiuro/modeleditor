// Woodcutter's Hut - Three.js Snippet
const PALETTE = {
    walls: 0x8B5E3C,
    roof: 0x5C3A1E,
    logs: 0xC4A56E,
    foundation: 0x6B4226,
    frames: 0xA0724A,
    metal: 0x7A7A7A,
    handle: 0xD2A86E,
    grass: 0x4A7A3D,
    stump: 0xB89A6A,
    stone: 0x888888
};

// 1. Foundation
addMesh(new THREE.BoxGeometry(1.4, 0.1, 1.4), PALETTE.foundation, [0, 0.05, 0], [0, 0, 0], "Foundation");

// 2. Walls
addMesh(new THREE.BoxGeometry(1.1, 0.8, 1.1), PALETTE.walls, [0, 0.5, 0], [0, 0, 0], "Walls");

// 3. Roof (Pitched)
const roofLeft = new THREE.BoxGeometry(0.8, 0.05, 1.3);
addMesh(roofLeft, PALETTE.roof, [-0.3, 1.1, 0], [0, 0, Math.PI / 6], "RoofLeft");
const roofRight = new THREE.BoxGeometry(0.8, 0.05, 1.3);
addMesh(roofRight, PALETTE.roof, [0.3, 1.1, 0], [0, 0, -Math.PI / 6], "RoofRight");

// 4. Door
addMesh(new THREE.BoxGeometry(0.4, 0.6, 0.05), PALETTE.frames, [0, 0.4, 0.55], [0, 0, 0], "Door");

// 5. Window
addMesh(new THREE.BoxGeometry(0.25, 0.25, 0.05), PALETTE.frames, [0.55, 0.6, 0], [0, Math.PI / 2, 0], "Window");

// 6. Chopping Block (Stump)
addMesh(new THREE.CylinderGeometry(0.2, 0.2, 0.25, 8), PALETTE.stump, [0.8, 0.2, 0.8], [0, 0, 0], "ChoppingBlock");

// 7. Woodcutter's Axe
addMesh(new THREE.BoxGeometry(0.02, 0.4, 0.02), PALETTE.handle, [0.8, 0.45, 0.8], [0, 0, -Math.PI / 8], "AxeHandle");
addMesh(new THREE.BoxGeometry(0.03, 0.12, 0.1), PALETTE.metal, [0.85, 0.6, 0.8], [0, 0, -Math.PI / 8], "AxeHead");

// 8. Log Pile
addMesh(new THREE.CylinderGeometry(0.06, 0.06, 0.5, 8), PALETTE.logs, [-0.8, 0.1, 0.8], [0, 0, Math.PI / 2], "Log1");
addMesh(new THREE.CylinderGeometry(0.06, 0.06, 0.5, 8), PALETTE.logs, [-0.8, 0.1, 0.65], [0, 0, Math.PI / 2], "Log2");
addMesh(new THREE.CylinderGeometry(0.06, 0.06, 0.5, 8), PALETTE.logs, [-0.8, 0.2, 0.72], [0, 0, Math.PI / 2], "Log3");

// 9. Whole Tree Trunk
addMesh(new THREE.CylinderGeometry(0.12, 0.12, 1.5, 8), PALETTE.logs, [1.1, 0.12, -0.5], [0, Math.PI / 4, Math.PI / 2], "FelledTree");

// 10. Flora & Environment
// Pine Tree 1
addMesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3, 6), PALETTE.walls, [-1.2, 0.15, -1.2], [0, 0, 0], "TreeTrunk1");
addMesh(new THREE.ConeGeometry(0.4, 1, 6), PALETTE.grass, [-1.2, 0.7, -1.2], [0, 0, 0], "TreeFoliage1");

// Pine Tree 2
addMesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3, 6), PALETTE.walls, [-0.8, 0.15, -1.5], [0, 0, 0], "TreeTrunk2");
addMesh(new THREE.ConeGeometry(0.35, 0.8, 6), PALETTE.grass, [-0.8, 0.6, -1.5], [0, 0, 0], "TreeFoliage2");

// Rocks
addMesh(new THREE.IcosahedronGeometry(0.15, 0), PALETTE.stone, [1.2, 0.1, 1.2], [Math.random(), Math.random(), Math.random()], "Rock1");
addMesh(new THREE.IcosahedronGeometry(0.1, 0), PALETTE.stone, [-1.4, 0.05, 0], [Math.random(), Math.random(), Math.random()], "Rock2");

// Wood Chips
for (let i = 0; i < 5; i++) {
    addMesh(new THREE.BoxGeometry(0.03, 0.01, 0.03), PALETTE.logs, 
        [0.8 + (Math.random() - 0.5) * 0.4, 0.1, 0.8 + (Math.random() - 0.5) * 0.4], 
        [0, Math.random() * Math.PI, 0], `Chip${i}`);
}
