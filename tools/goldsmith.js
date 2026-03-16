// Goldsmith / Mint - Low Poly 3D Model Generation Script

// 1. THE COLOR PALETTE
const PALETTE = {
    walls: 0xC8C0B0,        // Light Grey / Beige
    roof: 0x5A5A5A,         // Dark Grey
    goldAccent: 0xDAA520,   // Bright Yellow / Gold
    goldBar: 0xFFD700,      // Rich Gold
    goldOre: 0xB8960A,      // Dull Gold
    coal: 0x1E1E1E,         // Coal Black
    door: 0x5C3A1E,         // Dark Brown
    chimney: 0x4A4A4A,      // Dark Grey
    foundation: 0x8C8C8C,   // Stone Grey
    windowGlow: 0xFFFF00,   // Yellow Glow
    smokeGrey: 0x888888,
    smokeWhite: 0xEEEEEE
};

// 2. CORE STRUCTURE & GEOMETRY

// Foundation
addMesh(new THREE.BoxGeometry(5.5, 0.4, 5.5), PALETTE.foundation, [0, 0.2, 0], [0, 0, 0], "Foundation");

// Main Building (Cuboid)
addMesh(new THREE.BoxGeometry(4.5, 3.5, 4.5), PALETTE.walls, [0, 1.75 + 0.4, 0], [0, 0, 0], "MainBuilding");

// Roof (Slightly sloped or flat cuboid)
addMesh(new THREE.BoxGeometry(5, 0.5, 5), PALETTE.roof, [0, 3.5 + 0.4 + 0.25, 0], [0, 0, 0], "RoofBase");
// Small pyramid/cube gold accent on roof
addMesh(new THREE.CylinderGeometry(0, 1, 1, 4), PALETTE.goldAccent, [0, 4.2 + 0.5, 0], [0, Math.PI / 4, 0], "GoldRoofAccent");

// Chimney
const chimney = addMesh(new THREE.BoxGeometry(0.6, 1.5, 0.6), PALETTE.chimney, [1.5, 4.5, 1.5], [0, 0, 0], "Chimney");

// Doorway
addMesh(new THREE.BoxGeometry(1.2, 2, 0.2), PALETTE.door, [0, 1 + 0.4, 2.25], [0, 0, 0], "Door");
// Door Trim/Frame
addMesh(new THREE.BoxGeometry(1.4, 2.1, 0.1), PALETTE.goldAccent, [0, 1.05 + 0.4, 2.3], [0, 0, 0], "DoorFrame");

// Windows
const windowGeo = new THREE.BoxGeometry(0.8, 1, 0.1);
const windowMat = new THREE.MeshStandardMaterial({ color: PALETTE.windowGlow, emissive: PALETTE.windowGlow, emissiveIntensity: 0.5 });
const winLeft = addMesh(windowGeo, windowMat, [-1.5, 2.5, 2.25], [0, 0, 0], "WindowLeft");
const winRight = addMesh(windowGeo, windowMat, [1.5, 2.5, 2.25], [0, 0, 0], "WindowRight");
addMesh(windowGeo, windowMat, [2.25, 2.5, 0], [0, Math.PI / 2, 0], "WindowSide");

// 3. PROPS AND ENVIRONMENT DETAILS

// Gold Bars (Output) - Trapezoidal stacks
function createGoldBar(pos) {
    const bar = addMesh(new THREE.BoxGeometry(0.4, 0.2, 0.8), PALETTE.goldBar, pos, [0, 0, 0], "GoldBar");
    // Simple trapezoid effect by scaling top face if we had custom geo, but Box is fine for low poly
    return bar;
}
createGoldBar([-1.5, 0.5, 3]);
createGoldBar([-1.5, 0.7, 3]);
createGoldBar([-1.9, 0.5, 3]);

// Gold Ore (Input) - Rough irregular cubes
for (let i = 0; i < 5; i++) {
    addMesh(new THREE.IcosahedronGeometry(0.25, 0), PALETTE.goldOre, [2 + Math.random(), 0.5, 2 + Math.random()], [Math.random(), Math.random(), Math.random()], "GoldOre");
}

