const PALETTE = {
    armor: 0x7A7A7A,
    blade: 0xB0B0B0,
    hilt: 0xD2A86E,
    shieldFace: 0x8B5E3C,
    gold: 0xFFD700,
    faction: 0x4488FF, // Player 1 Blue
    visor: 0x333333
};

// --- Body & Armor ---
// Robust cylinder for the armored torso
addMesh(new THREE.CylinderGeometry(0.35, 0.4, 1.1, 8), PALETTE.armor, [0, 0.55, 0], [0, 0, 0], "ArmoredBody");

// Helmet (Head)
addMesh(new THREE.SphereGeometry(0.28, 8, 6), PALETTE.armor, [0, 1.3, 0], [0, 0, 0], "HelmetMain");
// Visor detail
addMesh(new THREE.BoxGeometry(0.35, 0.08, 0.1), PALETTE.visor, [0, 1.35, 0.22], [0, 0, 0], "HelmetVisor");

// --- Arms ---
// Left Arm (Shield side)
addMesh(new THREE.CylinderGeometry(0.08, 0.08, 0.5, 6), PALETTE.armor, [-0.4, 0.8, 0.1], [0.3, 0, 0.5], "LeftArm");
// Right Arm (Sword side)
addMesh(new THREE.CylinderGeometry(0.08, 0.08, 0.5, 6), PALETTE.armor, [0.4, 0.8, 0.1], [0.3, 0, -0.5], "RightArm");

// --- Shield ---
// Shield Rim (Steel)
addMesh(new THREE.CylinderGeometry(0.4, 0.4, 0.05, 8), PALETTE.armor, [-0.6, 0.8, 0.3], [Math.PI / 2, 0, 0], "ShieldRim");
// Shield Face (Brown)
addMesh(new THREE.CylinderGeometry(0.35, 0.35, 0.06, 8), PALETTE.shieldFace, [-0.6, 0.8, 0.32], [Math.PI / 2, 0, 0], "ShieldFace");
// Faction Emblem (Center)
addMesh(new THREE.BoxGeometry(0.18, 0.18, 0.07), PALETTE.faction, [-0.6, 0.8, 0.33], [Math.PI / 2, 0, 0], "ShieldEmblem");

// --- Sword ---
const swordGroupPos = [0.65, 0.9, 0.3];
const swordRot = [0.5, 0, -0.2];
// Blade
addMesh(new THREE.BoxGeometry(0.12, 1.1, 0.03), PALETTE.blade, [0.8, 1.3, 0.4], swordRot, "SwordBlade");
// Crossguard
addMesh(new THREE.BoxGeometry(0.35, 0.06, 0.06), PALETTE.hilt, [0.72, 0.75, 0.25], swordRot, "SwordGuard");
// Hilt/Handle
addMesh(new THREE.CylinderGeometry(0.05, 0.05, 0.25, 6), PALETTE.hilt, [0.68, 0.6, 0.18], swordRot, "SwordHandle");

// --- Rank Chevrons ---
// Positioned on the right shoulder
addMesh(new THREE.ConeGeometry(0.04, 0.08, 4), PALETTE.gold, [0.28, 1.1, 0], [0, 0, 0], "RankChevron1");
addMesh(new THREE.ConeGeometry(0.04, 0.08, 4), PALETTE.gold, [0.18, 1.1, 0.05], [0, 0, 0], "RankChevron2");

// --- Legs (Simplified armored boots) ---
addMesh(new THREE.BoxGeometry(0.2, 0.2, 0.3), PALETTE.armor, [-0.15, 0.1, 0.05], [0, 0, 0], "LeftBoot");
addMesh(new THREE.BoxGeometry(0.2, 0.2, 0.3), PALETTE.armor, [0.15, 0.1, 0.05], [0, 0, 0], "RightBoot");
