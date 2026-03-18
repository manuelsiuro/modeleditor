
const PALETTE = {
    wool: 0xF5F0E0,
    grass: 0x7CBA5C,
    walls: 0xA0724A,
    fence: 0x8B5E3C,
    roof: 0x5C3A1E,
    props: 0xC4A56E,
    face: 0x2A2A2A,
    path: 0xC4A56E, // Reusing props color for path
    hay: 0xD4AF37   // Golden hay
};

// --- GROUND & ENVIRONMENT ---
// Main grass base
addMesh(new THREE.BoxGeometry(10, 0.2, 10), PALETTE.grass, [0, -0.1, 0], [0, 0, 0], "Ground");

// Path from hut to gate
addMesh(new THREE.BoxGeometry(1.5, 0.05, 4), PALETTE.path, [-2, 0.02, 2], [0, 0, 0], "Path");

// --- SHEPHERD'S HUT ---
// Main building
addMesh(new THREE.BoxGeometry(2.5, 2, 2), PALETTE.walls, [-3, 1, -2], [0, 0, 0], "Hut_Walls");
// Pitched Roof
addMesh(new THREE.ConeGeometry(2.2, 1.2, 4), PALETTE.roof, [-3, 2.6, -2], [0, Math.PI / 4, 0], "Hut_Roof");
// Door
addMesh(new THREE.PlaneGeometry(0.8, 1.4), 0x3d2b1f, [-3, 0.7, -0.99], [0, 0, 0], "Hut_Door");

// --- FENCED PADDOCK ---
// Fence Posts
const postGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.8);
const fencePosts = [
    [1, 0.4, 0], [4, 0.4, 0], [4, 0.4, 4], [1, 0.4, 4], [-1, 0.4, 4], [-4, 0.4, 4], [-4, 0.4, 0]
];
fencePosts.forEach((pos, i) => {
    addMesh(postGeo, PALETTE.fence, pos, [0, 0, 0], `FencePost_${i}`);
});

// Fence Rails
addMesh(new THREE.BoxGeometry(3, 0.1, 0.1), PALETTE.fence, [2.5, 0.6, 0], [0, 0, 0], "Rail_N1");
addMesh(new THREE.BoxGeometry(3, 0.1, 0.1), PALETTE.fence, [2.5, 0.3, 0], [0, 0, 0], "Rail_N2");

addMesh(new THREE.BoxGeometry(0.1, 0.1, 4), PALETTE.fence, [4, 0.6, 2], [0, 0, 0], "Rail_E1");
addMesh(new THREE.BoxGeometry(0.1, 0.1, 4), PALETTE.fence, [4, 0.3, 2], [0, 0, 0], "Rail_E2");

addMesh(new THREE.BoxGeometry(5, 0.1, 0.1), PALETTE.fence, [1.5, 0.6, 4], [0, 0, 0], "Rail_S1");
addMesh(new THREE.BoxGeometry(5, 0.1, 0.1), PALETTE.fence, [1.5, 0.3, 4], [0, 0, 0], "Rail_S2");

addMesh(new THREE.BoxGeometry(0.1, 0.1, 4), PALETTE.fence, [-4, 0.6, 2], [0, 0, 0], "Rail_W1");
addMesh(new THREE.BoxGeometry(0.1, 0.1, 4), PALETTE.fence, [-4, 0.3, 2], [0, 0, 0], "Rail_W2");

// Gate (slightly open)
addMesh(new THREE.BoxGeometry(1.8, 0.6, 0.1), PALETTE.fence, [-2.5, 0.35, 4], [0, 0.3, 0], "Gate");

// --- SHEEP ---
function createSheep(x, z, rotY, state = "standing") {
    const name = `Sheep_${x}_${z}`;
    // Body (fluffy)
    addMesh(new THREE.IcosahedronGeometry(0.4, 1), PALETTE.wool, [x, 0.5, z], [0, rotY, 0], `${name}_Body`);
    
    // Legs
    const legGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.2);
    addMesh(legGeo, PALETTE.face, [x - 0.15, 0.2, z - 0.15], [0, 0, 0], `${name}_Leg1`);
    addMesh(legGeo, PALETTE.face, [x + 0.15, 0.2, z - 0.15], [0, 0, 0], `${name}_Leg2`);
    addMesh(legGeo, PALETTE.face, [x - 0.15, 0.2, z + 0.15], [0, 0, 0], `${name}_Leg3`);
    addMesh(legGeo, PALETTE.face, [x + 0.15, 0.2, z + 0.15], [0, 0, 0], `${name}_Leg4`);

    // Head
    const headRotX = state === "grazing" ? Math.PI / 4 : 0;
    const headY = state === "grazing" ? 0.35 : 0.6;
    const headZ = state === "grazing" ? z + 0.45 : z + 0.4;
    addMesh(new THREE.BoxGeometry(0.2, 0.2, 0.3), PALETTE.face, [x, headY, headZ], [headRotX, rotY, 0], `${name}_Head`);
}

createSheep(1, 2, 0.5, "standing");
createSheep(2.5, 1.5, -0.8, "grazing");
createSheep(-1, 3, 2.1, "standing");

// --- PROPS ---
// Wool Basket
addMesh(new THREE.CylinderGeometry(0.4, 0.3, 0.5, 8), PALETTE.props, [-1.5, 0.25, -1], [0, 0, 0], "Wool_Basket");
addMesh(new THREE.SphereGeometry(0.2, 8, 8), PALETTE.wool, [-1.5, 0.55, -1], [0, 0, 0], "Wool_Pile1");
addMesh(new THREE.SphereGeometry(0.15, 8, 8), PALETTE.wool, [-1.6, 0.5, -0.8], [0, 0, 0], "Wool_Pile2");

// Shepherd's Crook
addMesh(new THREE.CylinderGeometry(0.03, 0.03, 1.8), PALETTE.walls, [-1.8, 0.9, -1.8], [0, 0, 0.2], "Crook_Staff");
addMesh(new THREE.TorusGeometry(0.1, 0.03, 8, 16, Math.PI), PALETTE.walls, [-1.98, 1.75, -1.8], [0, 0, 0.2], "Crook_Hook");

// Shearing Stool
addMesh(new THREE.BoxGeometry(0.5, 0.3, 0.5), PALETTE.props, [-2.2, 0.15, -0.8], [0, 0.4, 0], "Stool");
// Shears
addMesh(new THREE.BoxGeometry(0.3, 0.02, 0.05), 0x888888, [-2.2, 0.31, -0.8], [0, 0.5, 0], "Shear1");
addMesh(new THREE.BoxGeometry(0.3, 0.02, 0.05), 0x888888, [-2.2, 0.31, -0.8], [0, -0.5, 0], "Shear2");

// Hay Pile
addMesh(new THREE.ConeGeometry(0.6, 0.5, 6), PALETTE.hay, [3, 0.25, 3], [0, 0, 0], "Hay_Pile");

// Wildflowers
const flowerGeo = new THREE.SphereGeometry(0.05, 4, 4);
const flowerColors = [0xFFFFFF, 0xFFFF00, 0x800080];
for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const dist = 4.5 + Math.random() * 0.5;
    addMesh(flowerGeo, flowerColors[i % 3], [Math.cos(angle) * dist, 0.05, Math.sin(angle) * dist], [0, 0, 0], `Flower_${i}`);
}
