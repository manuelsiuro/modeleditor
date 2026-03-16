// Low-poly Butcher Character Snippet
const PALETTE = {
    body: 0xC4A56E,
    skin: 0xF5D5B8,
    maroon: 0x8B1A1A,
    steel: 0x7A7A7A,
    tan: 0xD2A86E
};

// Body: Squat rounded cuboid/cylinder
addMesh(new THREE.CylinderGeometry(0.4, 0.45, 1.2, 8), PALETTE.body, [0, 0.6, 0], [0, 0, 0], "Body");

// Head: Slightly oversized sphere
addMesh(new THREE.SphereGeometry(0.35, 8, 8), PALETTE.skin, [0, 1.55, 0], [0, 0, 0], "Head");

// Apron: Flat maroon cuboid on the front
addMesh(new THREE.BoxGeometry(0.5, 0.9, 0.11), PALETTE.maroon, [0, 0.65, 0.4], [0, 0, 0], "Apron");

// Right Arm: Holding cleaver
addMesh(new THREE.CylinderGeometry(0.1, 0.1, 0.5, 6), PALETTE.body, [0.45, 1.0, 0.1], [Math.PI/3, 0, 0.3], "RightArm");

// Left Arm: Hanging naturally
addMesh(new THREE.CylinderGeometry(0.1, 0.1, 0.5, 6), PALETTE.body, [-0.45, 1.0, 0.1], [-Math.PI/6, 0, -0.3], "LeftArm");

// Cleaver Blade: Broad, chunky rectangle
addMesh(new THREE.BoxGeometry(0.05, 0.3, 0.25), PALETTE.steel, [0.65, 0.85, 0.4], [0.1, 0, 0.2], "CleaverBlade");

// Cleaver Handle: Short cylinder
addMesh(new THREE.CylinderGeometry(0.04, 0.04, 0.2, 6), PALETTE.tan, [0.58, 0.95, 0.35], [Math.PI/2 + 0.1, 0, 0.2], "CleaverHandle");