// Coal Pile (Input)
for (let i = 0; i < 10; i++) {
    addMesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), PALETTE.coal, [-2.5 + Math.random(), 0.5, -2 + Math.random()], [Math.random(), Math.random(), Math.random()], "Coal");
}

// Crucible
addMesh(new THREE.CylinderGeometry(0.3, 0.2, 0.4, 8), PALETTE.chimney, [1.2, 0.6, 2.8], [0, 0, 0], "Crucible");

// Precision Scale
const scaleGroup = new THREE.Group();
scaleGroup.position.set(-2, 0.4, 1.5);
modelGroup.add(scaleGroup);
addMesh(new THREE.BoxGeometry(0.1, 1.5, 0.1), PALETTE.foundation, [0, 0.75, 0], [0, 0, 0], "ScalePost").parent = scaleGroup;
addMesh(new THREE.BoxGeometry(1.2, 0.05, 0.05), PALETTE.foundation, [0, 1.4, 0], [0, 0, 0], "ScaleBeam").parent = scaleGroup;
addMesh(new THREE.CylinderGeometry(0.3, 0.3, 0.02, 12), PALETTE.goldBar, [-0.5, 0.8, 0], [0, 0, 0], "ScalePanL").parent = scaleGroup;
addMesh(new THREE.CylinderGeometry(0.3, 0.3, 0.02, 12), PALETTE.goldBar, [0.5, 0.8, 0], [0, 0, 0], "ScalePanR").parent = scaleGroup;

// Workbench
addMesh(new THREE.BoxGeometry(1.5, 0.8, 0.8), PALETTE.door, [-1.8, 0.8, -1.5], [0, 0, 0], "Workbench");

// Strongbox/Chest
const chest = new THREE.Group();
chest.position.set(1.8, 0.4, -1.8);
modelGroup.add(chest);
addMesh(new THREE.BoxGeometry(0.8, 0.5, 0.6), PALETTE.door, [0, 0.25, 0], [0, 0, 0], "ChestBase").parent = chest;
addMesh(new THREE.CylinderGeometry(0.4, 0.4, 0.8, 8, 1, false, 0, Math.PI), PALETTE.door, [0, 0.5, 0], [0, 0, Math.PI / 2], "ChestTop").parent = chest;
addMesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), PALETTE.goldBar, [0, 0.4, 0.3], [0, 0, 0], "ChestLatch").parent = chest;

// 4. ANIMATION & RUNTIME EFFECTS

const particles = [];
const smokeMaterial = new THREE.MeshStandardMaterial({ color: PALETTE.smokeGrey, transparent: true, opacity: 0.8, flatShading: true });

function spawnSmoke() {
    const p = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 0), smokeMaterial.clone());
    p.position.set(1.5, 5.2, 1.5);
    p.velocity = new THREE.Vector3((Math.random() - 0.5) * 0.02, 0.05 + Math.random() * 0.05, (Math.random() - 0.5) * 0.02);
    p.life = 1.0;
    scene.add(p);
    particles.push(p);
}

let lastSmokeTime = 0;
function updateGoldsmith(time) {
    // Smoke emission: 3/s
    if (time - lastSmokeTime > 333) {
        spawnSmoke();
        lastSmokeTime = time;
    }

    // Update smoke particles
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.position.add(p.velocity);
        p.life -= 0.01;
        p.scale.setScalar(p.life * 1.5);
        p.material.opacity = p.life;
        // Fade grey to white
        p.material.color.lerpColors(new THREE.Color(PALETTE.smokeGrey), new THREE.Color(PALETTE.smokeWhite), 1 - p.life);
        
        if (p.life <= 0) {
            scene.remove(p);
            particles.splice(i, 1);
        }
    }

    // Emissive glow pulse
    const pulse = (Math.sin(time * 0.003) + 1) / 2;
    windowMat.emissiveIntensity = 0.2 + pulse * 0.8;
}

// Inject into the render loop
const originalAnimate = animate;
animate = function() {
    updateGoldsmith(performance.now());
    originalAnimate();
};

// 5. LIGHTING AND PRESENTATION
scene.background = new THREE.Color(0xDDEEFF); // Bright morning sky
sun.intensity = 1.5;
sun.color.setHex(0xFFF0D0); // Golden sunlight
sun.position.set(10, 15, 10);

camera.position.set(12, 10, 12);
orbit.update();
