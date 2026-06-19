const fs = require('fs');

function fix(dir) {
    for (let f of fs.readdirSync(dir)) {
        if (f.endsWith('.tsx')) {
            let p = dir + '/' + f;
            let c = fs.readFileSync(p, 'utf8');
            let lines = c.split('\n');

            for (let i = 0; i < lines.length; i++) {
                let line = lines[i];
                let match = line.match(/^(.*?)\/\* (.*?) \*\/\s*$/);

                if (!match) continue;

                let code = match[1];
                let comment = match[2];
                let trim = code.trim();

                if (trim === '') continue;

                if (trim.match(/<\/(main|section|html|header)>$/)) {
                    lines[i] = code + `/* ${comment} */`;
                }
                else if (trim.endsWith(';') || trim === '}' || trim.endsWith('){')) {
                    lines[i] = code + `/* ${comment} */`;
                }
                else if (trim.endsWith('>') || trim.endsWith('}') || trim.endsWith(')')) {
                    lines[i] = code + `{/* ${comment} */}`;
                }
                else if (trim.endsWith('(') || trim.match(/[a-zA-Z\-]+=["'{]/) || trim.endsWith('"') || trim.endsWith("'") || (trim.includes('<') && !trim.includes('>'))) {
                    lines[i] = code + `/* ${comment} */`;
                }
                else {
                    lines[i] = code + `{/* ${comment} */}`;
                }
            }
            fs.writeFileSync(p, lines.join('\n'));
        } else if (fs.statSync(dir + '/' + f).isDirectory()) {
            fix(dir + '/' + f);
        }
    }
}

fix('src/app');
fix('src/components');
console.log("Ultimate fix applied.");
