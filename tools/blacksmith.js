// 1. THE COLOR PALETTE
const PALETTE = {
    walls: 0x3A3A3A,
    chimney: 0x2A2A2A,
    forgeGlow: 0xFF6600,
    forgeRed: 0xE03020,
    steel: 0xB0B0B0,
    woodBrown: 0x8B5E3C,
    steelGrey: 0x7A7A7A,
    ironBar: 0xA0A0A0,
    coal: 0x1E1E1E,
    sparks: 0xF0D060,
    foundation: 0x4A3A2A,
    water: 0x40A0FF
};

// 2. CORE STRUCTURE & GEOMETRY

// Foundation (Scorched ground)
addMesh(new THREE.BoxGeometry(4, 0.2, 4), PALETTE.foundation, [0, 0.1, 0], [0, 0, 0], "Foundation");

// Main Building
// We'll make it with a few boxes to allow for the "open front"
// Back wall
addMesh(new THREE.BoxGeometry(3, 2, 0.2), PALETTE.walls, [0, 1.1, -1.4], [0, 0, 0], "BackWall");
// Left wall
addMesh(new THREE.BoxGeometry(0.2, 2, 3), PALETTE.walls, [-1.4, 1.1, 0], [0, 0, 0], "LeftWall");
// Right wall (partial)
addMesh(new THREE.BoxGeometry(0.2, 2, 1), PALETTE.walls, [1.4, 1.1, -1], [0, 0, 0], "RightWallBack");
addMesh(new THREE.BoxGeometry(0.2, 0.5, 2), PALETTE.walls, [1.4, 1.85, 0.5], [0, 0, 0], "RightWallTop");
// Front wall (partial)
addMesh(new THREE.BoxGeometry(1, 2, 0.2), PALETTE.walls, [-1, 1.1, 1.4], [0, 0, 0], "FrontWallLeft");
addMesh(new THREE.BoxGeometry(2, 0.5, 0.2), PALETTE.walls, [0.5, 1.85, 1.4], [0, 0, 0], "FrontWallTop");

// Roof (Flat/Low slope)
addMesh(new THREE.BoxGeometry(3.4, 0.2, 3.4), PALETTE.chimney, [0, 2.1, 0], [0.05, 0, 0.05], "Roof");

// Forge Interior
addMesh(new THREE.BoxGeometry(1.2, 0.8, 1.2), PALETTE.walls, [0.8, 0.5, -0.8], [0, 0, 0], "ForgeBase");
const forgeGlowMesh = addMesh(new THREE.BoxGeometry(0.8, 0.2, 0.8), PALETTE.forgeGlow, [0.8, 0.9, -0.8], [0, 0, 0], "ForgeGlow");

// Chimney (Short, wide)
addMesh(new THREE.BoxGeometry(0.8, 1.2, 0.8), PALETTE.chimney, [0.8, 2.5, -0.8], [0, 0, 0], "Chimney");

// 3. PROPS AND ENVIRONMENT DETAILS

// Anvil
const anvilGroup = new THREE.Group();
const anvilBase = addMesh(new THREE.BoxGeometry(0.4, 0.4, 0.3), 0x222222, [0, 0.3, 0], [0, 0, 0], "AnvilBase");
const anvilTop = addMesh(new THREE.BoxGeometry(0.6, 0.2, 0.3), 0x222222, [0, 0.6, 0], [0, 0, 0], "AnvilTop");
const anvilHorn = addMesh(new THREE.ConeGeometry(0.15, 0.3, 4), 0x222222, [-0.4, 0.6, 0], [0, 0, Math.PI/2], "AnvilHorn");
anvilGroup.add(anvilBase, anvilTop, anvilHorn);
anvilGroup.position.set(-0.5, 0.1, 0.2);
modelGroup.add(anvilGroup);

// Hammer
const hammerGroup = new THREE.Group();
addMesh(new THREE.BoxGeometry(0.1, 0.5, 0.1), PALETTE.woodBrown, [0, 0.25, 0], [0, 0, 0], "HammerHandle");
addMesh(new THREE.BoxGeometry(0.2, 0.2, 0.3), 0x333333, [0, 0.5, 0], [0, 0, 0], "HammerHead");
hammerGroup.position.set(-0.3, 0.1, 0.6);
hammerGroup.rotation.set(Math.PI/2, 0.4, 0);
modelGroup.add(hammerGroup);

