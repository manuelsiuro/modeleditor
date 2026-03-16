import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import fs from 'fs';
import { JSDOM } from 'jsdom';

// Setup Mock DOM
const dom = new JSDOM();
global.window = dom.window;
global.document = dom.window.document;
global.self = global.window;
global.Blob = class {
    constructor(parts) {
        this.parts = parts;
    }
    async arrayBuffer() {
        return Buffer.concat(this.parts.map(p => Buffer.isBuffer(p) ? p : Buffer.from(p))).buffer;
    }
};
global.FileReader = class {
    async readAsArrayBuffer(blob) {
        this.result = await blob.arrayBuffer();
        if (this.onload) this.onload();
    }
};

// 1. Setup the Palette
const PALETTE = {
    walls: 0x8B5E3C,
    roof: 0x5C3A1E,
    logs: 0xC4A56E,
    foundation: 0x6B4226,
    frames: 0xA0724A,
    axeMetal: 0x7A7A7A,
    axeHandle: 0xD2A86E,
    grass: 0x4A7A3D,
    stump: 0xB89A6A,
    rocks: 0x888888,
    woodChips: 0xD2B48C
};

const createMat = (color) => new THREE.MeshStandardMaterial({ 
    color: color, 
    flatShading: true,
    roughness: 1.0,
    metalness: 0.0
});

// 2. Create Scene
const scene = new THREE.Scene();
const group = new THREE.Group();
scene.add(group);

// Foundation
const foundation = new THREE.Mesh(new THREE.BoxGeometry(3, 0.4, 2.5), createMat(PALETTE.foundation));
foundation.position.y = 0.2;
group.add(foundation);

// Walls
const walls = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1.2, 2), createMat(PALETTE.walls));
walls.position.y = 1.0;
group.add(walls);

// Roof
const roofL = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.1, 2.4), createMat(PALETTE.roof));
roofL.rotation.z = Math.PI / 6;
roofL.position.set(-0.65, 1.9, 0);
group.add(roofL);

const roofR = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.1, 2.4), createMat(PALETTE.roof));
roofR.rotation.z = -Math.PI / 6;
roofR.position.set(0.65, 1.9, 0);
group.add(roofR);

// Door & Window
const door = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.8, 0.5), createMat(PALETTE.frames));
door.position.set(1.25, 1.0, 0);
group.add(door);

const windowMesh = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.5, 0.1), createMat(PALETTE.frames));
windowMesh.position.set(0, 1.1, 1.0);
group.add(windowMesh);

// Props
const stump = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 0.4, 8), createMat(PALETTE.stump));
stump.position.set(-2, 0.2, 1);
group.add(stump);

const axeHandle = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.5, 0.05), createMat(PALETTE.axeHandle));
axeHandle.position.set(-2.1, 0.6, 1);
axeHandle.rotation.z = Math.PI / 8;
group.add(axeHandle);

const axeBlade = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.15, 0.2), createMat(PALETTE.axeMetal));
axeBlade.position.set(-2.05, 0.8, 1);
axeBlade.rotation.z = Math.PI / 8;
group.add(axeBlade);

// Logs
const logGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.6, 6);
const log1 = new THREE.Mesh(logGeo, createMat(PALETTE.logs));
log1.rotation.z = Math.PI/2;
log1.position.set(-2, 0.1, -1);
group.add(log1);

// Trees
const createPine = (x, z) => {
    const p = new THREE.Group();
    const t = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.5), createMat(PALETTE.foundation));
    t.position.y = 0.25;
    const l = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.5, 6), createMat(PALETTE.grass));
    l.position.y = 1.0;
    p.add(t); p.add(l);
    p.position.set(x, 0, z);
    return p;
};
group.add(createPine(3, -2));

// Export
const exporter = new GLTFExporter();
const exportToGLB = async (input) => {
    return new Promise((resolve, reject) => {
        exporter.parse(input, (result) => {
            resolve(result);
        }, (error) => {
            reject(error);
        }, { binary: true });
    });
};

(async () => {
    try {
        const result = await exportToGLB(group);
        if (result) {
            const outputPath = 'assets/woodcutters_hut/woodcutters_hut.glb';
            fs.writeFileSync(outputPath, Buffer.from(result));
            console.log(`Successfully exported: ${outputPath}`);
        }
    } catch (error) {
        console.error('Export failed:', error);
    } finally {
        process.exit(0);
    }
})();
