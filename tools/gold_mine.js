// Gold Mine - Low Poly 3D Model Generation Script

// 1. THE COLOR PALETTE
const PALETTE = {
    entrance: 0x5A5A5A,
    shaft: 0x1A1A1A,
    goldIndicator: 0xDAA520,
    mountainRock: 0x8A8A8A,
    warmRock: 0x9A8A7A,
    timber: 0x8B5E3C,
    goldNugget: 0xDAA520,
    goldHighlight: 0xF0D060,
    ground: 0x7A6A5A,
    railTrack: 0x4A4A4A,
    oreCart: 0x5C3A1E,
    lanternGlow: 0xFFD700,
    lanternBody: 0x333333,
    metal: 0x777777,
    vegetation: 0x3A4A2A
};

// 2. CORE STRUCTURE & GEOMETRY

// Ground
addMesh(new THREE.BoxGeometry(10, 0.5, 10), PALETTE.ground, [0, -0.25, 0], [0, 0, 0], "Ground");

// Mountain Backdrop
// A large angular mass of cuboids (Rocky Grey, Warm Grey)
addMesh(new THREE.BoxGeometry(7, 5, 4), PALETTE.mountainRock, [0, 2.5, -3], [0.1, 0.2, 0], "MountainBase");
addMesh(new THREE.BoxGeometry(5, 6, 3.5), PALETTE.warmRock, [-2.5, 3, -3.5], [-0.1, -0.1, 0.1], "MountainPeakLeft");
addMesh(new THREE.BoxGeometry(6, 5.5, 4), PALETTE.mountainRock, [3, 2.75, -3.2], [0.05, 0.3, -0.05], "MountainPeakRight");
addMesh(new THREE.BoxGeometry(4, 4, 2.5), PALETTE.warmRock, [0, 2, -1.8], [0, 0, 0], "MountainFront");

// Gold Vein in the Rock
addMesh(new THREE.BoxGeometry(0.1, 1.5, 0.1), PALETTE.goldNugget, [-1.2, 1.5, -0.8], [0.2, 0.1, 0.5], "GoldVein1");
addMesh(new THREE.BoxGeometry(0.1, 1, 0.15), PALETTE.goldHighlight, [1.5, 2.2, -1], [-0.3, -0.2, 0.2], "GoldVein2");

// Mine Entrance Structure
addMesh(new THREE.BoxGeometry(2.8, 2.4, 0.8), PALETTE.entrance, [0, 1.2, -0.6], [0, 0, 0], "EntranceFrame");

// Mine Shaft Opening
addMesh(new THREE.BoxGeometry(1.8, 2, 0.1), PALETTE.shaft, [0, 1, -0.2], [0, 0, 0], "ShaftOpening");

// Support Timber Beams
addMesh(new THREE.BoxGeometry(0.2, 2.4, 0.3), PALETTE.timber, [-1, 1.2, -0.1], [0, 0, 0.02], "BeamLeft");
addMesh(new THREE.BoxGeometry(0.2, 2.4, 0.3), PALETTE.timber, [1, 1.2, -0.1], [0, 0, -0.02], "BeamRight");
addMesh(new THREE.BoxGeometry(2.4, 0.2, 0.3), PALETTE.timber, [0, 2.3, -0.1], [0.02, 0, 0], "BeamTop");

// Gold Ore Indicator
// A small yellow sphere distinguishes this from other mines
addMesh(new THREE.SphereGeometry(0.25, 8, 8), PALETTE.goldIndicator, [1.3, 1, -0.2], [0, 0, 0], "GoldIndicator");

// 3. PROPS AND ENVIRONMENT DETAILS

// Rail Tracks
addMesh(new THREE.BoxGeometry(0.1, 0.05, 4), PALETTE.railTrack, [-0.5, 0.05, 1.8], [0, 0, 0], "RailLeft");
addMesh(new THREE.BoxGeometry(0.1, 0.05, 4), PALETTE.railTrack, [0.5, 0.05, 1.8], [0, 0, 0], "RailRight");
for (let i = 0; i < 8; i++) {
    addMesh(new THREE.BoxGeometry(1.4, 0.05, 0.2), PALETTE.timber, [0, 0.02, 0.5 + i * 0.5], [0, 0, 0], `Sleeper${i}`);
}

// Ore Cart
const cart = new THREE.Group();
cart.position.set(0, 0.35, 2.8);
modelGroup.add(cart);

