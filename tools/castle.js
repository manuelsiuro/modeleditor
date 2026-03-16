// 1. THE COLOR PALETTE
const PALETTE = {
    baseWalls: 0x8C8C8C,
    keep: 0x5A5A5A,
    towers: 0xB0B0B0,
    roofCaps: 0xC0392B,
    gate: 0x3A3A3A,
    courtyard: 0xA89070,
    banner: 0x8B1A1A,
    portcullis: 0x4A4A4A,
    wood: 0x8B5E3C,
    flame: 0xFFA500
};

// 2. CORE STRUCTURE & GEOMETRY

// Ground / Courtyard transition
addMesh(new THREE.BoxGeometry(10, 0.1, 10), PALETTE.courtyard, [0, 0.05, 0], [0, 0, 0], "OuterGround");

// The Base Platform (Main Walls)
addMesh(new THREE.BoxGeometry(7, 2.5, 7), PALETTE.baseWalls, [0, 1.25, 0], [0, 0, 0], "BaseFortress");

// The Central Keep (Dominant vertical element)
addMesh(new THREE.BoxGeometry(3.5, 5.5, 3.5), PALETTE.keep, [0, 2.75, 0], [0, 0, 0], "CentralKeep");

// Crenellations (Battlements) Helper
const addCrenellations = (width, depth, height, color, name) => {
    const size = 0.4;
    const countX = Math.floor(width / (size * 2));
    const countZ = Math.floor(depth / (size * 2));
    
    // X-axis crenellations
    for(let i = 0; i < countX; i++) {
        const x = -width/2 + (i * size * 2) + size/2;
        addMesh(new THREE.BoxGeometry(size, size, size), color, [x, height + size/2, depth/2 - size/2], [0,0,0], name);
        addMesh(new THREE.BoxGeometry(size, size, size), color, [x, height + size/2, -depth/2 + size/2], [0,0,0], name);
    }
    // Z-axis crenellations
    for(let i = 0; i < countZ; i++) {
        const z = -depth/2 + (i * size * 2) + size/2;
        addMesh(new THREE.BoxGeometry(size, size, size), color, [width/2 - size/2, height + size/2, z], [0,0,0], name);
        addMesh(new THREE.BoxGeometry(size, size, size), color, [-width/2 + size/2, height + size/2, z], [0,0,0], name);
    }
};

addCrenellations(7, 7, 2.5, PALETTE.baseWalls, "WallMerlon");
addCrenellations(3.5, 3.5, 5.5, PALETTE.keep, "KeepMerlon");

// The Four Corner Towers
const towerGeo = new THREE.BoxGeometry(1.5, 4.0, 1.5);
const roofGeo = new THREE.ConeGeometry(1.2, 1.8, 4); // 4 sides = pyramid

const addTower = (x, z, name) => {
    addMesh(towerGeo, PALETTE.towers, [x, 2.0, z], [0, 0, 0], name);
    addMesh(roofGeo, PALETTE.roofCaps, [x, 4.9, z], [0, Math.PI / 4, 0], name + "Roof");
};

addTower(3.2, 3.2, "TowerNE");
addTower(-3.2, 3.2, "TowerNW");
addTower(3.2, -3.2, "TowerSE");
addTower(-3.2, -3.2, "TowerSW");

// The Entrance Gate
addMesh(new THREE.BoxGeometry(0.2, 1.8, 1.2), PALETTE.gate, [3.5, 0.9, 0], [0, 0, 0], "MainGate");
// Portcullis detail (horizontal/vertical bars)
addMesh(new THREE.BoxGeometry(0.05, 1.8, 0.05), PALETTE.portcullis, [3.55, 0.9, 0.2], [0,0,0], "PortcullisBar");
addMesh(new THREE.BoxGeometry(0.05, 1.8, 0.05), PALETTE.portcullis, [3.55, 0.9, -0.2], [0,0,0], "PortcullisBar");
addMesh(new THREE.BoxGeometry(0.05, 0.05, 1.2), PALETTE.portcullis, [3.55, 1.4, 0], [0,0,0], "PortcullisCross");

// 3. PROPS AND ENVIRONMENT DETAILS

// Banner / Flag on top of Keep
const pole = addMesh(new THREE.CylinderGeometry(0.05, 0.05, 1.5), 0x333333, [0, 6.25, 0], [0, 0, 0], "FlagPole");
addMesh(new THREE.BoxGeometry(0.8, 0.5, 0.05), PALETTE.banner, [0.4, 6.7, 0], [0, 0, 0], "FactionFlag");

// Supplies: Crates and Barrels near gate
addMesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), PALETTE.wood, [4.5, 0.2, 1.2], [0, 0.2, 0], "SupplyCrate");
addMesh(new THREE.CylinderGeometry(0.2, 0.2, 0.5, 8), PALETTE.wood, [4.5, 0.25, 1.8], [0, 0, 0], "SupplyBarrel");

// Torch Sconces
const addTorch = (x, y, z) => {
    addMesh(new THREE.CylinderGeometry(0.05, 0.03, 0.3), 0x222222, [x, y, z], [0, 0, 0.3], "TorchBase");
    addMesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), PALETTE.flame, [x+0.05, y+0.2, z], [0,0,0], "TorchFlame");
};
addTorch(3.6, 1.5, 0.8);
addTorch(3.6, 1.5, -0.8);

// Arrow Slits (Windows)
const addWindow = (x, y, z, rotY) => {
    addMesh(new THREE.BoxGeometry(0.1, 0.4, 0.1), PALETTE.gate, [x, y, z], [0, rotY, 0], "ArrowSlit");
};
addWindow(0, 4.5, 1.76, 0); // Keep Front
addWindow(1.76, 4.5, 0, Math.PI/2); // Keep Side
addWindow(3.2, 3.0, 3.96, 0); // Tower Front

// Adjust Lighting via injected scene changes
scene.background = new THREE.Color(0xddeeff); // Soft blue sky
