// 1. THE COLOR PALETTE
const PALETTE = {
    walls: 0x8B5E3C,
    roof: 0x2E6B2E,
    sapling: 0x5DBF5D,
    trim: 0xA0724A,
    foundation: 0x6B4226,
    meadow: 0x5A8F4A,
    soil: 0x5C3D2E,
    flowerYellow: 0xF0D060,
    flowerWhite: 0xF0F0E0
};

// 2. CORE STRUCTURE & GEOMETRY

// Foundation: Low cuboid base
addMesh(new THREE.BoxGeometry(3, 0.2, 3), PALETTE.foundation, [0, 0.1, 0], [0, 0, 0], "Foundation");

// Walls: Compact forest dwelling
addMesh(new THREE.BoxGeometry(2.2, 1.2, 2.2), PALETTE.walls, [0, 0.8, 0], [0, 0, 0], "Walls");

// Roof: Four-sided pyramid (Cone with 4 segments)
// We use a cone with 4 radial segments to make a pyramid
const roofGeo = new THREE.ConeGeometry(2.2, 1.5, 4);
addMesh(roofGeo, PALETTE.roof, [0, 2.15, 0], [0, Math.PI / 4, 0], "PyramidRoof");

// Door: Darker indentation
addMesh(new THREE.BoxGeometry(0.1, 0.8, 0.5), PALETTE.trim, [1.1, 0.7, 0], [0, 0, 0], "Door");

// Window: Tiny square cutout
addMesh(new THREE.BoxGeometry(0.5, 0.4, 0.1), PALETTE.trim, [0, 1.0, 1.1], [0, 0, 0], "Window");

// 3. PROPS AND ENVIRONMENT DETAILS

// Soil patches (Freshly turned earth)
addMesh(new THREE.BoxGeometry(0.8, 0.05, 0.8), PALETTE.soil, [-1.8, 0.05, 1.2], [0, 0.4, 0], "SoilPatch1");
addMesh(new THREE.BoxGeometry(0.6, 0.05, 0.6), PALETTE.soil, [1.5, 0.05, -1.5], [0, -0.2, 0], "SoilPatch2");

// The signature Saplings
const createSapling = (x, z, s = 1) => {
    const sap = new THREE.Group();
    const trunk = addMesh(new THREE.CylinderGeometry(0.02, 0.02, 0.3), PALETTE.foundation, [0, 0.15, 0], [0,0,0], "SaplingTrunk");
    const leaves = addMesh(new THREE.ConeGeometry(0.2, 0.5, 6), PALETTE.sapling, [0, 0.4, 0], [0,0,0], "SaplingLeaves");
    sap.add(trunk); sap.add(leaves);
    sap.scale.setScalar(s);
    sap.position.set(x, 0, z);
    modelGroup.add(sap);
};

createSapling(-1.8, 1.2, 1.2); // Main sapling near entrance
createSapling(-2.2, 0.8, 0.8);
createSapling(1.5, -1.5, 1.0);

// Mature Tree nearby
const createTree = (x, z, h) => {
    const tree = new THREE.Group();
    const trunk = addMesh(new THREE.CylinderGeometry(0.1, 0.1, 0.8), PALETTE.foundation, [0, 0.4, 0], [0,0,0], "TreeTrunk");
    const leaves = addMesh(new THREE.ConeGeometry(0.8, 2.5, 6), PALETTE.roof, [0, 1.8, 0], [0,0,0], "TreeLeaves");
    tree.add(trunk); tree.add(leaves);
    tree.position.set(x, 0, z);
    modelGroup.add(tree);
};
createTree(3.5, 3.5, 1);

// Watering can (Simple cylinder + handle)
const canBody = addMesh(new THREE.CylinderGeometry(0.15, 0.15, 0.25, 8), 0x888888, [1.2, 0.15, 0.8], [0,0,0], "WateringCan");

// Wildflowers (Tiny colored cubes)
for(let i=0; i<15; i++) {
    const color = Math.random() > 0.5 ? PALETTE.flowerYellow : PALETTE.flowerWhite;
    const rx = (Math.random() - 0.5) * 6;
    const rz = (Math.random() - 0.5) * 6;
    // Don't place inside house
    if (Math.abs(rx) < 1.5 && Math.abs(rz) < 1.5) continue;
    addMesh(new THREE.BoxGeometry(0.05, 0.05, 0.05), color, [rx, 0.05, rz], [0,0,0], "Flower");
}

// Update scene background to Meadow Green
scene.background = new THREE.Color(PALETTE.meadow);
