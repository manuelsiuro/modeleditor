// Low-poly Forester Character Snippet
const PALETTE = {
    body: 0xC4A56E, // Light Brown
    skin: 0xF5D5B8, // Light Peach
    forest_green: 0x4A7A3D, // Forest Green
    trunk: 0xD2A86E // Tan
};

// 1. Body: Squat rounded cylinder representing clothing
addMesh(new THREE.CylinderGeometry(0.4, 0.45, 1.2, 8), PALETTE.body, [0, 0.6, 0], [0, 0, 0], "Body");

// 2. Head: Slightly oversized sphere for a charming look
addMesh(new THREE.SphereGeometry(0.35, 8, 8), PALETTE.skin, [0, 1.55, 0], [0, 0, 0], "Head");

// 3. Green Accent Band: Thin cylinder representing a sash or band
addMesh(new THREE.CylinderGeometry(0.42, 0.47, 0.12, 8), PALETTE.forest_green, [0, 0.9, 0], [0, 0, 0], "GreenSash");

// 4. Arms: Simplified cylinders
// Right Arm (Extended forward to hold the sapling)
addMesh(new THREE.CylinderGeometry(0.1, 0.1, 0.6, 6), PALETTE.body, [0.4, 1.1, 0.25], [Math.PI/2, 0, 0.3], "RightArm");
// Left Arm (Slightly relaxed at side)
addMesh(new THREE.CylinderGeometry(0.1, 0.1, 0.6, 6), PALETTE.body, [-0.4, 1.1, 0.1], [Math.PI/2.5, 0, -0.2], "LeftArm");

// 5. The Sapling (Primary identifier)
// Tiny trunk (Tan)
addMesh(new THREE.CylinderGeometry(0.04, 0.04, 0.3, 6), PALETTE.trunk, [0.55, 1.35, 0.55], [0, 0, 0], "SaplingTrunk");
// Small cone (Forest Green)
addMesh(new THREE.ConeGeometry(0.2, 0.5, 8), PALETTE.forest_green, [0.55, 1.7, 0.55], [0, 0, 0], "SaplingCone");

// 6. Optional green chest patch (Forest insignia)
addMesh(new THREE.BoxGeometry(0.15, 0.15, 0.05), PALETTE.forest_green, [0.15, 1.1, 0.35], [0, 0, 0], "ForestPatch");
