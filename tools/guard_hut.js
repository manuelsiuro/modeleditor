// 1. THE COLOR PALETTE
const PALETTE = {
    mainStructure: 0x5A5A5A,
    roofCap: 0xC0392B,
    door: 0x3A3A3A,
    shieldEmblem: 0xC0392B,
    shieldBase: 0x808080,
    stoneFoundation: 0x7A7A7A,
    ground: 0x8B7355,
    weaponRackWood: 0x8B5E3C,
    swordBlade: 0xB0B0B0,
    torchFlame: 0xFF8C00,
    wood: 0x5D4037,
    black: 0x111111
};

// 2. CORE STRUCTURE & GEOMETRY

// Ground - Dirt/Gravel (Trampled military zone)
addMesh(new THREE.BoxGeometry(10, 0.1, 10), PALETTE.ground, [0, -0.05, 0], [0, 0, 0], "Ground");

// Stone Foundation: A slightly wider low cuboid for sturdiness
const foundSize = 4.5;
addMesh(new THREE.BoxGeometry(foundSize, 0.4, foundSize), PALETTE.stoneFoundation, [0, 0.2, 0], [0, 0, 0], "Foundation");

// Main Structure: Small, robust square cuboid (fortified outpost)
const mainWidth = 3.5;
const mainHeight = 3.0;
const mainDepth = 3.5;
addMesh(new THREE.BoxGeometry(mainWidth, mainHeight, mainDepth), PALETTE.mainStructure, [0, mainHeight/2 + 0.4, 0], [0, 0, 0], "MainStructure");

// The Roof/Banner: Small red pyramid marking military status
const roofSize = 2.0;
const roofHeight = 1.2;
addMesh(new THREE.ConeGeometry(roofSize, roofHeight, 4), PALETTE.roofCap, [0, mainHeight + 0.4 + roofHeight/2, 0], [0, Math.PI / 4, 0], "RoofCap");

// The Door: Heavy, reinforced dark rectangular entrance
const doorWidth = 1.0;
const doorHeight = 1.8;
addMesh(new THREE.BoxGeometry(doorWidth, doorHeight, 0.2), PALETTE.door, [0, doorHeight/2 + 0.4, mainDepth/2 + 0.01], [0, 0, 0], "Door");

// Arrow Slits: Narrow windows for defense
const addArrowSlit = (x, y, z, rotY) => {
    addMesh(new THREE.BoxGeometry(0.1, 0.6, 0.1), PALETTE.black, [x, y, z], [0, rotY, 0], "ArrowSlit");
};
addArrowSlit(-1.0, 2.5, mainDepth/2 + 0.01, 0); // Front Left
addArrowSlit(1.0, 2.5, mainDepth/2 + 0.01, 0);  // Front Right
addArrowSlit(mainWidth/2 + 0.01, 2.5, 0, Math.PI/2); // Side Right
addArrowSlit(-mainWidth/2 - 0.01, 2.5, 0, Math.PI/2); // Side Left

// 3. PROPS AND ENVIRONMENT DETAILS

// Shield Emblem above the door (military insignia)
const emblemGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 8);
addMesh(emblemGeo, PALETTE.shieldBase, [0, doorHeight + 0.8, mainDepth/2 + 0.1], [Math.PI/2, 0, 0], "ShieldEmblemBase");
addMesh(new THREE.CylinderGeometry(0.2, 0.2, 0.11, 8), PALETTE.shieldEmblem, [0, doorHeight + 0.8, mainDepth/2 + 0.11], [Math.PI/2, 0, 0], "ShieldEmblemRed");

// Flagpole with red pennant
const poleHeight = 2.5;
addMesh(new THREE.CylinderGeometry(0.05, 0.05, poleHeight), PALETTE.wood, [0, mainHeight + 0.4 + roofHeight, 0], [0, 0, 0], "Flagpole");
const pennantGeo = new THREE.BoxGeometry(1.0, 0.4, 0.02);
addMesh(pennantGeo, PALETTE.roofCap, [0.5, mainHeight + 0.4 + roofHeight + poleHeight/2 - 0.3, 0], [0, 0, 0], "Pennant");

