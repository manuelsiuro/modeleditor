// 1. THE COLOR PALETTE
const PALETTE = {
    walls: 0x5C3A1E,
    roof: 0x4A2E14,
    markerCone: 0xF0C030,
    terrain: 0x8A8A8A,
    parchment: 0xE8D8B8,
    metal: 0x6A6A6A,
    handle: 0xC4A060,
    ironOre: 0xC0392B,
    coalOre: 0x2A2A2A,
    goldOre: 0xDAA520
};

// 2. CORE STRUCTURE & GEOMETRY

// Rocky terrain base
for(let i=0; i<5; i++) {
    const size = 1.5 + Math.random() * 1.5;
    const x = (Math.random() - 0.5) * 4;
    const z = (Math.random() - 0.5) * 4;
    const h = 0.2 + Math.random() * 0.4;
    addMesh(new THREE.BoxGeometry(size, h, size), PALETTE.terrain, [x, h/2, z], [0, Math.random() * Math.PI, 0], "MountainRock");
}

// The hut: A very small cuboid
addMesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), PALETTE.walls, [0, 0.8, 0], [0, 0, 0], "GeologistHut");

// The flat roof
addMesh(new THREE.BoxGeometry(1.3, 0.1, 1.3), PALETTE.roof, [0, 1.45, 0], [0, 0, 0], "FlatRoof");

// The marker cone on roof
addMesh(new THREE.ConeGeometry(0.15, 0.4, 8), PALETTE.markerCone, [0.3, 1.7, 0.3], [0, 0, 0], "RoofMarker");

// The door (indentation)
addMesh(new THREE.BoxGeometry(0.05, 0.7, 0.4), 0x2A1A0A, [0.6, 0.55, 0], [0, 0, 0], "HutDoor");

// 3. PROPS AND ENVIRONMENT DETAILS

// Survey markers on ground
addMesh(new THREE.ConeGeometry(0.1, 0.25, 8), PALETTE.markerCone, [-1.5, 0.3, 1.2], [0, 0, 0], "GroundMarker1");
addMesh(new THREE.ConeGeometry(0.1, 0.25, 8), PALETTE.markerCone, [1.8, 0.4, -1.5], [0, 0, 0], "GroundMarker2");

// Ore samples near entrance
addMesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), PALETTE.ironOre, [0.8, 0.15, 0.4], [0.2, 0.5, 0], "IronSample");
addMesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), PALETTE.coalOre, [0.9, 0.15, 0.3], [0.1, 0.2, 0.4], "CoalSample");
addMesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), PALETTE.goldOre, [0.85, 0.15, 0.5], [0.4, 0.1, 0.2], "GoldSample");

// Rock specimens collection
for(let i=0; i<4; i++) {
    const rs = 0.05 + Math.random() * 0.1;
    addMesh(new THREE.BoxGeometry(rs, rs, rs), PALETTE.terrain, [0.7 + Math.random()*0.3, 0.15, -0.4 - Math.random()*0.3], [Math.random(), Math.random(), 0], "RockSpecimen");
}

// Map / scroll on the ground
addMesh(new THREE.BoxGeometry(0.3, 0.02, 0.4), PALETTE.parchment, [-0.5, 0.25, 0.8], [0, 0.5, 0], "GeologyMap");

// Prospecting Hammer leaning against hut
const hammerGroup = new THREE.Group();
const head = addMesh(new THREE.BoxGeometry(0.06, 0.2, 0.06), PALETTE.metal, [0, 0.6, 0], [0, 0, Math.PI/2], "HammerHead");
const handle = addMesh(new THREE.BoxGeometry(0.04, 0.5, 0.04), PALETTE.handle, [0, 0.35, 0], [0, 0, 0], "HammerHandle");
hammerGroup.add(head);
hammerGroup.add(handle);
hammerGroup.position.set(-0.65, 0.1, -0.4);
hammerGroup.rotation.set(0, 0.5, -0.2);
modelGroup.add(hammerGroup);

// Rocky terrain details (smaller rocks)
for(let i=0; i<12; i++) {
    const s = 0.1 + Math.random() * 0.2;
    const rx = (Math.random() - 0.5) * 5;
    const rz = (Math.random() - 0.5) * 5;
    addMesh(new THREE.BoxGeometry(s, s, s), PALETTE.terrain, [rx, 0.1, rz], [Math.random(), Math.random(), Math.random()], "SmallRock");
}

// 4. LIGHTING AND PRESENTATION OVERRIDES

// Clear, bright high-altitude light
sun.color.setHex(0xffffff);
sun.intensity = 1.6;
sun.position.set(10, 15, 10);

// Cool ambient fill suggesting mountain air
const ambient = scene.children.find(c => c instanceof THREE.AmbientLight);
if (ambient) {
    ambient.color.setHex(0xd0e0ff);
    ambient.intensity = 0.6;
}

// Background to a crisp mountain sky
scene.background = new THREE.Color(0xa0c0ff);

// Isometric Camera Setup
camera.position.set(8, 8, 8);
camera.lookAt(0, 0, 0);
orbit.update();
