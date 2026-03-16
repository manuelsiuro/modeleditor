
// Warehouse / Storehouse Model Snippet
const PALETTE = {
    walls: 0xC8A882,
    roof: 0x6B5A4A,
    doors: 0x5C3A1E,
    foundation: 0x808080,
    crates: 0xA0724A,
    barrels: 0x8B5E3C,
    sacks: 0xC4A060,
    ground: 0x9A8A70,
    metal: 0x5A5A5A,
    wood: 0x8B5E3C
};

// 1. Foundation
addMesh(new THREE.BoxGeometry(10, 0.5, 6), PALETTE.foundation, [0, 0.25, 0], [0, 0, 0], "Foundation");

// 2. Main Building
addMesh(new THREE.BoxGeometry(9, 3, 5), PALETTE.walls, [0, 2, 0], [0, 0, 0], "MainBuilding");

// 3. Roof (Two-plane pitch)
// Left slope
addMesh(new THREE.BoxGeometry(9.2, 0.2, 3.2), PALETTE.roof, [0, 4, 1.4], [0.4, 0, 0], "Roof_Left");
// Right slope
addMesh(new THREE.BoxGeometry(9.2, 0.2, 3.2), PALETTE.roof, [0, 4, -1.4], [-0.4, 0, 0], "Roof_Right");

// 4. Loading Doors (3 on each long side)
for (let i = -1; i <= 1; i++) {
    // Front side
    addMesh(new THREE.BoxGeometry(1.5, 2, 0.1), PALETTE.doors, [i * 2.5, 1.5, 2.5], [0, 0, 0], `Door_Front_${i}`);
    // Back side
    addMesh(new THREE.BoxGeometry(1.5, 2, 0.1), PALETTE.doors, [i * 2.5, 1.5, -2.5], [0, 0, 0], `Door_Back_${i}`);
}

// 5. Cross-beams (X pattern on end walls)
const beamGeo = new THREE.BoxGeometry(0.1, 3.5, 0.1);
addMesh(beamGeo, PALETTE.doors, [4.5, 2, 0], [0.7, 0, 0], "Beam_End_R1");
addMesh(beamGeo, PALETTE.doors, [4.5, 2, 0], [-0.7, 0, 0], "Beam_End_R2");
addMesh(beamGeo, PALETTE.doors, [-4.5, 2, 0], [0.7, 0, 0], "Beam_End_L1");
addMesh(beamGeo, PALETTE.doors, [-4.5, 2, 0], [-0.7, 0, 0], "Beam_End_L2");

// 6. Loading Platform (Raised wood platform)
addMesh(new THREE.BoxGeometry(2, 0.3, 1.5), PALETTE.wood, [2.5, 0.65, 3.2], [0, 0, 0], "LoadingPlatform");

// 7. Props: Crates
addMesh(new THREE.BoxGeometry(0.6, 0.6, 0.6), PALETTE.crates, [3.5, 0.8, 3.5], [0, 0.2, 0], "Crate_1");
addMesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), PALETTE.crates, [3.8, 0.75, 2.8], [0, -0.1, 0], "Crate_2");
addMesh(new THREE.BoxGeometry(0.7, 0.7, 0.7), PALETTE.crates, [-3, 0.85, 3], [0, 0.5, 0], "Crate_3");
addMesh(new THREE.BoxGeometry(0.6, 0.6, 0.6), PALETTE.crates, [-3, 1.45, 3], [0, 0.1, 0], "Crate_4");

// 8. Props: Barrels
const barrelGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.8, 8);
addMesh(barrelGeo, PALETTE.barrels, [-4, 0.9, 3.5], [0, 0, 0], "Barrel_1");
addMesh(barrelGeo, PALETTE.barrels, [-4.5, 0.9, 3.5], [0, 0, 0], "Barrel_2");
addMesh(barrelGeo, PALETTE.barrels, [-4.25, 0.9, 2.8], [0, 0, 0], "Barrel_3");

// 9. Props: Sacks
const sackGeo = new THREE.BoxGeometry(0.5, 0.3, 0.7); // Simple rounded-ish look
addMesh(sackGeo, PALETTE.sacks, [1, 0.65, 3.5], [0, 0.3, 0], "Sack_1");
addMesh(sackGeo, PALETTE.sacks, [1.2, 0.65, 3], [0, -0.2, 0], "Sack_2");
addMesh(sackGeo, PALETTE.sacks, [1.1, 0.95, 3.2], [0, 0.1, 0], "Sack_3");

// 10. Hand Cart (Simplified)
addMesh(new THREE.BoxGeometry(0.8, 0.1, 1.2), PALETTE.wood, [-2, 0.7, 4], [0, 0.4, 0], "Cart_Body");
const wheelGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 8);
addMesh(wheelGeo, PALETTE.metal, [-2.4, 0.7, 3.8], [Math.PI/2, 0.4, 0], "Cart_Wheel_L");
addMesh(wheelGeo, PALETTE.metal, [-1.6, 0.7, 4.2], [Math.PI/2, 0.4, 0], "Cart_Wheel_R");

// 11. Manifest Board
addMesh(new THREE.BoxGeometry(0.05, 0.4, 0.3), 0xFFFFFF, [4.55, 2.5, 1], [0, 0, 0], "ManifestBoard");

// 12. Ground / Yard
addMesh(new THREE.BoxGeometry(15, 0.1, 10), PALETTE.ground, [0, 0, 0], [0, 0, 0], "GroundYard");
