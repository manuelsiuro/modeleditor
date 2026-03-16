
// Stone Mine - Low Poly 3D Model Snippet
// Palette defined in the prompt
const PALETTE = {
    mine_entrance: 0x5A5A5A,
    mine_shaft: 0x1A1A1A,
    ore_indicator: 0xB8B8B8,
    mountain_rock_1: 0x8A8A8A,
    mountain_rock_2: 0x7A7A7A,
    timber: 0x8B5E3C,
    cut_stone_1: 0xB0B0B0,
    cut_stone_2: 0xA0A098,
    ground: 0x8A7A6A,
    rail: 0x4A4A4A,
    cart: 0x6A5030,
    lantern: 0xFFD700,
    steel: 0x707070
};

// 1. Mountain Backdrop
// Large blocky mass
addMesh(new THREE.BoxGeometry(6, 4, 4), PALETTE.mountain_rock_1, [0, 2, -1], [0, 0.1, 0], "MountainBase");
addMesh(new THREE.BoxGeometry(4, 3, 3), PALETTE.mountain_rock_2, [-2, 1.5, -0.5], [0, -0.2, 0], "MountainSideLeft");
addMesh(new THREE.BoxGeometry(3, 5, 3), PALETTE.mountain_rock_1, [2, 2.5, -1.5], [0, 0.3, 0], "MountainPeak");

// 2. Mine Entrance Structure
addMesh(new THREE.BoxGeometry(3.5, 2.5, 1), PALETTE.mine_entrance, [0, 1.25, 1], [0, 0, 0], "EntranceFacade");
addMesh(new THREE.BoxGeometry(2.5, 1.8, 0.1), PALETTE.mine_shaft, [0, 0.9, 1.46], [0, 0, 0], "ShaftOpening");

// 3. Support Timber Beams
// Frame for the entrance
addMesh(new THREE.BoxGeometry(0.3, 2.2, 0.3), PALETTE.timber, [-1.2, 1.1, 1.6], [0, 0, 0], "TimberLeft");
addMesh(new THREE.BoxGeometry(0.3, 2.2, 0.3), PALETTE.timber, [1.2, 1.1, 1.6], [0, 0, 0], "TimberRight");
addMesh(new THREE.BoxGeometry(2.7, 0.3, 0.3), PALETTE.timber, [0, 2.1, 1.6], [0, 0, 0], "TimberTop");

// 4. Rail Tracks
addMesh(new THREE.BoxGeometry(0.1, 0.05, 4), PALETTE.rail, [-0.4, 0.05, 3], [0, 0, 0], "RailLeft");
addMesh(new THREE.BoxGeometry(0.1, 0.05, 4), PALETTE.rail, [0.4, 0.05, 3], [0, 0, 0], "RailRight");
// Sleepers
for(let z = 1.5; z <= 5; z += 0.8) {
    addMesh(new THREE.BoxGeometry(1, 0.05, 0.2), PALETTE.timber, [0, 0.02, z], [0, 0, 0], "Sleeper_" + z);
}

// 5. Ore Cart
addMesh(new THREE.BoxGeometry(1.2, 0.4, 1.6), PALETTE.cart, [0, 0.4, 3.5], [0, 0, 0], "CartBody");
addMesh(new THREE.BoxGeometry(1, 0.3, 1.4), PALETTE.mine_shaft, [0, 0.5, 3.5], [0, 0, 0], "CartInterior");
// Wheels (using boxes for low poly)
addMesh(new THREE.BoxGeometry(0.2, 0.3, 0.3), PALETTE.rail, [-0.5, 0.15, 2.9], [0, 0, 0], "Wheel1");
addMesh(new THREE.BoxGeometry(0.2, 0.3, 0.3), PALETTE.rail, [0.5, 0.15, 2.9], [0, 0, 0], "Wheel2");
addMesh(new THREE.BoxGeometry(0.2, 0.3, 0.3), PALETTE.rail, [-0.5, 0.15, 4.1], [0, 0, 0], "Wheel3");
addMesh(new THREE.BoxGeometry(0.2, 0.3, 0.3), PALETTE.rail, [0.5, 0.15, 4.1], [0, 0, 0], "Wheel4");

// 6. Ore Indicator
addMesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), PALETTE.ore_indicator, [2, 0.2, 1.5], [0, 0.5, 0], "StoneIndicator");

// 7. Cut Stone Blocks (Stacked)
addMesh(new THREE.BoxGeometry(0.6, 0.4, 0.4), PALETTE.cut_stone_1, [-2, 0.2, 2.5], [0, 0.2, 0], "StoneBlock1");
addMesh(new THREE.BoxGeometry(0.5, 0.4, 0.5), PALETTE.cut_stone_2, [-2.1, 0.6, 2.6], [0, -0.1, 0], "StoneBlock2");
addMesh(new THREE.BoxGeometry(0.6, 0.4, 0.4), PALETTE.cut_stone_1, [-1.4, 0.2, 2.7], [0, 0.4, 0], "StoneBlock3");

// 8. Props
// Lantern
addMesh(new THREE.BoxGeometry(0.2, 0.3, 0.2), PALETTE.timber, [1.5, 1.5, 1.2], [0, 0, 0], "LanternPost");
addMesh(new THREE.BoxGeometry(0.15, 0.2, 0.15), PALETTE.lantern, [1.5, 1.5, 1.4], [0, 0, 0], "LanternGlow");

// Hammer
addMesh(new THREE.BoxGeometry(0.05, 0.4, 0.05), PALETTE.timber, [2.2, 0.2, 2.8], [0.5, 0, 0], "HammerHandle");
addMesh(new THREE.BoxGeometry(0.15, 0.1, 0.1), PALETTE.steel, [2.2, 0.4, 2.9], [0, 0, 0], "HammerHead");

// Ground/Rock Floor
addMesh(new THREE.BoxGeometry(10, 0.1, 10), PALETTE.ground, [0, -0.05, 2], [0, 0, 0], "GroundPlane");
