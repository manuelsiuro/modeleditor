// Low-poly Baker Character Snippet
const PALETTE = {
    body: 0xC4A56E,
    skin: 0xF5D5B8,
    white: 0xF0F0F0,
    bread: 0xD4A030
};

// Body: Squat rounded cuboid/cylinder
addMesh(new THREE.CylinderGeometry(0.4, 0.45, 1.2, 8), PALETTE.body, [0, 0.6, 0], [0, 0, 0], "Body");

// Head: Slightly oversized sphere
addMesh(new THREE.SphereGeometry(0.35, 8, 8), PALETTE.skin, [0, 1.55, 0], [0, 0, 0], "Head");

// Chef's Hat: Tall white cylinder
addMesh(new THREE.CylinderGeometry(0.25, 0.25, 0.5, 8), PALETTE.white, [0, 1.95, 0], [0, 0, 0], "ChefHat");

// Apron: Flat white cuboid on the front
addMesh(new THREE.BoxGeometry(0.5, 0.9, 0.1), PALETTE.white, [0, 0.65, 0.4], [0, 0, 0], "Apron");

// Arms: Simplified cylinders extended forward
addMesh(new THREE.CylinderGeometry(0.1, 0.1, 0.5, 6), PALETTE.body, [0.3, 1.0, 0.25], [Math.PI/2, 0, 0.2], "RightArm");
addMesh(new THREE.CylinderGeometry(0.1, 0.1, 0.5, 6), PALETTE.body, [-0.3, 1.0, 0.25], [Math.PI/2, 0, -0.2], "LeftArm");

// Bread: Golden brown loaf held in arms
const breadGeo = new THREE.SphereGeometry(0.15, 6, 6);
breadGeo.scale(1.5, 1, 1);
addMesh(breadGeo, PALETTE.bread, [0, 1.0, 0.5], [0, 0, 0], "BreadLoaf");
