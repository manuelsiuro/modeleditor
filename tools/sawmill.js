// 1. THE COLOR PALETTE
const PALETTE = {
    walls: 0x8B5E3C,
    roof: 0x5C3A1E,
    logs: 0xC4A56E,
    planks: 0xDCC8A0,
    sawBlade: 0x7A7A7A,
    beams: 0xA0724A,
    chips: 0xD2B48C,
    sawdust: 0xE0D0B0,
    foundation: 0x6B4226
};

// 2. CORE STRUCTURE & GEOMETRY

// Ground: Sawdust covered area
addMesh(new THREE.BoxGeometry(6, 0.1, 6), PALETTE.sawdust, [0, 0.05, 0], [0, 0, 0], "SawdustGround");

// Foundation
addMesh(new THREE.BoxGeometry(4, 0.3, 3), PALETTE.foundation, [-1, 0.15, 0], [0, 0, 0], "MainFoundation");

// Main Workshop Building
addMesh(new THREE.BoxGeometry(3.5, 2.0, 2.5), PALETTE.walls, [-1, 1.3, 0], [0, 0, 0], "WorkshopBody");

// Main Roof
const mainRoofL = addMesh(new THREE.BoxGeometry(2.2, 0.15, 3.2), PALETTE.roof, [-1.8, 2.8, 0], [0, 0, Math.PI / 6], "MainRoofL");
const mainRoofR = addMesh(new THREE.BoxGeometry(2.2, 0.15, 3.2), PALETTE.roof, [-0.2, 2.8, 0], [0, 0, -Math.PI / 6], "MainRoofR");

// Processing Extension (Open-sided)
// Extension Roof
const extRoof = addMesh(new THREE.BoxGeometry(2.5, 0.1, 2.8), PALETTE.roof, [1.8, 2.0, 0], [0, 0, -0.1], "ExtensionRoof");

// Support Beams
addMesh(new THREE.BoxGeometry(0.15, 2.0, 0.15), PALETTE.beams, [2.8, 1.0, 1.2], [0, 0, 0], "SupportBeam1");
addMesh(new THREE.BoxGeometry(0.15, 2.0, 0.15), PALETTE.beams, [2.8, 1.0, -1.2], [0, 0, 0], "SupportBeam2");
addMesh(new THREE.BoxGeometry(0.15, 2.0, 0.15), PALETTE.beams, [1.0, 1.0, 1.2], [0, 0, 0], "SupportBeam3");
addMesh(new THREE.BoxGeometry(0.15, 2.0, 0.15), PALETTE.beams, [1.0, 1.0, -1.2], [0, 0, 0], "SupportBeam4");

// 3. THE SAW MECHANISM

// Saw Table
addMesh(new THREE.BoxGeometry(2.5, 0.6, 0.8), PALETTE.beams, [1.8, 0.3, 0], [0, 0, 0], "SawTable");

// Saw Blade (Thin Disc)
const sawBlade = addMesh(new THREE.CylinderGeometry(0.5, 0.5, 0.02, 16), PALETTE.sawBlade, [1.8, 0.8, 0], [Math.PI / 2, 0, 0], "SawBlade");

// Animation: Saw blade oscillation
sawBlade.onBeforeRender = function() {
    const t = Date.now() * 0.001;
    this.rotation.x = (Math.PI / 2) + Math.sin(t * 6.0) * 0.5;
};

// 4. PROPS (Input/Output)

// Raw Logs (Input side - Back)
addMesh(new THREE.CylinderGeometry(0.15, 0.15, 1.0, 8), PALETTE.logs, [1.8, 0.15, 1.8], [0, 0, Math.PI / 2], "InputLog1");
addMesh(new THREE.CylinderGeometry(0.15, 0.15, 1.0, 8), PALETTE.logs, [2.2, 0.15, 1.8], [0, 0, Math.PI / 2], "InputLog2");

// Finished Planks (Output side - Front)
addMesh(new THREE.BoxGeometry(0.8, 0.05, 0.3), PALETTE.planks, [1.8, 0.05, -1.8], [0, 0.2, 0], "OutputPlank1");
addMesh(new THREE.BoxGeometry(0.8, 0.05, 0.3), PALETTE.planks, [1.9, 0.12, -1.8], [0, -0.1, 0], "OutputPlank2");
addMesh(new THREE.BoxGeometry(0.8, 0.05, 0.3), PALETTE.planks, [1.85, 0.19, -1.8], [0, 0.05, 0], "OutputPlank3");

// Log on the saw (Half-cut)
addMesh(new THREE.CylinderGeometry(0.15, 0.15, 1.2, 8), PALETTE.logs, [1.8, 0.75, 0], [0, 0, Math.PI / 2], "ActiveLog");

// Sawdust pile beneath saw
addMesh(new THREE.ConeGeometry(0.6, 0.4, 8), PALETTE.sawdust, [1.8, 0.2, 0], [0, 0, 0], "SawdustPile");

// Workbench
addMesh(new THREE.BoxGeometry(1.2, 0.8, 0.6), PALETTE.beams, [-3.5, 0.4, 0], [0, 0, 0], "Workbench");

// Wood Chips (Static placeholders representing particles)
for(let i=0; i<15; i++) {
    const rx = 1.2 + Math.random() * 1.2;
    const rz = (Math.random() - 0.5) * 1.5;
    addMesh(new THREE.BoxGeometry(0.05, 0.05, 0.05), PALETTE.chips, [rx, 0.1, rz], [Math.random(), Math.random(), 0], "Chip");
}

// Set background to match the industrious sawdust vibe
scene.background = new THREE.Color(0xd2b48c);
