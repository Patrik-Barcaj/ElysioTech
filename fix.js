const fs = require('fs'); // import fs module

function fixComments(file) { // declare function
    let lines = fs.readFileSync(file, 'utf8').split('\n'); // read file
    let inJSX = false; // state variable

    for (let i = 0; i < lines.length; i++) { // iterate over lines
        let line = lines[i]; // get line
        if (line.includes('return (')) inJSX = true; // start JSX

        let idx = line.lastIndexOf('//'); // find trailing comment
        if (idx === -1) continue; // skip if none
        if (line.includes('http://') || line.includes('https://')) { // check urls
            let firstIdx = line.indexOf('//'); // first slash
            if (firstIdx === idx) continue; // it is the url
        }

        let code = line.substring(0, idx); // extract code
        let comment = line.substring(idx + 2); // extract comment
        if (code.trim() === '') continue; // whole line comment

        if (!inJSX) { // outside jsx
            continue; // keep as is
        } else { // inside jsx
            let trimmed = code.trim(); // trim whitespace
            if (trimmed.endsWith('>')) { // jsx node end
                lines[i] = code + '{/*' + comment + ' */}'; // replace with jsx comment
            } else if (trimmed.endsWith('}') && !trimmed.includes('=')) { // expression end
                lines[i] = code + '{/*' + comment + ' */}'; // replace with jsx comment
            } else if (trimmed.endsWith('(')) { // return (
                lines[i] = code + '/*' + comment + ' */'; // block comment
            } else { // inside attributes
                lines[i] = code + '/*' + comment + ' */'; // block comment
            }
        }

        if (code.trim() === ');' || code.trim() === '}') inJSX = false; // exit jsx mode
    } // loop end
    fs.writeFileSync(file, lines.join('\n')); // save file
} // function end

['src/app/page.tsx', 'src/app/layout.tsx', 'src/components/Navigation.tsx', 'src/components/Hero.tsx', 'src/components/Services.tsx', 'src/components/Portfolio.tsx', 'src/components/Contact.tsx'].forEach(f => {
    if (fs.existsSync(f)) fixComments(f); // execute fix
}); // loop over files
