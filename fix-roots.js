const fs = require('fs'); // import fs module

function fixRoots(file) { // declare function
    if (!fs.existsSync(file)) return; // check file
    let content = fs.readFileSync(file, 'utf8'); // read content
    content = content.replace(/(<\/(?:html|main|header|section)>)\s*\{\/\*(.*?)\*\/\}/g, '$1 /* $2 */'); // replace root comments
    content = content.replace(/(<\/html>)\s*\{\/\*(.*?)\*\/\}/g, '$1 /* $2 */'); // explicitly html
    fs.writeFileSync(file, content); // write back
} // close func

['src/app/page.tsx', 'src/app/layout.tsx', 'src/components/Navigation.tsx', 'src/components/Hero.tsx', 'src/components/Services.tsx', 'src/components/Portfolio.tsx', 'src/components/Contact.tsx'].forEach(fixRoots); // exec
