// Tannery - Three.js Snippet
const PALETTE = {
    frame: 0x5C3A1E,
    stretchedHide: 0xC4A060,
    walls: 0xA0724A,
    foundation: 0x8A8A7A,
    rackFrames: 0x4A4A4A,
    vatLiquid: 0x7A6040,
    finishedHide: 0xD4BA8A,
    floor: 0x3D2714, // Darker brown
    bark: 0xA0724A,
    bucket: 0x5C3A1E
};

// 1. STONE FOUNDATION
addMesh(new THREE.BoxGeometry(2.8, 0.15, 2.8), PALETTE.foundation, [0, 0.075, 0], [0, 0, 0], "Foundation");
// Rough foundation details
addMesh(new THREE.BoxGeometry(0.3, 0.2, 0.3), PALETTE.foundation, [1.3, 0.1, 1.3], [0, 0.4, 0], "Foundation_Detail1");
addMesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), PALETTE.foundation, [-1.3, 0.1, 1.2], [0, -0.2, 0], "Foundation_Detail2");

// 2. MAIN WORKSHOP STRUCTURE
// Interior Floor
addMesh(new THREE.BoxGeometry(2.0, 0.05, 2.0), PALETTE.floor, [0, 0.15, 0], [0, 0, 0], "InteriorFloor");

// Walls
addMesh(new THREE.BoxGeometry(2.0, 1.2, 0.1), PALETTE.walls, [0, 0.75, -0.95], [0, 0, 0], "BackWall");
addMesh(new THREE.BoxGeometry(0.1, 1.2, 1.9), PALETTE.walls, [-0.95, 0.75, 0], [0, 0, 0], "LeftWall");
addMesh(new THREE.BoxGeometry(0.1, 1.2, 1.9), PALETTE.walls, [0.95, 0.75, 0], [0, 0, 0], "RightWall");

// Structural Beams (Front Opening)
addMesh(new THREE.BoxGeometry(0.12, 1.2, 0.12), PALETTE.frame, [-0.95, 0.75, 0.95], [0, 0, 0], "FrontBeamLeft");
addMesh(new THREE.BoxGeometry(0.12, 1.2, 0.12), PALETTE.frame, [0.95, 0.75, 0.95], [0, 0, 0], "FrontBeamRight");
addMesh(new THREE.BoxGeometry(2.0, 0.12, 0.12), PALETTE.frame, [0, 1.3, 0.95], [0, 0, 0], "FrontBeamTop");

// 3. ROOF
const roofL = new THREE.BoxGeometry(1.4, 0.08, 2.4);
addMesh(roofL, PALETTE.frame, [-0.55, 1.7, 0], [0, 0, Math.PI / 6], "RoofLeft");
const roofR = new THREE.BoxGeometry(1.4, 0.08, 2.4);
addMesh(roofR, PALETTE.frame, [0.55, 1.7, 0], [0, 0, -Math.PI / 6], "RoofRight");

// Rafters visible from front
addMesh(new THREE.BoxGeometry(0.05, 0.1, 0.1), PALETTE.frame, [0, 1.6, 1.0], [0, 0, 0], "RafterFront");

// Chimney
addMesh(new THREE.BoxGeometry(0.3, 0.6, 0.3), PALETTE.foundation, [-0.6, 1.8, -0.6], [0, 0, 0], "Chimney");

// 4. PROPS - TANNING VATS
const vatGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.5, 8);
addMesh(vatGeo, PALETTE.rackFrames, [-0.4, 0.4, 0.3], [0, 0, 0], "Vat1");
addMesh(new THREE.CylinderGeometry(0.35, 0.35, 0.1, 8), PALETTE.vatLiquid, [-0.4, 0.6, 0.3], [0, 0, 0], "VatLiquid1");

