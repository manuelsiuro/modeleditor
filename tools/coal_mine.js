// Coal Mine - Low Poly 3D Model Generation Script

// 1. THE COLOR PALETTE
const PALETTE = {
    entrance: 0x5A5A5A,
    shaft: 0x1A1A1A,
    coalIndicator: 0x2A2A2A,
    mountainRock: 0x8A8A8A,
    darkRock: 0x6A6A6A,
    timber: 0x5C3A1E,
    coalChunk: 0x1E1E1E,
    coalSheen: 0x3A3A3A,
    ground: 0x5A4A3A,
    railTrack: 0x4A4A4A,
    oreCart: 0x6A6A6A,
    lanternGlow: 0xFFD700,
    lanternBody: 0x333333,
    metal: 0x777777
};

// 2. CORE STRUCTURE & GEOMETRY

// Ground
addMesh(new THREE.BoxGeometry(10, 0.5, 10), PALETTE.ground, [0, -0.25, 0], [0, 0, 0], "Ground");

// Mountain Backdrop
// A large angular mass of cuboids
addMesh(new THREE.BoxGeometry(6, 4, 4), PALETTE.mountainRock, [0, 2, -3], [0.1, 0.2, 0], "MountainBase");
addMesh(new THREE.BoxGeometry(4, 5, 3), PALETTE.darkRock, [-2, 2.5, -3.5], [-0.1, -0.1, 0.1], "MountainPeakLeft");
addMesh(new THREE.BoxGeometry(5, 4.5, 3.5), PALETTE.mountainRock, [2.5, 2.25, -3.2], [0.05, 0.3, -0.05], "MountainPeakRight");
addMesh(new THREE.BoxGeometry(3, 3, 2), PALETTE.darkRock, [0, 1.5, -1.5], [0, 0, 0], "MountainFront");

// Mine Entrance Structure
// A dark grey cuboid built flush against the mountain
addMesh(new THREE.BoxGeometry(2.5, 2.2, 0.8), PALETTE.entrance, [0, 1.1, -0.6], [0, 0, 0], "EntranceFrame");

// Mine Shaft Opening
// A smaller, very dark rectangle on the front face
addMesh(new THREE.BoxGeometry(1.6, 1.8, 0.1), PALETTE.shaft, [0, 0.9, -0.2], [0, 0, 0], "ShaftOpening");

// Support Timber Beams
// Thin cuboids framing the shaft
addMesh(new THREE.BoxGeometry(0.2, 2.2, 0.3), PALETTE.timber, [-0.9, 1.1, -0.1], [0, 0, 0.05], "BeamLeft");
addMesh(new THREE.BoxGeometry(0.2, 2.2, 0.3), PALETTE.timber, [0.9, 1.1, -0.1], [0, 0, -0.05], "BeamRight");
addMesh(new THREE.BoxGeometry(2.2, 0.2, 0.3), PALETTE.timber, [0, 2.1, -0.1], [0.05, 0, 0], "BeamTop");

// Coal Ore Indicator
// A small black sphere placed near the entrance
addMesh(new THREE.IcosahedronGeometry(0.2, 0), PALETTE.coalIndicator, [1.2, 0.8, -0.2], [0, 0, 0], "CoalIndicator");

// 3. PROPS AND ENVIRONMENT DETAILS

// Rail Tracks
// Two thin parallel cuboids extending from the entrance
addMesh(new THREE.BoxGeometry(0.1, 0.05, 4), PALETTE.railTrack, [-0.4, 0.05, 1.8], [0, 0, 0], "RailLeft");
addMesh(new THREE.BoxGeometry(0.1, 0.05, 4), PALETTE.railTrack, [0.4, 0.05, 1.8], [0, 0, 0], "RailRight");
// Sleepers
for (let i = 0; i < 8; i++) {
    addMesh(new THREE.BoxGeometry(1.2, 0.05, 0.15), PALETTE.timber, [0, 0.02, 0.5 + i * 0.5], [0, 0, 0], `Sleeper${i}`);
}

