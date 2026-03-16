// 1. Setup Palette
const PALETTE = {
    walls: 0xC8A882,
    roof: 0x8B4513,
    ripeGrain: 0xDAA520,
    growingCrop: 0x6B8E23,
    soil: 0x5C3D2E,
    beams: 0xA0724A,
    fence: 0x8B5E3C,
    scythe: 0x7A7A7A,
    grass: 0x5A8F4A,
    trough: 0x888888,
    scarecrow: 0xD2B48C
};

// 2. CORE STRUCTURE & GEOMETRY

// Ground / Foundation
addMesh(new THREE.BoxGeometry(10, 0.2, 10), PALETTE.grass, [0, -0.1, 0], [0, 0, 0], "Ground");

// The Farmhouse: Long, low cuboid
addMesh(new THREE.BoxGeometry(4, 2, 2.5), PALETTE.walls, [-2, 1, 0], [0, 0, 0], "Farmhouse");

// The Roof: Two-plane pitched shape
addMesh(new THREE.BoxGeometry(4.2, 0.1, 1.8), PALETTE.roof, [-2, 2.4, -0.7], [Math.PI / 6, 0, 0], "RoofFront");
addMesh(new THREE.BoxGeometry(4.2, 0.1, 1.8), PALETTE.roof, [-2, 2.4, 0.7], [-Math.PI / 6, 0, 0], "RoofBack");

// The Door: Wide rectangular barn-style entrance
addMesh(new THREE.BoxGeometry(0.1, 1.4, 1.2), PALETTE.beams, [0, 0.7, 0], [0, 0, 0], "BarnDoor");

// Exposed Beams (Half-timber pattern)
addMesh(new THREE.BoxGeometry(4.05, 0.1, 0.1), PALETTE.beams, [-2, 1, 1.26], [0, 0, 0], "BeamHorizontal");
addMesh(new THREE.BoxGeometry(0.1, 2, 0.1), PALETTE.beams, [-0.1, 1, 1.26], [0, 0, 0], "BeamVertical1");
addMesh(new THREE.BoxGeometry(0.1, 2, 0.1), PALETTE.beams, [-2, 1, 1.26], [0, 0, 0], "BeamVertical2");
addMesh(new THREE.BoxGeometry(0.1, 2, 0.1), PALETTE.beams, [-3.9, 1, 1.26], [0, 0, 0], "BeamVertical3");

// The Fields: Adjacent flat area
// Field 1: Ripe Grain
addMesh(new THREE.BoxGeometry(4, 0.3, 6), PALETTE.ripeGrain, [2.5, 0.15, 0], [0, 0, 0], "FieldRipe");
// Field 2: Growing Crops
addMesh(new THREE.BoxGeometry(4, 0.2, 2), PALETTE.growingCrop, [2.5, 0.1, -4], [0, 0, 0], "FieldGrowing");

// Field Furrows
for (let i = -2.5; i <= 2.5; i += 1) {
    addMesh(new THREE.BoxGeometry(3.8, 0.05, 0.1), PALETTE.soil, [2.5, 0.31, i], [0, 0, 0], "FurrowRipe");
}

// 3. PROPS AND ENVIRONMENT DETAILS

// Grain Sheaves
addMesh(new THREE.CylinderGeometry(0.2, 0.15, 0.5, 6), PALETTE.ripeGrain, [-3.5, 0.25, 2], [0, 0, 0], "GrainSheaf1");
addMesh(new THREE.CylinderGeometry(0.2, 0.15, 0.5, 6), PALETTE.ripeGrain, [-3, 0.25, 2.2], [0, 0, 0.2], "GrainSheaf2");

// Scythe
addMesh(new THREE.CylinderGeometry(0.03, 0.03, 1.5, 4), PALETTE.fence, [0.1, 0.7, 0.8], [0.2, 0, 0], "ScytheHandle");
addMesh(new THREE.BoxGeometry(0.4, 0.05, 0.1), PALETTE.scythe, [0.1, 1.4, 0.9], [0, 0.5, 0.5], "ScytheBlade");

// Hay Bales
addMesh(new THREE.BoxGeometry(0.8, 0.5, 0.5), PALETTE.ripeGrain, [-1, 0.25, 2], [0, 0.5, 0], "HayBale1");

// Fence
for (let i = -4.5; i <= 4.5; i += 2) {
    addMesh(new THREE.BoxGeometry(0.1, 0.8, 0.1), PALETTE.fence, [4.8, 0.4, i], [0, 0, 0], "FencePostSide");
    addMesh(new THREE.BoxGeometry(0.1, 0.8, 0.1), PALETTE.fence, [i, 0.4, 4.8], [0, 0, 0], "FencePostBack");
}

// Water Trough
addMesh(new THREE.BoxGeometry(1, 0.4, 0.6), PALETTE.trough, [-2, 0.2, -2], [0, 0, 0], "Trough");

// Scarecrow
addMesh(new THREE.CylinderGeometry(0.05, 0.05, 1.2, 4), PALETTE.fence, [2.5, 0.6, 1], [0, 0, 0], "ScarecrowPost");
addMesh(new THREE.CylinderGeometry(0.05, 0.05, 0.8, 4), PALETTE.fence, [2.5, 1, 1], [0, 0, Math.PI/2], "ScarecrowArms");
addMesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), PALETTE.scarecrow, [2.5, 1.2, 1], [0, 0, 0], "ScarecrowHat");

// Wheelbarrow / Cart
addMesh(new THREE.BoxGeometry(0.8, 0.4, 0.6), PALETTE.fence, [-3.5, 0.4, -2], [0, 0.3, 0], "CartBody");
addMesh(new THREE.CylinderGeometry(0.2, 0.2, 0.1, 8), 0x333333, [-3.5, 0.2, -2], [0, 0, Math.PI/2], "CartWheel");
