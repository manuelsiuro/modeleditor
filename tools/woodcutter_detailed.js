// 1. THE COLOR PALETTE
const PALETTE = {
    walls: 0x8B5E3C,
    roof: 0x5C3A1E,
    logs: 0xC4A56E,
    foundation: 0x6B4226,
    frames: 0xA0724A,
    axeMetal: 0x7A7A7A,
    axeHandle: 0xD2A86E,
    grass: 0x4A7A3D,
    stump: 0xB89A6A,
    rocks: 0x888888,
    woodChips: 0xD2B48C
};

// 2. CORE STRUCTURE & GEOMETRY

// The Foundation: Low, earthy cuboid
addMesh(new THREE.BoxGeometry(3.5, 0.3, 3), PALETTE.foundation, [0, 0.15, 0], [0, 0, 0], "Foundation");

// The Walls: Squat and cozy cuboid
addMesh(new THREE.BoxGeometry(2.8, 1.4, 2.2), PALETTE.walls, [0, 0.3 + 0.7, 0], [0, 0, 0], "MainWalls");

// The Roof: Two-plane pitched roof with overhanging eaves
const roofL = addMesh(new THREE.BoxGeometry(1.8, 0.15, 2.8), PALETTE.roof, [-0.8, 2.1, 0], [0, 0, Math.PI / 6], "RoofLeft");
const roofR = addMesh(new THREE.BoxGeometry(1.8, 0.15, 2.8), PALETTE.roof, [0.8, 2.1, 0], [0, 0, -Math.PI / 6], "RoofRight");

// The Door: Rectangular indentation/frame
addMesh(new THREE.BoxGeometry(0.1, 0.9, 0.6), PALETTE.frames, [1.4, 0.85, 0], [0, 0, 0], "DoorFrame");

// Window: Small square on side wall
addMesh(new THREE.BoxGeometry(0.7, 0.6, 0.1), PALETTE.frames, [0, 1.2, 1.1], [0, 0, 0], "SideWindow");

// 3. PROPS AND ENVIRONMENT DETAILS

// The Chopping Block (Tree Stump): Wide cylinder
addMesh(new THREE.CylinderGeometry(0.35, 0.4, 0.5, 8), PALETTE.stump, [-2.2, 0.25, 1], [0, 0, 0], "ChoppingBlock");

// The Woodcutter's Axe: Handle + Blade
addMesh(new THREE.BoxGeometry(0.06, 0.6, 0.06), PALETTE.axeHandle, [-2.2, 0.7, 1], [0, 0, Math.PI / 4], "AxeHandle");
addMesh(new THREE.BoxGeometry(0.08, 0.2, 0.3), PALETTE.axeMetal, [-2.15, 0.9, 1], [0, 0, Math.PI / 4], "AxeBlade");

// Log Pile: Stacked horizontal cylinders
addMesh(new THREE.CylinderGeometry(0.12, 0.12, 0.7, 6), PALETTE.logs, [-2.2, 0.12, -1], [0, 0, Math.PI / 2], "Log1");
addMesh(new THREE.CylinderGeometry(0.12, 0.12, 0.7, 6), PALETTE.logs, [-2.2, 0.12, -1.3], [0, 0, Math.PI / 2], "Log2");
addMesh(new THREE.CylinderGeometry(0.12, 0.12, 0.7, 6), PALETTE.logs, [-2.2, 0.35, -1.15], [0, 0, Math.PI / 2], "Log3");

// Whole tree trunk: Longer cylinder on ground
addMesh(new THREE.CylinderGeometry(0.15, 0.15, 2.5, 6), PALETTE.logs, [2.5, 0.15, 1.5], [0, Math.PI / 3, Math.PI / 2], "FelledTree");

// Flora: Pine Trees (Cones)
const createPine = (x, z, s) => {
    const p = new THREE.Group();
    const trunk = addMesh(new THREE.CylinderGeometry(0.1, 0.1, 0.6), PALETTE.foundation, [0, 0.3, 0], [0,0,0], "TreeTrunk");
    const leaves = addMesh(new THREE.ConeGeometry(0.8, 2, 6), PALETTE.grass, [0, 1.4, 0], [0,0,0], "TreeLeaves");
    p.add(trunk); p.add(leaves);
    p.scale.setScalar(s);
    p.position.set(x, 0, z);
    modelGroup.add(p);
};
createPine(4, -2.5, 1.2);
createPine(-4, -3, 0.9);

// Rocks: Rounded (beveled) cubes
addMesh(new THREE.BoxGeometry(0.5, 0.4, 0.5), PALETTE.rocks, [2, 0.2, -1.5], [0.2, 0.5, 0.1], "Rock1");
addMesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), PALETTE.rocks, [-1.5, 0.15, 2], [0.5, 0.1, 0.3], "Rock2");

// Wood Chips: Tiny scattered cubes
for(let i=0; i<12; i++) {
    const rx = -2.2 + (Math.random() - 0.5) * 0.8;
    const rz = 1 + (Math.random() - 0.5) * 0.8;
    addMesh(new THREE.BoxGeometry(0.06, 0.04, 0.06), PALETTE.woodChips, [rx, 0.02, rz], [Math.random(), Math.random(), 0], "WoodChip");
}

// Optional Fence: posts and rail
addMesh(new THREE.BoxGeometry(0.1, 0.6, 0.1), PALETTE.frames, [-1.5, 0.3, -2], [0, 0, 0], "FencePost1");
addMesh(new THREE.BoxGeometry(0.1, 0.6, 0.1), PALETTE.frames, [-3, 0.3, -2], [0, 0, 0], "FencePost2");
addMesh(new THREE.BoxGeometry(1.6, 0.1, 0.1), PALETTE.frames, [-2.25, 0.45, -2], [0, 0, 0], "FenceRail");