// Quenching Barrel
addMesh(new THREE.CylinderGeometry(0.3, 0.3, 0.6, 8), PALETTE.woodBrown, [-1, 0.4, -0.8], [0, 0, 0], "Barrel");
addMesh(new THREE.CylinderGeometry(0.25, 0.25, 0.05, 8), PALETTE.water, [-1, 0.68, -0.8], [0, 0, 0], "Water");

// Weapon Rack
const rackGroup = new THREE.Group();
addMesh(new THREE.BoxGeometry(0.1, 1.2, 0.1), PALETTE.woodBrown, [-0.6, 0.6, 0], [0, 0, 0]);
addMesh(new THREE.BoxGeometry(0.1, 1.2, 0.1), PALETTE.woodBrown, [0.6, 0.6, 0], [0, 0, 0]);
addMesh(new THREE.BoxGeometry(1.3, 0.1, 0.1), PALETTE.woodBrown, [0, 1.1, 0], [0, 0, 0]);
addMesh(new THREE.BoxGeometry(1.3, 0.1, 0.1), PALETTE.woodBrown, [0, 0.3, 0], [0, 0, 0]);
rackGroup.position.set(2.2, 0.1, 0);
rackGroup.rotation.y = -Math.PI/4;
modelGroup.add(rackGroup);

// Swords on rack
const addSword = (x, y, z, rot) => {
    const sword = new THREE.Group();
    addMesh(new THREE.BoxGeometry(0.05, 0.8, 0.1), PALETTE.steel, [0, 0.4, 0], [0, 0, 0]); // Blade
    addMesh(new THREE.BoxGeometry(0.2, 0.05, 0.1), PALETTE.steelGrey, [0, 0.8, 0], [0, 0, 0]); // Guard
    addMesh(new THREE.BoxGeometry(0.05, 0.2, 0.05), PALETTE.woodBrown, [0, 0.9, 0], [0, 0, 0]); // Handle
    sword.position.set(x, y, z);
    sword.rotation.set(...rot);
    rackGroup.add(sword);
};
addSword(-0.3, 0.2, 0, [0, 0, 0.1]);
addSword(0.1, 0.2, 0, [0, 0, -0.05]);

// Shield on rack
const shieldGroup = new THREE.Group();
addMesh(new THREE.CylinderGeometry(0.4, 0.4, 0.05, 8), PALETTE.steelGrey, [0, 0, 0], [Math.PI/2, 0, 0]);
addMesh(new THREE.CylinderGeometry(0.35, 0.35, 0.06, 8), PALETTE.woodBrown, [0, 0, 0], [Math.PI/2, 0, 0]);
shieldGroup.position.set(2.0, 0.5, 0.8);
shieldGroup.rotation.y = -Math.PI/4;
modelGroup.add(shieldGroup);

// Iron Bars stacked
const addIronBar = (x, y, z, r) => {
    addMesh(new THREE.BoxGeometry(0.5, 0.1, 0.15), PALETTE.ironBar, [x, y, z], [0, r, 0], "IronBar");
};
addIronBar(1.2, 0.15, 0.8, 0.2);
addIronBar(1.3, 0.15, 1.0, -0.1);
addIronBar(1.25, 0.25, 0.9, 0.05);

// Coal Pile
for(let i=0; i<10; i++) {
    const rx = 1.0 + Math.random() * 0.6;
    const rz = -1.5 - Math.random() * 0.4;
    const size = 0.1 + Math.random() * 0.1;
    addMesh(new THREE.BoxGeometry(size, size, size), PALETTE.coal, [rx, 0.1 + size/2, rz], [Math.random(), Math.random(), 0], "CoalChunk");
}