const cartBody = addMesh(new THREE.BoxGeometry(1.1, 0.7, 1.5), PALETTE.oreCart, [0, 0, 0], [0, 0, 0], "CartBody");
cart.add(cartBody);
// Wheels
for (let x of [-0.5, 0.5]) {
    for (let z of [-0.5, 0.5]) {
        const wheel = addMesh(new THREE.CylinderGeometry(0.18, 0.18, 0.12, 8), PALETTE.railTrack, [x, -0.35, z], [0, 0, Math.PI/2], "Wheel");
        cart.add(wheel);
    }
}
// Sparse Gold in cart
for (let i = 0; i < 3; i++) {
    const nugget = addMesh(new THREE.IcosahedronGeometry(0.2, 0), Math.random() > 0.3 ? PALETTE.goldNugget : PALETTE.goldHighlight, 
        [(Math.random()-0.5)*0.6, 0.35, (Math.random()-0.5)*0.8], [Math.random(), Math.random(), Math.random()], "CartGold");
    cart.add(nugget);
}

// Gold Pile
for (let i = 0; i < 8; i++) {
    const x = -1.8 + (Math.random() - 0.5) * 1;
    const z = 1.2 + (Math.random() - 0.5) * 1;
    const y = 0.1 + Math.random() * 0.3;
    addMesh(new THREE.IcosahedronGeometry(0.15 + Math.random() * 0.15, 0), 
        Math.random() > 0.4 ? PALETTE.goldNugget : PALETTE.goldHighlight, [x, y, z], 
        [Math.random(), Math.random(), Math.random()], `GoldPile${i}`);
}

// Lantern
addMesh(new THREE.BoxGeometry(0.18, 0.28, 0.18), PALETTE.lanternBody, [-1.2, 1.6, -0.3], [0, 0, 0.1], "LanternBody");
const lanternGlow = addMesh(new THREE.BoxGeometry(0.12, 0.18, 0.12), PALETTE.lanternGlow, [-1.2, 1.6, -0.3], [0, 0, 0.1], "LanternGlow");
const lanternLight = new THREE.PointLight(PALETTE.lanternGlow, 2, 4);
lanternLight.position.set(-1.2, 1.6, -0.1);
modelGroup.add(lanternLight);

// Pickaxe and Panning Pan
// Pickaxe
addMesh(new THREE.BoxGeometry(0.06, 0.9, 0.06), PALETTE.timber, [1.4, 0.45, 0.3], [0, 0, -0.1], "PickaxeHandle");
addMesh(new THREE.TorusGeometry(0.35, 0.05, 4, 8, Math.PI), PALETTE.metal, [1.4, 0.9, 0.3], [0, Math.PI/2, Math.PI/2 - 0.1], "PickaxeHead");
// Panning Pan
addMesh(new THREE.CylinderGeometry(0.3, 0.2, 0.08, 12), PALETTE.metal, [1.8, 0.04, 1.2], [0, 0, 0], "PanningPan");
addMesh(new THREE.IcosahedronGeometry(0.05, 0), PALETTE.goldNugget, [1.8, 0.1, 1.2], [0, 0, 0], "PanNugget");

// Sacks or Crates
addMesh(new THREE.BoxGeometry(0.5, 0.6, 0.5), PALETTE.timber, [-1.8, 0.3, 2.5], [0, 0.2, 0], "Crate");
addMesh(new THREE.SphereGeometry(0.3, 6, 6), 0x9A8A7A, [-1.4, 0.3, 2.8], [0, 0, 0], "Sack");

// Sparse Mountain Vegetation
for (let i = 0; i < 6; i++) {
    const x = 3 + Math.random() * 2.5;
    const z = 1 + Math.random() * 3;
    addMesh(new THREE.IcosahedronGeometry(0.2 + Math.random() * 0.2, 0), PALETTE.vegetation, [x, 0.2, z], [0, 0, 0], "Shrub");
}

// 4. LIGHTING AND PRESENTATION
scene.background = new THREE.Color(0xAABBCC); // Mountain day sky
sun.intensity = 1.4;
sun.color.setHex(0xFFF5E0); // Warm sunlight
const ambient = scene.children.find(c => c instanceof THREE.AmbientLight);
if (ambient) {
    ambient.intensity = 0.5;
    ambient.color.setHex(0xFFE0B0); // Warm ambient fill
}

// Gold Pile accent light
const goldAccent = new THREE.PointLight(0xFFA500, 1.5, 3);
goldAccent.position.set(-1.8, 0.5, 1.2);
modelGroup.add(goldAccent);

camera.position.set(10, 8, 10);
orbit.update();
