// convert-images.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const sourceDir = 'img';
const outputDir = path.join(sourceDir, 'webp');

console.log('Iniciando conversão de imagens das subpastas...');

try {
    const directories = fs.readdirSync(sourceDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory() && dirent.name !== 'webp')
        .map(dirent => dirent.name);

    for (const dirName of directories) {
        const inputPath = path.join(sourceDir, dirName);
        const outputPath = path.join(outputDir, dirName);

        console.log(`Processando pasta: ${inputPath}`);

        const command = `npx imagemin "${inputPath}/*.{jpg,png,svg,gif}" --plugin=webp --out-dir="${outputPath}"`;
        execSync(command, { stdio: 'inherit' });
    }

    console.log('✅ Conversão concluída com sucesso!');
} catch (error) {
    console.error('❌ Ocorreu um erro durante a conversão:', error);
}