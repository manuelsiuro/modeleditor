// Miller - Resource processing serf
// Professional low-poly character snippet for Three.js template

const PALETTE = {
    body: 0xF0F0F0,      // Flour-dusted white
    skin: 0xF5D5B8,      // Light Peach
    sack: 0xF0F0F0,      // Flour sack white
    sackTie: 0xD2A86E,   // Tan tie
};

// 1. Body (Upright Cylinder)
// 1.5x tall as wide (e.g., width 0.6, height 0.9)
addMesh(new THREE.CylinderGeometry(0.3, 0.35, 0.9, 8), PALETTE.body, [0, 0.45, 0], [0, 0, 0], "Body");

// 2. Head (Sphere)
// Placed on top of the body
addMesh(new THREE.SphereGeometry(0.25, 8, 8), PALETTE.skin, [0, 1.1, 0], [0, 0, 0], "Head");

// 3. Arms (Small Cylinders in carrying pose)
// Left Arm
addMesh(new THREE.CylinderGeometry(0.08, 0.08, 0.4, 6), PALETTE.body, [-0.35, 0.6, 0.2], [Math.PI/2, 0, 0.2], "ArmLeft");
// Right Arm
addMesh(new THREE.CylinderGeometry(0.08, 0.08, 0.4, 6), PALETTE.body, [0.35, 0.6, 0.2], [Math.PI/2, 0, -0.2], "ArmRight");

// 4. Flour Sack (Rounded Cuboid/Sphere held in front)
// Main Sack Body
addMesh(new THREE.SphereGeometry(0.3, 6, 6), PALETTE.sack, [0, 0.6, 0.35], [0, 0, 0], "FlourSack");
// Sack Top (Pinch)
addMesh(new THREE.CylinderGeometry(0.05, 0.15, 0.15, 6), PALETTE.sack, [0, 0.9, 0.35], [0, 0, 0], "SackTop");
// Sack Tie (Thin band)
addMesh(new THREE.TorusGeometry(0.08, 0.02, 4, 8), PALETTE.sackTie, [0, 0.85, 0.35], [Math.PI/2, 0, 0], "SackTie");
