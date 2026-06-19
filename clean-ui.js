const fs = require('fs');
const files = [
    'src/app/page.tsx',
    'src/app/layout.tsx',
    'src/components/Navigation.tsx',
    'src/components/Hero.tsx',
    'src/components/Services.tsx',
    'src/components/Portfolio.tsx',
    'src/components/Contact.tsx'
];

for (let f of files) {
    if (!fs.existsSync(f)) continue;
    let lines = fs.readFileSync(f, 'utf8').split('\n');
    let inJSX = false;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line.includes('return (')) inJSX = true;

        let match = line.match(/\/\/ (.*)$/);
        if (match && !line.includes('http://') && !line.includes('https://')) {
            let code = line.substring(0, match.index);
            let comment = match[1].trim();
            let trim = code.trim();

            if (inJSX && trim !== '') {
                // inside JSX, we must use safe comments to avoid text rendering
                if (trim.match(/^[a-z]+=/i) || (trim.startsWith('<') && !trim.includes('>'))) {
                    lines[i] = code + `/* ${comment} */`;
                } else if (trim.endsWith(';') || trim.endsWith('(') || trim.endsWith(')}') || trim.endsWith(')')) {
                    // expressions or array mappers
                    lines[i] = code + `/* ${comment} */`;
                } else {
                    // standard elements and text children
                    lines[i] = code + `{/* ${comment} */}`;
                }
            }
        }

        if (line.includes(');')) inJSX = false;
    }
    fs.writeFileSync(f, lines.join('\n'));
}

// 2. Clear root adjacency syntax errors
for (let f of files) {
    if (!fs.existsSync(f)) continue;
    let text = fs.readFileSync(f, 'utf8');
    text = text.replace(/<\/section>\s*\{\/\*(.*?)\*\/\}/g, '</section> /* $1 */');
    text = text.replace(/<\/main>\s*\{\/\*(.*?)\*\/\}/g, '</main> /* $1 */');
    text = text.replace(/<\/html>\s*\{\/\*(.*?)\*\/\}/g, '</html> /* $1 */');
    fs.writeFileSync(f, text);
}
console.log('Fixed UI text leakage');
