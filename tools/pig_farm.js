// Pig Farm - Three.js Geometry Snippet
// Generated for a low-poly stylized Pig Farm

const PALETTE = {
    styWalls: 0xC4A56E,
    roof: 0x5C3A1E,
    fence: 0x6B4226,
    pig: 0xF0B0B0,
    pigDetails: 0xD08080,
    mud: 0x8B7355,
    mudDark: 0x5D4E3A,
    trough: 0x808080,
    grain: 0xC4A060,
    grass: 0x5A8F4A,
    hay: 0xD4B36D,
    water: 0x4A90E2
};

// 1. BASE / GROUND
// Grass outside
addMesh(new THREE.BoxGeometry(12, 0.2, 12), PALETTE.grass, [0, -0.1, 0], [0, 0, 0], "GrassBase");
// Mud inside the pen area
addMesh(new THREE.BoxGeometry(6, 0.22, 6), PALETTE.mud, [2.5, -0.09, 0], [0, 0, 0], "PenMud");

// 2. STY BUILDING (The Barn)
// Main body
addMesh(new THREE.BoxGeometry(4, 2, 6), PALETTE.styWalls, [-2.5, 1, 0], [0, 0, 0], "StyWalls");
// Roof (Two slopes)
addMesh(new THREE.BoxGeometry(2.5, 0.2, 6.2), PALETTE.roof, [-3.4, 2.4, 0], [0, 0, -Math.PI / 6], "RoofLeft");
addMesh(new THREE.BoxGeometry(2.5, 0.2, 6.2), PALETTE.roof, [-1.6, 2.4, 0], [0, 0, Math.PI / 6], "RoofRight");

// 3. THE PEN (Fencing)
const fenceHeight = 0.8;
const postGeo = new THREE.BoxGeometry(0.15, fenceHeight, 0.15);
const railGeoH = new THREE.BoxGeometry(3, 0.1, 0.05);
const railGeoV = new THREE.BoxGeometry(0.05, 0.1, 6);

// Posts and Rails for the pen enclosure (Approx 6x6 area centered at 2.5, 0, 0)
// Right side fence
addMesh(postGeo, PALETTE.fence, [5.5, fenceHeight/2, 3], [0,0,0], "FencePost_R1");
addMesh(postGeo, PALETTE.fence, [5.5, fenceHeight/2, -3], [0,0,0], "FencePost_R2");
addMesh(postGeo, PALETTE.fence, [5.5, fenceHeight/2, 0], [0,0,0], "FencePost_R3");
addMesh(new THREE.BoxGeometry(0.05, 0.1, 6), PALETTE.fence, [5.5, 0.3, 0], [0,0,0], "FenceRail_R_Lower");
addMesh(new THREE.BoxGeometry(0.05, 0.1, 6), PALETTE.fence, [5.5, 0.6, 0], [0,0,0], "FenceRail_R_Upper");

// Front side fence (z = 3)
addMesh(postGeo, PALETTE.fence, [2.5, fenceHeight/2, 3], [0,0,0], "FencePost_F1");
addMesh(new THREE.BoxGeometry(6, 0.1, 0.05), PALETTE.fence, [2.5, 0.3, 3], [0,0,0], "FenceRail_F_Lower");
addMesh(new THREE.BoxGeometry(6, 0.1, 0.05), PALETTE.fence, [2.5, 0.6, 3], [0,0,0], "FenceRail_F_Upper");

// Back side fence (z = -3)
addMesh(postGeo, PALETTE.fence, [2.5, fenceHeight/2, -3], [0,0,0], "FencePost_B1");
addMesh(new THREE.BoxGeometry(6, 0.1, 0.05), PALETTE.fence, [2.5, 0.3, -3], [0,0,0], "FenceRail_B_Lower");
addMesh(new THREE.BoxGeometry(6, 0.1, 0.05), PALETTE.fence, [2.5, 0.6, -3], [0,0,0], "FenceRail_B_Upper");

// Connecting posts to the sty
addMesh(postGeo, PALETTE.fence, [-0.5, fenceHeight/2, 3], [0,0,0], "FencePost_ConnF");
addMesh(postGeo, PALETTE.fence, [-0.5, fenceHeight/2, -3], [0,0,0], "FencePost_ConnB");

