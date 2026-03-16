// 1. THE COLOR PALETTE
const PALETTE = {
    walls: 0x7EB3D8,
    roof: 0x2C5F8A,
    pier: 0x8B5E3C,
    frames: 0xA0724A,
    water: 0x3A8FAF,
    fishSilver: 0xC0C0C0,
    fishPink: 0xE8A0A0,
    rod: 0xC4A060,
    net: 0xD0C0A0,
    grass: 0x5A8F5A,
    rocks: 0x888888,
    reeds: 0x2D4F2D
};

// 2. CORE STRUCTURE & GEOMETRY

// Water Plane (The setting)
addMesh(new THREE.PlaneGeometry(10, 10), PALETTE.water, [0, 0, 0], [-Math.PI / 2, 0, 0], "WaterSurface");

// Shore/Land (Partial)
addMesh(new THREE.BoxGeometry(6, 0.3, 10), PALETTE.grass, [-3, 0.1, 0], [0, 0, 0], "Shoreline");

// The Hut Walls (Light Blue Cuboid)
addMesh(new THREE.BoxGeometry(2.5, 1.8, 2.5), PALETTE.walls, [-2.5, 1.1, 0], [0, 0, 0], "HutWalls");

// The Roof (Dark Blue Pyramid)
// ConeGeometry with 4 radial segments creates a pyramid
addMesh(new THREE.ConeGeometry(2.2, 1.5, 4), PALETTE.roof, [-2.5, 2.75, 0], [0, Math.PI / 4, 0], "PyramidRoof");

// The Pier (Brown)
addMesh(new THREE.BoxGeometry(3.5, 0.15, 1.2), PALETTE.pier, [0, 0.45, 0], [0, 0, 0], "PierPlanks");
// Pier Posts
const addPost = (x, z) => addMesh(new THREE.BoxGeometry(0.15, 0.6, 0.15), PALETTE.pier, [x, 0.15, z], [0, 0, 0], "PierPost");
addPost(0.5, 0.4);
addPost(0.5, -0.4);
addPost(1.5, 0.4);
addPost(1.5, -0.4);

// The Door (Land side)
addMesh(new THREE.BoxGeometry(0.1, 1.2, 0.7), PALETTE.frames, [-3.76, 0.8, 0], [0, 0, 0], "Door");

// Round Window (Porthole)
addMesh(new THREE.CylinderGeometry(0.3, 0.3, 0.1, 8), PALETTE.frames, [-2.5, 1.2, 1.26], [Math.PI / 2, 0, 0], "Porthole");
addMesh(new THREE.CylinderGeometry(0.2, 0.2, 0.12, 8), 0xADD8E6, [-2.5, 1.2, 1.28], [Math.PI / 2, 0, 0], "PortholeGlass");

// 3. PROPS AND ENVIRONMENT DETAILS

// Fishing Rod
const rod = addMesh(new THREE.CylinderGeometry(0.03, 0.05, 2.5, 6), PALETTE.rod, [-1.2, 1.2, 0.8], [0, 0, -Math.PI / 4], "FishingRod");
// Fishing Line
addMesh(new THREE.CylinderGeometry(0.005, 0.005, 1.0, 4), 0xffffff, [-0.3, 1.5, 0.8], [0, 0, 0], "FishingLine");

// Fish Catch
const addFish = (x, y, z, color) => {
    const fish = addMesh(new THREE.CapsuleGeometry(0.08, 0.2, 4, 8), color, [x, y, z], [0, Math.random(), Math.PI/2], "Fish");
    return fish;
};
addFish(1.4, 0.55, 0.2, PALETTE.fishSilver);
addFish(1.5, 0.55, -0.1, PALETTE.fishPink);

// Barrel
addMesh(new THREE.CylinderGeometry(0.3, 0.3, 0.7, 8), PALETTE.pier, [1.3, 0.8, 0.3], [0, 0, 0], "Barrel");

// Fishing Net (Draped over wall)
addMesh(new THREE.BoxGeometry(0.05, 1.0, 1.2), PALETTE.net, [-1.24, 1.0, -0.5], [0, 0, 0.1], "FishingNet");

// Shore Details: Rocks
const addRock = (x, z, s) => {
    const rock = addMesh(new THREE.DodecahedronGeometry(s), PALETTE.rocks, [x, 0.2, z], [Math.random(), Math.random(), Math.random()], "Rock");
};
addRock(-0.5, 1.5, 0.3);
addRock(-0.2, -2.0, 0.4);
addRock(-0.8, 3.0, 0.2);

// Reeds
const addReed = (x, z) => {
    addMesh(new THREE.CylinderGeometry(0.02, 0.02, 0.8, 4), PALETTE.reeds, [x, 0.4, z], [0, 0, 0], "ReedStem");
    addMesh(new THREE.SphereGeometry(0.05, 4, 4), PALETTE.reeds, [x, 0.8, z], [0, 0, 0], "ReedTop");
};
addReed(-0.2, 2.5);
addReed(-0.3, 2.7);
addReed(-0.1, -1.5);

// Grass Tufts
const addGrass = (x, z) => {
    for(let i=0; i<3; i++) {
        addMesh(new THREE.ConeGeometry(0.05, 0.2 + Math.random() * 0.2, 3), PALETTE.grass, [x + (Math.random()-0.5)*0.3, 0.2, z + (Math.random()-0.5)*0.3], [0, Math.random()*Math.PI, 0], "GrassBlade");
    }
};
addGrass(-4.5, 2.0);
addGrass(-5.0, -1.0);
addGrass(-4.0, 3.5);

// 4. ANIMATION (Subtle Water & Smoke/Particles)
const clock = new THREE.Clock();
function updateAnimations() {
    const elapsed = clock.getElapsedTime();
    
    // Subtle water undulation (simplified)
    const water = modelGroup.children.find(c => c.name === "WaterSurface");
    if (water) {
        water.position.y = Math.sin(elapsed) * 0.02;
    }

    requestAnimationFrame(updateAnimations);
}
updateAnimations();

// 5. LIGHTING AND PRESENTATION OVERRIDES

// Bright sunlight with cool tint
sun.color.setHex(0xE0F0FF);
sun.intensity = 1.6;
sun.position.set(8, 12, 10);

// Blue ambient fill
const ambient = scene.children.find(c => c instanceof THREE.AmbientLight);
if (ambient) {
    ambient.color.setHex(0x3A8FAF);
    ambient.intensity = 0.4;
}

// Sun glint on water (Point light near pier)
const glint = new THREE.PointLight(0xffffff, 10, 5);
glint.position.set(2, 0.5, 2);
scene.add(glint);

// Sky color
scene.background = new THREE.Color(0x87CEEB);

// Isometric Camera Setup
camera.position.set(10, 10, 10);
camera.lookAt(0, 0, 0);
orbit.update();
