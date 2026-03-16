// 1. THE COLOR PALETTE
const PALETTE = {
    shelter: 0x808080,
    stoneOutput: 0xB8B8B8,
    rock1: 0x9A9A9A,
    rock2: 0x7A7A7A,
    rock3: 0xB0B0B0,
    wood: 0x8B5E3C,
    ground: 0xA08060,
    pickaxeMetal: 0x5A5A5A,
    pickaxeHandle: 0xC4A060,
    rubble: 0xD0C0A0
};

// 2. CORE STRUCTURE & GEOMETRY

// Ground: sandy/dirt base
addMesh(new THREE.BoxGeometry(5, 0.2, 5), PALETTE.ground, [0, 0.1, 0], [0, 0, 0], "GroundBase");

// Rocky Outcrop (Back/Side)
const createRock = (x, y, z, s, color, rot = [0,0,0]) => {
    addMesh(new THREE.BoxGeometry(s, s, s), color, [x, y, z], rot, "RockFormation");
};
createRock(-1.5, 1.0, -1.5, 2.5, PALETTE.rock1, [0.2, 0.4, 0.1]);
createRock(1.0, 0.8, -2.0, 2.0, PALETTE.rock2, [-0.1, 0.2, 0.3]);
createRock(-2.5, 0.6, 0.5, 1.8, PALETTE.rock3, [0.5, -0.2, 0]);

// Shelter (Open-fronted)
// Back Wall
addMesh(new THREE.BoxGeometry(2.5, 1.5, 0.1), PALETTE.shelter, [0, 0.75, -0.5], [0, 0, 0], "ShelterBack");
// Side Walls
addMesh(new THREE.BoxGeometry(0.1, 1.5, 1.2), PALETTE.shelter, [-1.2, 0.75, 0.1], [0, 0, 0], "ShelterLeft");
addMesh(new THREE.BoxGeometry(0.1, 1.5, 1.2), PALETTE.shelter, [1.2, 0.75, 0.1], [0, 0, 0], "ShelterRight");
// Roof (Slightly angled)
addMesh(new THREE.BoxGeometry(2.6, 0.1, 1.5), PALETTE.shelter, [0, 1.55, 0.1], [0.1, 0, 0], "ShelterRoof");

// Wooden Support Beams
addMesh(new THREE.BoxGeometry(0.1, 1.5, 0.1), PALETTE.wood, [-1.1, 0.75, 0.6], [0, 0, 0], "BeamLeft");
addMesh(new THREE.BoxGeometry(0.1, 1.5, 0.1), PALETTE.wood, [1.1, 0.75, 0.6], [0, 0, 0], "BeamRight");

// 3. PROPS AND ENVIRONMENT DETAILS

// Stone blocks (Finished product)
addMesh(new THREE.BoxGeometry(0.6, 0.6, 0.6), PALETTE.stoneOutput, [1.8, 0.3, 1.5], [0, 0.2, 0], "Block1");
addMesh(new THREE.BoxGeometry(0.6, 0.6, 0.6), PALETTE.stoneOutput, [2.5, 0.3, 1.2], [0, -0.1, 0], "Block2");
addMesh(new THREE.BoxGeometry(0.6, 0.6, 0.6), PALETTE.stoneOutput, [2.1, 0.9, 1.3], [0, 0.4, 0], "Block3");

// Raw stone chunks
createRock(-1.8, 0.25, 1.8, 0.5, PALETTE.rock2, [Math.random(), Math.random(), 0]);
createRock(-2.2, 0.2, 1.2, 0.4, PALETTE.rock1, [Math.random(), Math.random(), 0]);

// Pickaxe
const pickGroup = new THREE.Group();
const handle = addMesh(new THREE.BoxGeometry(0.04, 0.6, 0.04), PALETTE.pickaxeHandle, [0, 0.3, 0], [0,0,0], "PickHandle");
const head = addMesh(new THREE.BoxGeometry(0.06, 0.06, 0.4), PALETTE.pickaxeMetal, [0, 0.55, 0], [0,0,0], "PickHead");
pickGroup.add(handle); pickGroup.add(head);
pickGroup.position.set(-1.0, 0, 0.8);
pickGroup.rotation.set(0.2, 0, -0.3);
modelGroup.add(pickGroup);

// Rubble (Tiny cubes)
for(let i=0; i<20; i++) {
    const rx = (Math.random() - 0.5) * 4;
    const rz = (Math.random() - 0.5) * 4;
    if (Math.abs(rx) < 1 && rz < 0.5) continue; // Keep center clear
    addMesh(new THREE.BoxGeometry(0.05, 0.05, 0.05), PALETTE.rubble, [rx, 0.02, rz], [Math.random(), Math.random(), 0], "Rubble");
}

// Update scene background to neutral dusty sky
scene.background = new THREE.Color(0xb0c4de);