// 4. THE PIGS (Cute low-poly shapes)
function createPig(x, z, rotY, name) {
    const groupName = name || "Pig";
    // Body
    addMesh(new THREE.BoxGeometry(0.6, 0.4, 0.4), PALETTE.pig, [x, 0.3, z], [0, rotY, 0], groupName + "_Body");
    // Head
    addMesh(new THREE.BoxGeometry(0.25, 0.25, 0.25), PALETTE.pig, [x + Math.cos(rotY)*0.4, 0.4, z - Math.sin(rotY)*0.4], [0, rotY, 0], groupName + "_Head");
    // Snout
    addMesh(new THREE.BoxGeometry(0.1, 0.1, 0.15), PALETTE.pigDetails, [x + Math.cos(rotY)*0.55, 0.38, z - Math.sin(rotY)*0.55], [0, rotY, 0], groupName + "_Snout");
    // Legs
    const legGeo = new THREE.BoxGeometry(0.1, 0.2, 0.1);
    addMesh(legGeo, PALETTE.pig, [x - 0.2, 0.1, z - 0.1], [0, 0, 0], groupName + "_Leg1");
    addMesh(legGeo, PALETTE.pig, [x + 0.2, 0.1, z - 0.1], [0, 0, 0], groupName + "_Leg2");
    addMesh(legGeo, PALETTE.pig, [x - 0.2, 0.1, z + 0.1], [0, 0, 0], groupName + "_Leg3");
    addMesh(legGeo, PALETTE.pig, [x + 0.2, 0.1, z + 0.1], [0, 0, 0], groupName + "_Leg4");
}

createPig(2, 1, Math.PI / 4, "Pig1");
createPig(4, -1.5, -Math.PI / 6, "Pig2");
createPig(1.5, -2, Math.PI, "Pig3");

// 5. PROPS
// Feeding Trough
addMesh(new THREE.BoxGeometry(1.5, 0.3, 0.6), PALETTE.trough, [1, 0.15, 0], [0, 0, 0], "TroughBase");
// Grain in trough
addMesh(new THREE.BoxGeometry(1.3, 0.1, 0.4), PALETTE.grain, [1, 0.3, 0], [0, 0, 0], "TroughGrain");

// Grain Sacks
addMesh(new THREE.CylinderGeometry(0.3, 0.3, 0.6, 6), PALETTE.grain, [-0.5, 0.3, 2.2], [0.2, 0, 0.1], "GrainSack1");
addMesh(new THREE.CylinderGeometry(0.3, 0.3, 0.6, 6), PALETTE.grain, [-0.8, 0.3, 1.8], [-0.1, 0.4, 0], "GrainSack2");

// Mud Puddles
addMesh(new THREE.BoxGeometry(1.5, 0.05, 1.2), PALETTE.mudDark, [3.5, 0.12, 1.5], [0, 0.5, 0], "MudPuddle1");
addMesh(new THREE.BoxGeometry(1, 0.05, 1), PALETTE.mudDark, [1.5, 0.12, -1.5], [0, -0.2, 0], "MudPuddle2");

// Water Bucket
addMesh(new THREE.CylinderGeometry(0.2, 0.15, 0.4, 8), PALETTE.trough, [0.5, 0.2, -1.5], [0, 0, 0], "Bucket");
addMesh(new THREE.CylinderGeometry(0.18, 0.18, 0.05, 8), PALETTE.water, [0.5, 0.38, -1.5], [0, 0, 0], "BucketWater");

// Hay Bales
addMesh(new THREE.BoxGeometry(0.6, 0.4, 0.8), PALETTE.hay, [-1.5, 0.2, -1.5], [0, 0.4, 0], "HayBale1");
addMesh(new THREE.BoxGeometry(0.6, 0.4, 0.8), PALETTE.hay, [-1.2, 0.2, -2.2], [0, -0.2, 0], "HayBale2");

// Door opening (represented as a darker area or just a gap in the wall)
addMesh(new THREE.BoxGeometry(0.1, 1.5, 1.2), 0x221100, [-0.5, 0.75, 0], [0, 0, 0], "StyDoor");

// Grass Tufts (simple cones)
const tuftGeo = new THREE.ConeGeometry(0.15, 0.3, 4);
addMesh(tuftGeo, PALETTE.grass, [-5, 0.15, 5], [0,0,0], "GrassTuft1");
addMesh(tuftGeo, PALETTE.grass, [-4.5, 0.15, 4.2], [0,0,0], "GrassTuft2");
addMesh(tuftGeo, PALETTE.grass, [5, 0.15, -5], [0,0,0], "GrassTuft3");
addMesh(tuftGeo, PALETTE.grass, [4.5, 0.15, -4.2], [0,0,0], "GrassTuft4");