// Ore Cart
// A small boxy shape filled with black coal chunks
const cart = new THREE.Group();
cart.position.set(0, 0.3, 2.5);
modelGroup.add(cart);

const cartBody = addMesh(new THREE.BoxGeometry(1, 0.6, 1.4), PALETTE.oreCart, [0, 0, 0], [0, 0, 0], "CartBody");
cart.add(cartBody);
// Wheels
for (let x of [-0.45, 0.45]) {
    for (let z of [-0.4, 0.4]) {
        const wheel = addMesh(new THREE.CylinderGeometry(0.15, 0.15, 0.1, 8), PALETTE.railTrack, [x, -0.3, z], [0, 0, Math.PI/2], "Wheel");
        cart.add(wheel);
    }
}
// Coal in cart
for (let i = 0; i < 5; i++) {
    const chunk = addMesh(new THREE.IcosahedronGeometry(0.25, 0), Math.random() > 0.5 ? PALETTE.coalChunk : PALETTE.coalSheen, 
        [(Math.random()-0.5)*0.6, 0.3, (Math.random()-0.5)*0.8], [Math.random(), Math.random(), Math.random()], "CartCoal");
    cart.add(chunk);
}

// Coal Pile
// A mound of small black cubes and spheres near the entrance
for (let i = 0; i < 15; i++) {
    const x = -1.5 + (Math.random() - 0.5) * 1.5;
    const z = 1 + (Math.random() - 0.5) * 1.5;
    const y = 0.1 + Math.random() * 0.4;
    addMesh(new THREE.IcosahedronGeometry(0.2 + Math.random() * 0.2, 0), 
        Math.random() > 0.3 ? PALETTE.coalChunk : PALETTE.coalSheen, [x, y, z], 
        [Math.random(), Math.random(), Math.random()], `CoalPile${i}`);
}

// Lantern
// Small cuboid with warm yellow glow near the entrance
addMesh(new THREE.BoxGeometry(0.15, 0.25, 0.15), PALETTE.lanternBody, [-1, 1.5, -0.3], [0, 0, 0], "LanternBody");
const lanternGlow = addMesh(new THREE.BoxGeometry(0.1, 0.15, 0.1), PALETTE.lanternGlow, [-1, 1.5, -0.3], [0, 0, 0], "LanternGlow");
// Add a point light for the lantern
const light = new THREE.PointLight(PALETTE.lanternGlow, 2, 3);
light.position.set(-1, 1.5, -0.1);
modelGroup.add(light);

// Pickaxe and Shovel
// Pickaxe
addMesh(new THREE.BoxGeometry(0.05, 0.8, 0.05), PALETTE.timber, [1.2, 0.4, 0.2], [0, 0, 0.2], "PickaxeHandle");
addMesh(new THREE.TorusGeometry(0.3, 0.04, 4, 8, Math.PI), PALETTE.metal, [1.2, 0.8, 0.2], [0, Math.PI/2, Math.PI/2 + 0.2], "PickaxeHead");

// Ventilation Shaft
addMesh(new THREE.CylinderGeometry(0.2, 0.2, 1, 8), PALETTE.entrance, [0, 4.2, -3], [0, 0, 0], "VentShaft");
addMesh(new THREE.CylinderGeometry(0.25, 0.25, 0.1, 8), PALETTE.entrance, [0, 4.7, -3], [0, 0, 0], "VentCap");

// Sparse, darkened vegetation
for (let i = 0; i < 5; i++) {
    const x = 3 + Math.random() * 2;
    const z = 2 + Math.random() * 2;
    addMesh(new THREE.ConeGeometry(0.3, 0.8, 5), 0x2A3A2A, [x, 0.4, z], [0, 0, 0], "DarkBush");
}

// 4. LIGHTING AND PRESENTATION (Scene adjustments)
scene.background = new THREE.Color(0x111122); // Night/Dark sky
sun.intensity = 0.5; // Dimmer sun
sun.color.setHex(0x9999FF); // Bluish moonlight
const ambient = scene.children.find(c => c instanceof THREE.AmbientLight);
if (ambient) ambient.intensity = 0.2;

camera.position.set(10, 8, 10);
orbit.update();