// Weapon Rack holding swords and a shield
const addWeaponRack = (x, z, rotY) => {
    addMesh(new THREE.BoxGeometry(1.2, 0.1, 0.4), PALETTE.weaponRackWood, [x, 0.45, z], [0, rotY, 0], "RackBase");
    addMesh(new THREE.BoxGeometry(0.08, 1.0, 0.08), PALETTE.weaponRackWood, [x - 0.5 * Math.cos(rotY), 0.9, z - 0.5 * Math.sin(rotY)], [0, rotY, 0], "RackPostL");
    addMesh(new THREE.BoxGeometry(0.08, 1.0, 0.08), PALETTE.weaponRackWood, [x + 0.5 * Math.cos(rotY), 0.9, z + 0.5 * Math.sin(rotY)], [0, rotY, 0], "RackPostR");
    addMesh(new THREE.BoxGeometry(1.2, 0.08, 0.08), PALETTE.weaponRackWood, [x, 1.3, z], [0, rotY, 0], "RackTop");
    
    // Sword
    addMesh(new THREE.BoxGeometry(0.05, 0.7, 0.1), PALETTE.swordBlade, [x - 0.2 * Math.cos(rotY), 0.9, z - 0.2 * Math.sin(rotY) + 0.05], [0, rotY, 0], "Sword");
    // Shield on rack
    addMesh(new THREE.CylinderGeometry(0.3, 0.3, 0.1, 8), PALETTE.shieldBase, [x + 0.2 * Math.cos(rotY), 0.9, z + 0.2 * Math.sin(rotY) + 0.1], [Math.PI/2, rotY, 0], "RackShield");
    addMesh(new THREE.CylinderGeometry(0.2, 0.2, 0.11, 8), PALETTE.shieldEmblem, [x + 0.2 * Math.cos(rotY), 0.9, z + 0.2 * Math.sin(rotY) + 0.11], [Math.PI/2, rotY, 0], "RackShieldRed");
};
addWeaponRack(-3.0, 3.5, 0.4);

// Torch Sconces flanking the entrance
const addTorch = (x, y, z, rotZ) => {
    addMesh(new THREE.CylinderGeometry(0.04, 0.02, 0.3), 0x333333, [x, y, z], [0, 0, rotZ], "TorchSconce");
    addMesh(new THREE.BoxGeometry(0.12, 0.12, 0.12), PALETTE.torchFlame, [x + 0.08 * Math.sin(rotZ), y + 0.15, z], [0, 0, 0], "TorchFlame");
};
addTorch(0.7, 1.8, mainDepth/2 + 0.1, 0.2);
addTorch(-0.7, 1.8, mainDepth/2 + 0.1, -0.2);

// Patrol Path Markers (Wooden Posts)
const addMarker = (x, z) => {
    addMesh(new THREE.CylinderGeometry(0.08, 0.08, 0.6), PALETTE.wood, [x, 0.7, z], [0, 0, 0], "PathMarker");
};
addMarker(3.5, 3.5);
addMarker(4.5, 1.5);
addMarker(4.5, -1.5);
addMarker(3.5, -3.5);

// Sandbags/Stone Barriers for defensive positions
const addBarrier = (x, z, rotY) => {
    addMesh(new THREE.BoxGeometry(0.8, 0.4, 0.4), PALETTE.stoneFoundation, [x, 0.6, z], [0, rotY, 0], "Barrier");
};
addBarrier(2.5, 3.8, 0.2);
addBarrier(3.2, 4.0, -0.1);

// Training Dummy (T-shaped wooden figure)
const addTrainingDummy = (x, z) => {
    addMesh(new THREE.CylinderGeometry(0.06, 0.06, 1.3), PALETTE.wood, [x, 0.4 + 0.65, z], [0, 0, 0], "DummyPost");
    addMesh(new THREE.BoxGeometry(0.8, 0.15, 0.15), PALETTE.wood, [x, 1.4, z], [0, 0, 0], "DummyArms");
    addMesh(new THREE.BoxGeometry(0.4, 0.6, 0.3), 0xD2B48C, [x, 1.4, z], [0, 0, 0], "DummyBody");
};
addTrainingDummy(-3.5, -2.5);

// 4. LIGHTING AND PRESENTATION
scene.background = new THREE.Color(0x222222); // Darker background for "vigilant" atmosphere
sun.intensity = 1.4;
sun.position.set(10, 15, 10);

// Orange point lights for torches
const torchLight1 = new THREE.PointLight(PALETTE.torchFlame, 1, 4);
torchLight1.position.set(0.7, 2, mainDepth/2 + 0.5);
scene.add(torchLight1);

const torchLight2 = new THREE.PointLight(PALETTE.torchFlame, 1, 4);
torchLight2.position.set(-0.7, 2, mainDepth/2 + 0.5);
scene.add(torchLight2);
