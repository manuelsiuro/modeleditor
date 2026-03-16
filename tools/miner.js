// Miner - Three.js Snippet
// A resource gathering serf with a distinctive yellow helmet and pickaxe.

const PALETTE = {
    body: 0xC4A56E,
    skin: 0xF5D5B8,
    helmet: 0xF0C030,
    pickaxeHead: 0x5A5A5A,
    pickaxeHandle: 0xD2A86E
};

// 1. Body: Squat, chunky cylinder representing basic clothing
addMesh(new THREE.CylinderGeometry(0.35, 0.4, 1.2, 8), PALETTE.body, [0, 0.6, 0], [0, 0, 0], "Body");

// 2. Head: Slightly oversized sphere for readability
addMesh(new THREE.SphereGeometry(0.35, 12, 10), PALETTE.skin, [0, 1.5, 0], [0, 0, 0], "Head");

// 3. Helmet: Bright yellow hemisphere on top of the head
// SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength)
addMesh(new THREE.SphereGeometry(0.38, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), PALETTE.helmet, [0, 1.5, 0], [0, 0, 0], "Helmet");

// 4. Arms
// Left Arm (Relaxed)
addMesh(new THREE.CylinderGeometry(0.08, 0.08, 0.5, 6), PALETTE.body, [-0.45, 1.0, 0], [0, 0, Math.PI / 8], "LeftArm");

// Right Arm (Holding Pickaxe)
addMesh(new THREE.CylinderGeometry(0.08, 0.08, 0.5, 6), PALETTE.body, [0.45, 1.1, 0.2], [-Math.PI / 3, 0, -Math.PI / 8], "RightArm");

// 5. Pickaxe (Held in right hand)
const pickaxePos = [0.7, 1.2, 0.4];
const pickaxeRot = [Math.PI / 3, 0, -Math.PI / 8];

// Handle: Thin cylinder
addMesh(new THREE.CylinderGeometry(0.04, 0.04, 0.9, 6), PALETTE.pickaxeHandle, pickaxePos, pickaxeRot, "PickaxeHandle");

// Head: A slightly curved-looking box (represented by a long box)
// We rotate it 90 degrees relative to the handle's main axis
addMesh(new THREE.BoxGeometry(0.1, 0.7, 0.1), PALETTE.pickaxeHead, [0.7, 1.55, 0.65], [pickaxeRot[0], pickaxeRot[1], pickaxeRot[2] + Math.PI/2], "PickaxeHead");

// 6. Feet (Simple low poly blocks)
addMesh(new THREE.BoxGeometry(0.25, 0.15, 0.35), PALETTE.body, [-0.18, 0.075, 0.1], [0, 0, 0], "Foot_Left");
addMesh(new THREE.BoxGeometry(0.25, 0.15, 0.35), PALETTE.body, [0.18, 0.075, 0.1], [0, 0, 0], "Foot_Right");
