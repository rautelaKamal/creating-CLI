const { Command } = require('commander');
const fs = require('fs');
const program = new Command();

program
    .name('counter')
    .description('CLI to do file-based tasks')
    .version('0.8.0');

program.command('count') 
    .description('Count the spaces in the given file')
    .argument('<file>', 'File to count spaces in') // Dynamic file argument
    .action((file) => { // Use "file" as the argument name
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err.message);
                return;
            }

            let count = 0;
            for (const char of data) {
                if (char === ' ') {
                    count=count+1;
                }
            }

            console.log(`The file "${file}" contains ${count} words.`);
        });
    });

program.parse();