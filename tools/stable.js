// Stable - Three.js Snippet
const PALETTE = {
    walls: 0xA0724A,
    hay: 0xD4B84A,
    trim: 0x5C3A1E,
    roof: 0x8B4513,
    accents: 0xF0F0F0,
    foundation: 0x8A8A7A,
    horse: 0xA0522D,
    grass: 0x7CBA5C,
    water: 0x4A90E2
};

// 1. Foundation
addMesh(new THREE.BoxGeometry(2.8, 0.1, 2.0), PALETTE.foundation, [0, 0.05, 0], [0, 0, 0], "Foundation");

// 2. Main Barn Body (Recessed for stalls)
addMesh(new THREE.BoxGeometry(2.4, 1.2, 1.0), PALETTE.walls, [0, 0.65, -0.2], [0, 0, 0], "BarnBackBody");
// Left Wall
addMesh(new THREE.BoxGeometry(0.1, 1.2, 1.4), PALETTE.walls, [-1.15, 0.65, 0], [0, 0, 0], "WallLeft");
// Right Wall
addMesh(new THREE.BoxGeometry(0.1, 1.2, 1.4), PALETTE.walls, [1.15, 0.65, 0], [0, 0, 0], "WallRight");

// 3. Stalls Partitions
addMesh(new THREE.BoxGeometry(0.1, 1.0, 1.0), PALETTE.trim, [-0.4, 0.55, 0.2], [0, 0, 0], "Partition1");
addMesh(new THREE.BoxGeometry(0.1, 1.0, 1.0), PALETTE.trim, [0.4, 0.55, 0.2], [0, 0, 0], "Partition2");

// Stall Floors (Straw Bedding)
addMesh(new THREE.BoxGeometry(0.7, 0.05, 1.2), PALETTE.hay, [-0.77, 0.12, 0.1], [0, 0, 0], "StallStraw1");
addMesh(new THREE.BoxGeometry(0.7, 0.05, 1.2), PALETTE.hay, [0, 0.12, 0.1], [0, 0, 0], "StallStraw2");
addMesh(new THREE.BoxGeometry(0.7, 0.05, 1.2), PALETTE.hay, [0.77, 0.12, 0.1], [0, 0, 0], "StallStraw3");

// 4. Roof (Steep Pitch)
addMesh(new THREE.BoxGeometry(1.6, 0.1, 2.2), PALETTE.roof, [-0.6, 1.6, 0], [0, 0, Math.PI / 4], "RoofLeft");
addMesh(new THREE.BoxGeometry(1.6, 0.1, 2.2), PALETTE.roof, [0.6, 1.6, 0], [0, 0, -Math.PI / 4], "RoofRight");

// 5. Hayloft Platform
addMesh(new THREE.BoxGeometry(2.4, 0.05, 1.0), PALETTE.trim, [0, 1.1, 0.2], [0, 0, 0], "HayloftFloor");
// Peeking Hay
addMesh(new THREE.IcosahedronGeometry(0.2, 0), PALETTE.hay, [-0.8, 1.2, 0.5], [0, 0, 0], "LoftHay1");
addMesh(new THREE.BoxGeometry(0.3, 0.2, 0.3), PALETTE.hay, [0.5, 1.2, 0.5], [0.2, 0.4, 0], "LoftHay2");

// 6. Double Door (End Wall)
addMesh(new THREE.BoxGeometry(0.05, 0.9, 0.35), PALETTE.trim, [1.2, 0.55, -0.3], [0, 0, 0], "DoorLeft");
addMesh(new THREE.BoxGeometry(0.05, 0.9, 0.35), PALETTE.trim, [1.2, 0.55, 0.3], [0, 0.3, 0], "DoorRight_Ajar");

// 7. Horse Silhouette (Stall 2)
addMesh(new THREE.BoxGeometry(0.3, 0.4, 0.6), PALETTE.horse, [0, 0.35, 0.1], [0, 0, 0], "HorseBody");
addMesh(new THREE.BoxGeometry(0.15, 0.3, 0.15), PALETTE.horse, [0, 0.6, 0.4], [0.3, 0, 0], "HorseNeck");
addMesh(new THREE.BoxGeometry(0.18, 0.15, 0.25), PALETTE.horse, [0, 0.75, 0.5], [0, 0, 0], "HorseHead");
addMesh(new THREE.CylinderGeometry(0.04, 0.04, 0.4), PALETTE.horse, [-0.1, 0.2, -0.1], [0, 0, 0], "Leg1");
addMesh(new THREE.CylinderGeometry(0.04, 0.04, 0.4), PALETTE.horse, [0.1, 0.2, -0.1], [0, 0, 0], "Leg2");
addMesh(new THREE.CylinderGeometry(0.04, 0.04, 0.4), PALETTE.horse, [-0.1, 0.2, 0.3], [0, 0, 0], "Leg3");
addMesh(new THREE.CylinderGeometry(0.04, 0.04, 0.4), PALETTE.horse, [0.1, 0.2, 0.3], [0, 0, 0], "Leg4");

// 8. Props
// Water Trough
addMesh(new THREE.BoxGeometry(0.8, 0.2, 0.3), PALETTE.foundation, [0, 0.2, 1.2], [0, 0, 0], "TroughBody");
addMesh(new THREE.BoxGeometry(0.7, 0.05, 0.2), PALETTE.water, [0, 0.28, 1.2], [0, 0, 0], "TroughWater");

// Hay Bales
addMesh(new THREE.BoxGeometry(0.3, 0.2, 0.2), PALETTE.hay, [-1.5, 0.15, 0.5], [0, 0.5, 0], "HayBale1");
addMesh(new THREE.BoxGeometry(0.3, 0.2, 0.2), PALETTE.hay, [-1.4, 0.35, 0.6], [0, 0.2, 0], "HayBale2");

// Pitchfork
addMesh(new THREE.CylinderGeometry(0.01, 0.01, 0.8), PALETTE.trim, [-1.1, 0.4, 0.8], [0.2, 0, 0.1], "PitchforkHandle");
addMesh(new THREE.BoxGeometry(0.1, 0.02, 0.1), PALETTE.foundation, [-1.13, 0.8, 0.88], [0.2, 0, 0.1], "PitchforkHead");

// Hitching Post
addMesh(new THREE.CylinderGeometry(0.05, 0.05, 0.5), PALETTE.trim, [1.5, 0.25, 1.2], [0, 0, 0], "HitchingPost");
addMesh(new THREE.CylinderGeometry(0.03, 0.03, 0.4), PALETTE.trim, [1.5, 0.45, 1.2], [Math.PI/2, 0, 0], "HitchingBar");

// Horseshoe
addMesh(new THREE.TorusGeometry(0.08, 0.01, 8, 8, Math.PI), PALETTE.foundation, [1.23, 1.0, 0], [0, Math.PI/2, Math.PI], "Horseshoe");

// Ground/Path
addMesh(new THREE.BoxGeometry(5, 0.01, 5), PALETTE.grass, [0, 0, 0], [0, 0, 0], "Grass");
addMesh(new THREE.BoxGeometry(1.5, 0.02, 0.6), 0xB08D57, [1.5, 0.01, 0.5], [0, -0.2, 0], "DirtPath");
