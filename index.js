const fs = require('fs');

fs.readFile('./text.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});

fs.writeFile('./text.txt', 'Hello, World!11', (err) => {
    if(err) {
        console.error(err);
    } else { 
        console.log('File written successfully');
    }
    deleteFile();
});

fs.appendFile('./text.txt', '\nnew data appended to file', (err) => {
    if(err) {
        console.error(err);
    } else { 
        console.log('Data appended successfully');
    }
})

function deleteFile() {
    fs.unlink('./text.txt', (err) => {
        if(err) {
            console.error(err);
        } else { 
            console.log('File deleted successfully');
        }
    })
}

fs.mkdir('./newFolder', (err) => {
    if(err) {
        console.error(err);
    } else { 
        console.log('Directory created successfully');
    }
})

fs.readdir('./', (err, files) => {
    if(err) {
        console.error(err);
    } else { 
        console.log('Files in directory:', files);
    }
})

fs.rename('./text.txt', './newFolder/renamed.txt', (err) => {
    if(err) {
        console.error(err);
        return;
    } else { 
        console.log('File renamed successfully');
    }
})

fs.mkdirSync('./logs');
fs.writeFileSync('./logs/log.txt', 'Log created')
let logData = fs.readFileSync('./logs/log.txt', 'utf-8');
console.log(logData);
fs.appendFileSync('./logs/log.txt', `\ndata: ${new Date()}`);
fs.renameSync('./logs/log.txt', './log_updated.txt');

console.log(fs.existsSync('./log_updated.txt'));


// fs.rmSync('./logs/log_updated.txt');
fs.rmdirSync('./logs');

fs.writeFile('./users.txt', 'John, Jane, Alice', (err) => {
    if(err) {
        console.error(err);
    } else { 
        console.log('File written successfully');
    }
});

fs.readFile('./users.txt', 'utf-8', (err, data) => {
    if(err) {
        console.error(err);
    } 
    console.log('Users:', data)
})

const data = {
    name: 'Node.js',
    type: 'Runtime'
}


fs.writeFileSync('./data.json', JSON.stringify(data))
let newData = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
console.log(data);
newData.version = '14.15.4';
console.log(newData);
fs.writeFileSync('./data.json', JSON.stringify(newData))

fs.mkdirSync('./backup')
const files = fs.readdirSync('./');
console.log(files);
files.forEach(file => {
    if (file.includes('.txt'))  {
        if(file === 'config.txt') {
            fs.copyFileSync('./' + file, './backup/config_backup.txt');
        } else {
            fs.copyFileSync(file, './backup/' + file);
        }

    }
})


