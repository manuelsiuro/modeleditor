// 1. Setup Palette
const PALETTE = {
    walls: 0x8B5E3C, roof: 0x5C3A1E, logs: 0xC4A56E, foundation: 0x6B4226,
    frames: 0xA0724A, axeMetal: 0x7A7A7A, axeHandle: 0xD2A86E, grass: 0x4A7A3D,
    stump: 0xB89A6A, rocks: 0x888888, woodChips: 0xD2B48C
};

// 2. Build Scene
addMesh(new THREE.BoxGeometry(3, 0.4, 2.5), PALETTE.foundation, [0, 0.2, 0], [0,0,0], "Foundation");
addMesh(new THREE.BoxGeometry(2.5, 1.2, 2), PALETTE.walls, [0, 1.0, 0], [0,0,0], "Walls");
addMesh(new THREE.BoxGeometry(1.6, 0.1, 2.4), PALETTE.roof, [-0.65, 1.9, 0], [0, 0, Math.PI/6], "RoofLeft");
addMesh(new THREE.BoxGeometry(1.6, 0.1, 2.4), PALETTE.roof, [0.65, 1.9, 0], [0, 0, -Math.PI/6], "RoofRight");

addMesh(new THREE.CylinderGeometry(0.3, 0.35, 0.4, 8), PALETTE.stump, [-2, 0.2, 1], [0,0,0], "Stump");
addMesh(new THREE.CylinderGeometry(0.1, 0.1, 0.6, 6), PALETTE.logs, [-2, 0.1, -1], [0, 0, Math.PI/2], "Log");
