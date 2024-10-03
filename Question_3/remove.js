//Question 3: File Module

const fs = require('fs');
const path = require('path');

function removeLogFiles() {
    const dir = './Logs';
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(file => {
            console.log(`Deleting...... ${file}`);
            fs.unlinkSync(path.join(dir, file));
        });
        fs.rmdirSync(dir);
        console.log('Logs directory removed');
    }
}

removeLogFiles();