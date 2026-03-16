// Blacksmith Character - Three.js Snippet
const PALETTE = {
    body: 0xC4A56E,
    head: 0xF5D5B8,
    apron: 0x2A2A2A, // Soot Black
    metal: 0x5A5A5A, // Dark Grey
    handle: 0xD2A86E  // Tan
};

// 1. Body (Bulkier squat and chunky cylinder)
addMesh(new THREE.CylinderGeometry(0.35, 0.35, 0.9, 8), PALETTE.body, [0, 0.45, 0], [0, 0, 0], "Body");

// 2. Head (Standard size sphere)
addMesh(new THREE.SphereGeometry(0.22, 8, 6), PALETTE.head, [0, 1.05, 0], [0, 0, 0], "Head");

// 3. Soot Black Apron (Flat cuboid on front)
addMesh(new THREE.BoxGeometry(0.45, 0.6, 0.05), PALETTE.apron, [0, 0.45, 0.36], [0, 0, 0], "Apron");

// 4. Left Arm (Holding the large hammer)
addMesh(new THREE.CylinderGeometry(0.08, 0.08, 0.4, 6), PALETTE.body, [-0.4, 0.6, 0.1], [Math.PI / 4, 0, -Math.PI / 8], "ArmLeft");

// 5. Large Hammer Handle
addMesh(new THREE.CylinderGeometry(0.025, 0.025, 0.5, 6), PALETTE.handle, [-0.55, 0.85, 0.25], [Math.PI / 4, 0, -Math.PI / 8], "HammerHandle");

// 6. Large Hammer Head (Significant mass)
addMesh(new THREE.BoxGeometry(0.28, 0.18, 0.18), PALETTE.metal, [-0.65, 1.0, 0.35], [Math.PI / 4, 0, -Math.PI / 8], "HammerHead");

// 7. Right Arm (Resting at side)
addMesh(new THREE.CylinderGeometry(0.08, 0.08, 0.4, 6), PALETTE.body, [0.4, 0.5, 0], [0, 0, Math.PI / 12], "ArmRight");

// --- LIGHTING AND PRESENTATION OVERRIDES ---

// 1. Warm Directional Sunlight (Above-left)
if (typeof sun !== 'undefined') {
    sun.color.setHex(0xfff0d0);
    sun.intensity = 1.8;
    sun.position.set(-5, 10, 5); // From above-left
}

// 2. Forge Heat Rim Light (Warm orange from the side/back)
const rimLight = new THREE.PointLight(0xff4500, 10, 5);
rimLight.position.set(2, 1, -2);
scene.add(rimLight);

// 3. Subtle Warm Ambient Fill
const ambient = scene.children.find(c => c instanceof THREE.AmbientLight);
if (ambient) {
    ambient.color.setHex(0xffe0b0);
    ambient.intensity = 0.4;
}

// 4. Background (Darker/Neutral to make the character pop)
scene.background = new THREE.Color(0x1a1a1a);

// 5. Camera positioning for best isometric feel
camera.position.set(5, 5, 5);
orbit.update();
