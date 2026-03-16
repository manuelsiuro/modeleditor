// 1. Palette
const PALETTE = {
    pier: 0x5C3A1E,
    posts: 0x8B5E3C,
    building: 0xB0A090,
    roof: 0x5A5A5A,
    boatHull: 0x3A6FAF,
    boatDeck: 0xA0724A,
    sail: 0xF0EDE6,
    water: 0x3A8FAF,
    rope: 0xD0C0A0,
    cargo: 0xA0724A,
    shore: 0xC8B898,
    rock: 0x888888
};

// 2. Base Environment
// Shore
addMesh(new THREE.BoxGeometry(6, 0.4, 10), PALETTE.shore, [-3, -0.2, 0], [0, 0, 0], "Shore");

// Water
addMesh(new THREE.BoxGeometry(10, 0.3, 10), PALETTE.water, [5, -0.25, 0], [0, 0, 0], "Water");

// 3. Pier Structure
// Long Pier
addMesh(new THREE.BoxGeometry(8, 0.2, 1.5), PALETTE.pier, [3, 0.1, 0], [0, 0, 0], "Pier");

// Support Posts
for (let i = 0; i < 4; i++) {
    addMesh(new THREE.CylinderGeometry(0.1, 0.1, 1), PALETTE.posts, [1 + i * 2, -0.4, 0.6], [0, 0, 0], `Post_L_${i}`);
    addMesh(new THREE.CylinderGeometry(0.1, 0.1, 1), PALETTE.posts, [1 + i * 2, -0.4, -0.6], [0, 0, 0], `Post_R_${i}`);
}

// Mooring Posts
for (let i = 0; i < 3; i++) {
    addMesh(new THREE.CylinderGeometry(0.15, 0.15, 0.4), 0x333333, [2 + i * 2.5, 0.3, 0.7], [0, 0, 0], `MooringPost_${i}`);
}

// 4. Dock Building
// Main Body
addMesh(new THREE.BoxGeometry(2, 1.5, 1.8), PALETTE.building, [-1, 0.75, 0], [0, 0, 0], "DockBuilding");

// Roof
addMesh(new THREE.BoxGeometry(2.4, 0.1, 1.2), PALETTE.roof, [-1, 1.6, 0.5], [Math.PI/6, 0, 0], "RoofFront");
addMesh(new THREE.BoxGeometry(2.4, 0.1, 1.2), PALETTE.roof, [-1, 1.6, -0.5], [-Math.PI/6, 0, 0], "RoofBack");

// Doorway (indicated by a slightly recessed dark box)
addMesh(new THREE.BoxGeometry(0.1, 1.1, 0.8), 0x222222, [0.01, 0.55, 0], [0, 0, 0], "Doorway");

// 5. Boats
function addBoat(x, z, rot) {
    const boatGroup = "Boat_" + Math.random().toString(36).substr(2, 5);
    // Hull
    addMesh(new THREE.BoxGeometry(2, 0.4, 0.8), PALETTE.boatHull, [x, 0.1, z], [0, rot, 0], boatGroup + "_Hull");
    // Cabin
    addMesh(new THREE.BoxGeometry(0.6, 0.4, 0.6), PALETTE.boatDeck, [x - 0.2, 0.4, z], [0, rot, 0], boatGroup + "_Cabin");
    // Mast
    addMesh(new THREE.CylinderGeometry(0.05, 0.05, 1.5), PALETTE.posts, [x + 0.3, 0.8, z], [0, rot, 0], boatGroup + "_Mast");
    // Sail
    addMesh(new THREE.PlaneGeometry(0.6, 1), PALETTE.sail, [x + 0.3, 1.2, z + 0.3], [0, rot + Math.PI/2, 0], boatGroup + "_Sail");
}

addBoat(4, 1.5, 0.1);
addBoat(6, -1.2, -0.2);

// 6. Props
// Cargo Crates
addMesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), PALETTE.cargo, [1, 0.4, -0.4], [0, 0.3, 0], "Crate_1");
addMesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), PALETTE.cargo, [1.1, 0.4, 0.1], [0, -0.1, 0], "Crate_2");
addMesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), PALETTE.cargo, [1, 0.8, -0.1], [0, 0.1, 0], "Crate_3");

// Barrels
addMesh(new THREE.CylinderGeometry(0.2, 0.2, 0.5, 8), 0x664422, [-0.5, 0.25, 1.2], [0, 0, 0], "Barrel_1");
addMesh(new THREE.CylinderGeometry(0.2, 0.2, 0.5, 8), 0x664422, [-1, 0.25, 1.2], [0, 0, 0], "Barrel_2");

// Crane
addMesh(new THREE.BoxGeometry(0.2, 1.5, 0.2), PALETTE.posts, [2, 0.85, 0.6], [0, 0, 0], "CranePost");
addMesh(new THREE.BoxGeometry(0.15, 1.5, 0.15), PALETTE.posts, [2.5, 1.6, 0.6], [0, 0, -Math.PI/4], "CraneArm");
addMesh(new THREE.CylinderGeometry(0.02, 0.02, 1), PALETTE.rope, [3, 1, 0.6], [0, 0, 0], "CraneRope");

// Rocks
addMesh(new THREE.DodecahedronGeometry(0.3, 0), PALETTE.rock, [-0.5, 0.1, -1.5], [0, 0, 0], "Rock_1");
addMesh(new THREE.DodecahedronGeometry(0.4, 0), PALETTE.rock, [-0.8, 0.1, -2.5], [Math.PI/4, 0, 0], "Rock_2");
