// 1. THE COLOR PALETTE
const PALETTE = {
    mainStructure: 0x4A4A4A,
    cornerTowers: 0x5A5A5A,
    flagPyramids: 0xC0392B,
    gate: 0x2A2A2A,
    crenellations: 0x5A5A5A,
    stoneFoundation: 0x6A6A6A,
    bannerFabric: 0x8B1A1A,
    torchFlame: 0xFF8C00,
    ground: 0x6B5A4A,
    weaponRacks: 0x8B5E3C,
    wood: 0x5D4037,
    steel: 0x9E9E9E
};

// 2. CORE STRUCTURE & GEOMETRY

// Ground - Trampled Earth
addMesh(new THREE.BoxGeometry(12, 0.1, 12), PALETTE.ground, [0, -0.05, 0], [0, 0, 0], "TrampledGround");

// Stone Foundation
addMesh(new THREE.BoxGeometry(9, 0.3, 7.5), PALETTE.stoneFoundation, [0, 0.15, 0], [0, 0, 0], "Foundation");

// Main Structure: A large, wide, medium-height cuboid
const mainWidth = 8;
const mainHeight = 3;
const mainDepth = 6.5;
addMesh(new THREE.BoxGeometry(mainWidth, mainHeight, mainDepth), PALETTE.mainStructure, [0, mainHeight/2 + 0.3, 0], [0, 0, 0], "MainBarracks");

// Crenellations (Battlements) Helper
const addCrenellations = (width, depth, height, color, name, yOffset = 0) => {
    const size = 0.3;
    const spacing = 0.6;
    const countX = Math.floor(width / spacing);
    const countZ = Math.floor(depth / spacing);
    
    // X-axis crenellations (Front & Back)
    for(let i = 0; i < countX; i++) {
        const x = -width/2 + (i * spacing) + size/2;
        addMesh(new THREE.BoxGeometry(size, size, size), color, [x, height + size/2 + yOffset, depth/2 - size/2], [0,0,0], name);
        addMesh(new THREE.BoxGeometry(size, size, size), color, [x, height + size/2 + yOffset, -depth/2 + size/2], [0,0,0], name);
    }
    // Z-axis crenellations (Left & Right)
    for(let i = 0; i < countZ; i++) {
        const z = -depth/2 + (i * spacing) + size/2;
        addMesh(new THREE.BoxGeometry(size, size, size), color, [width/2 - size/2, height + size/2 + yOffset, z], [0,0,0], name);
        addMesh(new THREE.BoxGeometry(size, size, size), color, [-width/2 + size/2, height + size/2 + yOffset, z], [0,0,0], name);
    }
};

addCrenellations(mainWidth, mainDepth, mainHeight, PALETTE.crenellations, "BarracksMerlon", 0.3);

// Corner Towers: Slightly taller than the main structure
const towerSize = 1.8;
const towerHeight = 4.5;
const towerGeo = new THREE.BoxGeometry(towerSize, towerHeight, towerSize);
const roofGeo = new THREE.ConeGeometry(1.3, 1.5, 4); // Pyramid

const addCornerTower = (x, z, name) => {
    addMesh(towerGeo, PALETTE.cornerTowers, [x, towerHeight/2 + 0.3, z], [0, 0, 0], name);
    // Tower Crenellations
    addCrenellations(towerSize, towerSize, towerHeight, PALETTE.crenellations, name + "Merlon", 0.3);
    // Red Pyramid Roof (Flags)
    addMesh(roofGeo, PALETTE.flagPyramids, [x, towerHeight + 0.3 + 0.75, z], [0, Math.PI / 4, 0], name + "Roof");
};

const towerX = (mainWidth/2);
const towerZ = (mainDepth/2);
addCornerTower(towerX, towerZ, "TowerNE");
addCornerTower(-towerX, towerZ, "TowerNW");
addCornerTower(towerX, -towerZ, "TowerSE");
addCornerTower(-towerX, -towerZ, "TowerSW");

// The Gate: Large, dark rectangular opening
const gateWidth = 2.5;
const gateHeight = 2.2;
addMesh(new THREE.BoxGeometry(gateWidth, gateHeight, 0.2), PALETTE.gate, [0, gateHeight/2 + 0.3, mainDepth/2 + 0.01], [0, 0, 0], "MainGate");

// Arrow Slits
const addArrowSlit = (x, y, z, rotY) => {
    addMesh(new THREE.BoxGeometry(0.1, 0.5, 0.1), 0x111111, [x, y, z], [0, rotY, 0], "ArrowSlit");
};

// Front slits
addArrowSlit(-2, 2.5, mainDepth/2 + 0.01, 0);
addArrowSlit(2, 2.5, mainDepth/2 + 0.01, 0);
// Side slits
addArrowSlit(mainWidth/2 + 0.01, 2.5, 0, Math.PI/2);
addArrowSlit(-mainWidth/2 - 0.01, 2.5, 0, Math.PI/2);

