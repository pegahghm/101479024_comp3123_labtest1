//Question 3: File Module

const fs = require('fs');
const path = require('path');

function createLogFiles() {
    const dir = './Logs';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    console.log('Logs directory created');

    process.chdir(dir);
    for (let i = 0; i < 10; i++) {
        fs.writeFileSync(`log${i}.txt`, `This is a log file ${i}`);
        console.log(`Created log${i}.txt`);
    }
}


createLogFiles();
