# blendermcp Project Overview

This project is a specialized tool for generating and exporting low-poly 3D models using Three.js. It features a master template system that automatically injects advanced editor capabilities into every generated model.

## Tech Stack
- **Three.js**: Core 3D engine for scene construction and GLTF/GLB export.
- **Node.js**: Environment for automation and headless generation.
- **JSDOM**: Used to mock the DOM in Node.js for headless exports.
- **GLTFExporter**: Utility for exporting scenes to `.glb` format.

## Custom Skill: `threejs-model-generator`
The project includes a custom Gemini CLI skill to automate model creation from text prompts.

### Workflow
1.  **Prompt**: User provides a description (e.g., "A low-poly spaceship").
2.  **Generation**: Gemini creates a Three.js geometry snippet in `tools/`.
3.  **Templating**: The `tools/generate_from_template.js` script merges the snippet into `templates/editor_template.html`.
4.  **Deployment**: A new folder is created in `assets/` with a feature-rich `index.html`.

## Project Structure
- `assets/`: Contains generated model editors (e.g., `woodcutters_hut`, `spaceship`).
- `templates/`:
  - `editor_template.html`: Master template with Undo, Screenshot, Transform, and Export logic.
- `tools/`:
  - `generate_from_template.js`: Script to build new editors from snippets.
  - `woodcutter.js`, `spaceship.js`: Model-specific geometry snippets.
- `skills/`: Comprehensive Three.js reference documentation.
- `threejs-model-generator.skill`: The packaged skill for Gemini CLI.

## Editor Features
Every generated model automatically includes:
- **Selection**: Click to select any part of the model.
- **Transformation**: `G` (Move), `R` (Rotate), `S` (Scale) using a 3D gizmo.
- **Undo System**: `Ctrl + Z` to reverse the last 50 actions.
- **Duplication/Deletion**: `D` to clone, `Delete` to remove objects.
- **Screenshot**: `P` or the Screenshot button to capture a clean `.png`.
- **GLB Export**: Export the current scene to a standard 3D file.

## Usage

### Prerequisites
- Node.js (v18+)
- npm install (to get `three` and `jsdom`)

### Generating a New Model (via Skill)
Simply prompt Gemini CLI:
> "Generate a low-poly [your object description]"

### Manual Generation
If you have a geometry snippet in `tools/my_model.js`:
```bash
node tools/generate_from_template.js my_model tools/my_model.js
```

### Viewing
Open `assets/[model_name]/index.html` in any modern web browser.

- **Organization**: New models should be placed in a dedicated subfolder within `assets/`.