// 3. PROPS AND ENVIRONMENT DETAILS

// Weapon Racks
const addWeaponRack = (x, z, rotY) => {
    const rack = new THREE.Group();
    // Frame
    addMesh(new THREE.BoxGeometry(1.5, 0.1, 0.5), PALETTE.weaponRacks, [x, 0.35, z], [0, rotY, 0], "RackBase");
    addMesh(new THREE.BoxGeometry(0.1, 1.2, 0.1), PALETTE.weaponRacks, [x - 0.7*Math.cos(rotY), 0.9, z - 0.7*Math.sin(rotY)], [0, rotY, 0], "RackPostL");
    addMesh(new THREE.BoxGeometry(0.1, 1.2, 0.1), PALETTE.weaponRacks, [x + 0.7*Math.cos(rotY), 0.9, z + 0.7*Math.sin(rotY)], [0, rotY, 0], "RackPostR");
    addMesh(new THREE.BoxGeometry(1.5, 0.1, 0.1), PALETTE.weaponRacks, [x, 1.4, z], [0, rotY, 0], "RackTop");
    
    // Swords (simplified)
    for(let i=0; i<3; i++) {
        const offset = (i - 1) * 0.4;
        addMesh(new THREE.BoxGeometry(0.05, 0.8, 0.1), PALETTE.steel, [x + offset*Math.cos(rotY), 0.9, z + offset*Math.sin(rotY)], [0, rotY, 0], "Sword");
    }
};
addWeaponRack(-2.5, 5, 0);
addWeaponRack(2.5, 5, 0);

// Training Dummy
const addTrainingDummy = (x, z) => {
    addMesh(new THREE.CylinderGeometry(0.05, 0.05, 1.2), PALETTE.wood, [x, 0.9, z], [0, 0, 0], "DummyPost");
    addMesh(new THREE.BoxGeometry(0.8, 0.2, 0.2), PALETTE.wood, [x, 1.2, z], [0, 0, 0], "DummyArms");
    addMesh(new THREE.BoxGeometry(0.4, 0.5, 0.4), 0xD2B48C, [x, 1.2, z], [0, 0, 0], "DummyBody");
};
addTrainingDummy(0, 5);

// Banners
const addBanner = (x, y, z, rotY) => {
    addMesh(new THREE.BoxGeometry(0.8, 1.5, 0.05), PALETTE.bannerFabric, [x, y, z], [0, rotY, 0], "WallBanner");
};
addBanner(-1.8, 2, mainDepth/2 + 0.05, 0);
addBanner(1.8, 2, mainDepth/2 + 0.05, 0);

// Torches
const addTorch = (x, y, z, rotZ) => {
    addMesh(new THREE.CylinderGeometry(0.05, 0.02, 0.4), 0x333333, [x, y, z], [0, 0, rotZ], "TorchSconce");
    addMesh(new THREE.BoxGeometry(0.15, 0.15, 0.15), PALETTE.torchFlame, [x + 0.1*Math.sin(rotZ), y + 0.2, z], [0, 0, 0], "TorchFlame");
};
addTorch(1.5, 1.8, mainDepth/2 + 0.1, 0.2);
addTorch(-1.5, 1.8, mainDepth/2 + 0.1, -0.2);

// Defensive elements: Wooden stakes
const addStake = (x, z, rotX, rotY) => {
    addMesh(new THREE.CylinderGeometry(0.05, 0.1, 1, 4), 0x5D4037, [x, 0.4, z], [rotX, rotY, 0], "DefensiveStake");
};
addStake(-3, 6, -0.5, 0);
addStake(-2.5, 6.2, -0.4, 0.2);
addStake(2.5, 6.2, -0.4, -0.2);
addStake(3, 6, -0.5, 0);

// Supply Crates
const addCrate = (x, z, rotY) => {
    addMesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), 0x5D4037, [x, 0.55, z], [0, rotY, 0], "Crate");
};
addCrate(-3.5, 4.5, 0.4);
addCrate(-4, 4, -0.2);
addCrate(-3.7, 4.2, 0.1); // stacked

// 4. LIGHTING AND PRESENTATION
// Overriding some defaults for dramatic effect
scene.background = new THREE.Color(0x222244); // Darker blue for "martial" feel
sun.intensity = 1.5;
sun.position.set(10, 20, 10);

// Add some orange point lights for torches
const torchLight1 = new THREE.PointLight(PALETTE.torchFlame, 1, 5);
torchLight1.position.set(1.5, 2, mainDepth/2 + 0.5);
scene.add(torchLight1);

const torchLight2 = new THREE.PointLight(PALETTE.torchFlame, 1, 5);
torchLight2.position.set(-1.5, 2, mainDepth/2 + 0.5);
scene.add(torchLight2);
