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
    let c = fs.readFileSync(f, 'utf8');
    let newC = c.replace(/\{\/\*(.*?)\*\/\}(\s*\r?\n\s*\);)/g, '/* $1 */$2');
    if (c !== newC) {
        console.log('Fixed:', f);
        fs.writeFileSync(f, newC);
    }
}
