// 1. Setup Palette
const PALETTE = {
    hull: 0x2c3e50,      // Dark slate grey
    detail: 0x95a5a6,    // Silver details
    engineCore: 0x00f2ff, // Cyan glow
    cockpit: 0x34495e     // Slightly lighter grey
};

// 2. Build Scene

// Main Hull (Body)
addMesh(new THREE.BoxGeometry(1.5, 0.8, 4), PALETTE.hull, [0, 0, 0], [0, 0, 0], "MainBody");
addMesh(new THREE.ConeGeometry(0.8, 1.5, 4), PALETTE.hull, [0, 0, 2.7], [-Math.PI/2, Math.PI/4, 0], "NoseCone");

// Wings
const wingGeo = new THREE.BoxGeometry(3, 0.1, 1.5);
addMesh(wingGeo, PALETTE.hull, [0, -0.1, -0.5], [0, 0, 0], "MainWings");
addMesh(new THREE.BoxGeometry(0.1, 1.2, 0.8), PALETTE.detail, [0, 0.6, -1.2], [0, 0, 0], "TailFin");

// Engines (Thrusters)
const thrusterGeo = new THREE.CylinderGeometry(0.3, 0.4, 0.8, 8);
addMesh(thrusterGeo, PALETTE.detail, [-0.6, 0, -2.1], [Math.PI/2, 0, 0], "LeftThruster");
addMesh(thrusterGeo, PALETTE.detail, [0.6, 0, -2.1], [Math.PI/2, 0, 0], "RightThruster");

// Glowing Engine Cores (The "Cyan Glow")
const glowGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 8);
addMesh(glowGeo, PALETTE.engineCore, [-0.6, 0, -2.5], [Math.PI/2, 0, 0], "LeftGlow");
addMesh(glowGeo, PALETTE.engineCore, [0.6, 0, -2.5], [Math.PI/2, 0, 0], "RightGlow");

// Cockpit
addMesh(new THREE.BoxGeometry(0.8, 0.4, 1.2), PALETTE.cockpit, [0, 0.5, 1.0], [0, 0, 0], "CockpitWindow");
