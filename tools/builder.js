// Builder Character - Three.js Snippet
const PALETTE = {
    body: 0xC4A56E,
    head: 0xF5D5B8,
    apron: 0x5C3A1E,
    metal: 0x7A7A7A,
    handle: 0xD2A86E
};

// 1. Body (Squat and chunky cylinder)
addMesh(new THREE.CylinderGeometry(0.3, 0.3, 0.9, 8), PALETTE.body, [0, 0.45, 0], [0, 0, 0], "Body");

// 2. Head (Slightly larger sphere)
addMesh(new THREE.SphereGeometry(0.22, 8, 6), PALETTE.head, [0, 1.05, 0], [0, 0, 0], "Head");

// 3. Apron (Flat cuboid on front)
addMesh(new THREE.BoxGeometry(0.4, 0.5, 0.05), PALETTE.apron, [0, 0.5, 0.31], [0, 0, 0], "Apron");

// 4. Left Arm (Holding hammer)
addMesh(new THREE.CylinderGeometry(0.06, 0.06, 0.4, 6), PALETTE.body, [-0.35, 0.6, 0.1], [Math.PI / 4, 0, -Math.PI / 8], "ArmLeft");

// 5. Hammer Handle (Positioned to pass through the "hand" area)
addMesh(new THREE.CylinderGeometry(0.02, 0.02, 0.4, 6), PALETTE.handle, [-0.45, 0.75, 0.2], [Math.PI / 4, 0, -Math.PI / 8], "HammerHandle");

// 6. Hammer Head (Attached to the end of the handle)
addMesh(new THREE.BoxGeometry(0.18, 0.12, 0.12), PALETTE.metal, [-0.52, 0.9, 0.28], [Math.PI / 4, 0, -Math.PI / 8], "HammerHead");

// 7. Right Arm (Resting at side)
addMesh(new THREE.CylinderGeometry(0.06, 0.06, 0.4, 6), PALETTE.body, [0.35, 0.5, 0], [0, 0, Math.PI / 12], "ArmRight");
