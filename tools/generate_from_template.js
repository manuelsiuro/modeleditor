import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure correct usage
if (process.argv.length < 4) {
    console.error('Usage: node generate_from_template.js <output_folder_name> <path_to_model_script.js>');
    process.exit(1);
}

const outputFolderName = process.argv[2];
const modelScriptPath = process.argv[3];

const templatePath = path.join(__dirname, '../templates/editor_template.html');
const outputDir = path.join(__dirname, '../assets', outputFolderName);
const outputPath = path.join(outputDir, 'index.html');

try {
    // 1. Read the template
    let template = fs.readFileSync(templatePath, 'utf-8');

    // 2. Read the model script
    const modelCode = fs.readFileSync(modelScriptPath, 'utf-8');

    // 3. Inject the model code into the template
    const injectionToken = '/* --- INJECT_MODEL_HERE --- */';
    if (!template.includes(injectionToken)) {
        throw new Error('Template is missing the injection token: ' + injectionToken);
    }
    
    template = template.replace(injectionToken, modelCode);

    // 4. Update the title based on the folder name
    const titleFriendly = outputFolderName.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    template = template.replace('<h2 id="model-title" style="margin-top:0">3D Editor</h2>', `<h2 id="model-title" style="margin-top:0">${titleFriendly}</h2>`);
    template = template.replace('<title>AI 3D Model Editor</title>', `<title>${titleFriendly} - Editor</title>`);

    // 5. Ensure output directory exists and write the file
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, template);
    
    console.log(`Successfully generated editor at: ${outputPath}`);
    console.log(`To view, open: ${outputPath}`);

} catch (error) {
    console.error('Error generating from template:', error);
    process.exit(1);
}
