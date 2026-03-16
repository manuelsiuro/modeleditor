---
name: threejs-model-generator
description: Generate 3D models from text prompts and wrap them in a feature-rich editor. Use when a user asks to "create a model", "build a 3D scene", or provides a specific object description like "generate a spaceship".
---

# Three.js Model Generator

This skill automates the creation of low-poly 3D models using a master editor template. It ensures all generated models have built-in Undo, Screenshot, Transformation, and Export capabilities.

## Workflow

1.  **Interpret Prompt**: Identify the core objects, shapes, and color palette from the user's description.
2.  **Generate Snippet**: Write a concise Three.js JavaScript snippet using the `addMesh` utility.
3.  **Save Snippet**: Save the snippet to a temporary file (e.g., `tools/temp_model.js`).
4.  **Run Generator**: Execute the template generator script to create the final HTML editor.
5.  **Notify User**: Provide the path to the generated `index.html`.

## Code Generation Guidelines

Always use the built-in `addMesh` utility provided by the master template:

```javascript
// Function signature available in template:
// addMesh(geometry, colorOrMaterial, position[x,y,z], rotation[x,y,z], name)

// 1. Define Palette (Optional but recommended)
const PALETTE = {
    primary: 0x8B5E3C,
    accent: 0x5C3A1E
};

// 2. Add Meshes
addMesh(new THREE.BoxGeometry(1, 1, 1), PALETTE.primary, [0, 0.5, 0], [0, 0, 0], "MyBox");
addMesh(new THREE.CylinderGeometry(0.5, 0.5, 2), 0x777777, [2, 1, 0], [Math.PI/2, 0, 0], "MyPillar");
```

## Commands

To generate the final editor:
```bash
node tools/generate_from_template.js <model_name_slug> tools/temp_model.js
```

## Best Practices
- **Low-Poly**: Favor simple primitives (Box, Cylinder, Cone, Sphere) for a clean aesthetic.
- **Flat Shading**: The template handles material creation with flat shading automatically.
- **Naming**: Give meshes meaningful names (e.g., "LeftWing", "Roof") so they are identifiable in the editor's hierarchy.
- **Cleanup**: Delete the temporary `.js` snippet after successful generation.