addMesh(vatGeo, PALETTE.rackFrames, [0.4, 0.4, -0.3], [0, 0, 0], "Vat2");
addMesh(new THREE.CylinderGeometry(0.35, 0.35, 0.1, 8), PALETTE.vatLiquid, [0.4, 0.6, -0.3], [0, 0, 0], "VatLiquid2");

// 5. PROPS - DRYING RACKS & HIDES
function createRack(x, z, ry) {
    const rackName = `Rack_${x}_${z}`;
    addMesh(new THREE.BoxGeometry(0.05, 1.2, 0.05), PALETTE.rackFrames, [x - 0.4, 0.75, z], [0, ry, 0], rackName + "_PostL");
    addMesh(new THREE.BoxGeometry(0.05, 1.2, 0.05), PALETTE.rackFrames, [x + 0.4, 0.75, z], [0, ry, 0], rackName + "_PostR");
    addMesh(new THREE.BoxGeometry(0.9, 0.05, 0.05), PALETTE.rackFrames, [x, 1.2, z], [0, ry, 0], rackName + "_BarT");
    addMesh(new THREE.BoxGeometry(0.9, 0.05, 0.05), PALETTE.rackFrames, [x, 0.4, z], [0, ry, 0], rackName + "_BarB");
    
    // Stretched Hide
    addMesh(new THREE.BoxGeometry(0.7, 0.7, 0.02), PALETTE.stretchedHide, [x, 0.8, z], [0, ry, 0], rackName + "_Hide");
}

createRack(-1.6, 0.8, 0.2);
createRack(1.6, 0.5, -0.3);

// 6. RAW HIDE PILE (Input)
for (let i = 0; i < 5; i++) {
    addMesh(new THREE.BoxGeometry(0.5, 0.02, 0.4), PALETTE.stretchedHide, 
        [1.5, 0.16 + i * 0.03, 1.6], [0, Math.random(), 0], `RawHide_${i}`);
}

// 7. FINISHED LEATHER STACK (Output)
for (let i = 0; i < 8; i++) {
    addMesh(new THREE.BoxGeometry(0.4, 0.03, 0.4), PALETTE.finishedHide, 
        [-1.5, 0.17 + i * 0.04, 1.6], [0, 0, 0], `FinishedLeather_${i}`);
}

// 8. ADDITIONAL DETAILS
// Scraping tools
addMesh(new THREE.BoxGeometry(0.02, 0.4, 0.1), PALETTE.rackFrames, [0.85, 0.4, 0.5], [0.3, 0, 0.2], "Scraper1");

// Water bucket
addMesh(new THREE.CylinderGeometry(0.15, 0.1, 0.25, 8), PALETTE.bucket, [0, 0.25, 0.6], [0, 0, 0], "Bucket");

// Bark Pile
for (let i = 0; i < 10; i++) {
    addMesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), PALETTE.bark, 
        [0.6 + Math.random() * 0.3, 0.2, 0.6 + Math.random() * 0.3], [Math.random(), Math.random(), Math.random()], `Bark_${i}`);
}

// Drying line
addMesh(new THREE.CylinderGeometry(0.02, 0.02, 1.2, 4), PALETTE.frame, [0, 1.0, 1.8], [0, 0, Math.PI / 2], "DryingLine");
addMesh(new THREE.BoxGeometry(0.05, 1.0, 0.05), PALETTE.frame, [-0.6, 0.5, 1.8], [0, 0, 0], "LinePostL");
addMesh(new THREE.BoxGeometry(0.05, 1.0, 0.05), PALETTE.frame, [0.6, 0.5, 1.8], [0, 0, 0], "LinePostR");
// Hides on line
addMesh(new THREE.BoxGeometry(0.3, 0.4, 0.02), PALETTE.finishedHide, [-0.2, 0.8, 1.8], [0.1, 0, 0], "LineHide1");
addMesh(new THREE.BoxGeometry(0.3, 0.4, 0.02), PALETTE.finishedHide, [0.2, 0.8, 1.8], [-0.1, 0, 0], "LineHide2");