// Bellows
const bellows = new THREE.Group();
addMesh(new THREE.BoxGeometry(0.4, 0.1, 0.5), PALETTE.woodBrown, [0, 0, 0]);
addMesh(new THREE.BoxGeometry(0.4, 0.1, 0.5), PALETTE.woodBrown, [0, 0.3, 0], [0.2, 0, 0]);
addMesh(new THREE.BoxGeometry(0.3, 0.3, 0.4), 0x444444, [0, 0.15, 0]);
bellows.position.set(1.6, 0.2, -0.2);
bellows.rotation.y = -0.5;
modelGroup.add(bellows);

// 4. RUNTIME EFFECTS (Animation)

// Chimney Smoke
const smokePuffs = [];
for(let i=0; i<8; i++) {
    const puff = addMesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), 0x888888, [0.8, 3.2, -0.8], [0,0,0], "SmokePuff");
    puff.visible = false;
    smokePuffs.push({
        mesh: puff,
        life: Math.random() * 4.0,
        speed: 0.015 + Math.random() * 0.01
    });
}

// Sparks
const sparks = [];
for(let i=0; i<10; i++) {
    const spark = addMesh(new THREE.BoxGeometry(0.03, 0.03, 0.03), PALETTE.sparks, [0.8, 0.9, -0.8], [0,0,0], "Spark");
    spark.visible = false;
    sparks.push({
        mesh: spark,
        life: Math.random() * 1.0,
        vx: (Math.random() - 0.5) * 0.05,
        vy: 0.05 + Math.random() * 0.05,
        vz: (Math.random() - 0.5) * 0.05
    });
}

// Emissive glow pulse
forgeGlowMesh.material.emissive = new THREE.Color(PALETTE.forgeGlow);
forgeGlowMesh.material.emissiveIntensity = 1.0;

const clock = new THREE.Clock();
function updateAnimations() {
    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();

    // Smoke Animation
    smokePuffs.forEach(p => {
        p.life += delta;
        if (p.life > 4) {
            p.life = 0;
            p.mesh.position.set(0.8, 3.2, -0.8);
            p.mesh.scale.set(0.1, 0.1, 0.1);
            p.mesh.visible = true;
        }
        p.mesh.position.y += p.speed;
        p.mesh.position.x += Math.sin(elapsed + p.life) * 0.01;
        p.mesh.scale.multiplyScalar(1.008);
        p.mesh.material.opacity = 1.0 - (p.life / 4.0);
        p.mesh.material.transparent = true;
        // Fade from grey to white
        const colorVal = 0.5 + (p.life / 4.0) * 0.5;
        p.mesh.material.color.setRGB(colorVal, colorVal, colorVal);
    });

    // Sparks Animation
    sparks.forEach(s => {
        s.life += delta;
        if (s.life > 1.0) {
            s.life = 0;
            s.mesh.position.set(0.8, 0.9, -0.8);
            s.mesh.visible = true;
        }
        s.mesh.position.x += s.vx;
        s.mesh.position.y += s.vy;
        s.mesh.position.z += s.vz;
        s.vy -= 0.002; // gravity-ish
        s.mesh.material.opacity = 1.0 - s.life;
        s.mesh.material.transparent = true;
        // Color shift orange to yellow
        if (s.life < 0.5) {
            s.mesh.material.color.setHex(0xFF6600);
        } else {
            s.mesh.material.color.setHex(0xF0D060);
        }
    });

    // Forge Glow Pulse
    forgeGlowMesh.material.emissiveIntensity = 0.5 + Math.sin(elapsed * 5) * 0.5;

    requestAnimationFrame(updateAnimations);
}
updateAnimations();

// 5. LIGHTING AND PRESENTATION

// Dramatic Forge Light
const forgeLight = new THREE.PointLight(0xFF6600, 20, 4);
forgeLight.position.set(0.8, 1.2, -0.5);
scene.add(forgeLight);

// Sunlight
sun.intensity = 0.8;
sun.color.setHex(0xffffff);

// Ambient
const ambient = scene.children.find(c => c instanceof THREE.AmbientLight);
if (ambient) ambient.intensity = 0.3;

scene.background = new THREE.Color(0x111111); // Darker background for dramatic effect

camera.position.set(6, 6, 6);
camera.lookAt(0, 0, 0);
orbit.update();
