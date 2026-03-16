# blendermcp Project Overview

This project is a specialized tool for generating and exporting low-poly 3D models using Three.js. It allows for both headless generation via Node.js (with `jsdom`) and browser-based previewing and exporting.

## Tech Stack
- **Three.js**: Core 3D engine for scene construction and GLTF/GLB export.
- **Node.js**: Environment for headless model generation.
- **JSDOM**: Used to mock the DOM in Node.js, enabling `GLTFExporter` to function in a headless environment.
- **GLTFExporter**: Three.js utility for exporting scenes to `.glb` format.

## Project Structure
- `assets/`: Contains generated models and their corresponding web previews.
  - `woodcutters_hut/`: Example project containing:
    - `index.html`: A browser-based previewer with an "Export .GLB" button.
    - `generate.js`: The Node.js-compatible generation script.
- `skills/`: Comprehensive Markdown documentation and examples for various Three.js capabilities (animation, geometry, lighting, etc.).
- `package.json`: Project configuration and dependencies (`three`, `jsdom`).

## Building and Running

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
```bash
npm install
```

### Generating Models (Headless)
To generate a model and save it directly to the disk:
```bash
node assets/woodcutters_hut/generate.js
```
*Note: The generation script mocks the DOM to allow `GLTFExporter` to run in Node.js.*

### Previewing and Exporting (Browser)
1. Open the `index.html` file in any modern web browser:
   ```bash
   open assets/woodcutters_hut/index.html
   ```
2. Interact with the model using OrbitControls.
3. Click **"Download .GLB"** to export the model.

## Development Conventions
- **ES Modules**: The project uses `"type": "module"` in `package.json`.
- **Flat Shading**: Low-poly models use `MeshStandardMaterial` with `flatShading: true` for the stylized aesthetic.
- **Mocking**: Headless scripts require mocking `window`, `document`, `Blob`, and `FileReader` to support Three.js exporters.
- **Organization**: New models should be placed in a dedicated subfolder within `assets/`.
