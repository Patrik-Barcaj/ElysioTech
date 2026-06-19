const fs = require('fs');
const files = ['src/components/Contact.tsx', 'src/components/Hero.tsx', 'src/components/Navigation.tsx', 'src/components/Portfolio.tsx', 'src/components/Services.tsx', 'src/app/page.tsx', 'src/app/layout.tsx'];

for (let f of files) {
    if (!fs.existsSync(f)) continue;
    let text = fs.readFileSync(f, 'utf8');

    // Strip CR
    text = text.replace(/\r/g, '');

    // Fix root node comments (which break single-node return constraint)
    text = text.replace(/<\/section>\s*\{\/\*(.*?)\*\/\}/g, '</section> /* $1 */');
    text = text.replace(/<\/main>\s*\{\/\*(.*?)\*\/\}/g, '</main> /* $1 */');
    text = text.replace(/<\/html>\s*\{\/\*(.*?)\*\/\}/g, '</html> /* $1 */');

    // Fix stray */ from portfolio/services
    text = text.replace(/\/\*(.*?)\*\/\n\s*\*\//g, '/* $1 */');

    // Fix navigation toggle
    text = text.replace(/>\s*\{\/\*\s*open toggle button\s*\*\/\}/g, '> {/* open toggle button */}');

    fs.writeFileSync(f, text);
}
console.log("Super fix applied.");
