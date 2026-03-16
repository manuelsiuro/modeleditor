// Geologist - Three.js Snippet

const PALETTE = {
    body: 0xC4A56E,
    skin: 0xF5D5B8,
    hat: 0xA0724A,
    scroll: 0xD2A86E
};

// 1. Body: Squat, chunky cylinder
addMesh(new THREE.CylinderGeometry(0.4, 0.4, 1.2, 8), PALETTE.body, [0, 0.6, 0], [0, 0, 0], "Body");

// 2. Head: Slightly oversized sphere
addMesh(new THREE.SphereGeometry(0.35, 12, 10), PALETTE.skin, [0, 1.5, 0], [0, 0, 0], "Head");

// 3. Wide-brimmed Hat
// Brim
addMesh(new THREE.CylinderGeometry(0.6, 0.6, 0.05, 16), PALETTE.hat, [0, 1.75, 0], [0, 0, 0], "Hat_Brim");
// Top part (Crown)
addMesh(new THREE.CylinderGeometry(0.35, 0.35, 0.2, 16), PALETTE.hat, [0, 1.85, 0], [0, 0, 0], "Hat_Crown");

// 4. Arms
// Left Arm (Relaxed)
addMesh(new THREE.CylinderGeometry(0.1, 0.1, 0.5, 6), PALETTE.body, [-0.5, 1.0, 0], [0, 0, Math.PI / 8], "LeftArm");
// Right Arm (Holding Scroll)
addMesh(new THREE.CylinderGeometry(0.1, 0.1, 0.5, 6), PALETTE.body, [0.5, 1.1, 0.2], [-Math.PI / 4, 0, -Math.PI / 8], "RightArm");

// 5. Map Scroll (Held in right hand)
addMesh(new THREE.CylinderGeometry(0.08, 0.08, 0.5, 8), PALETTE.scroll, [0.7, 1.1, 0.4], [Math.PI / 2, 0, 0], "MapScroll");
