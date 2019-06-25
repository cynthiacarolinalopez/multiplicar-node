//requireds
const fs = require('fs');

let base = 3;
let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${ base } * ${ i }= ${ base * i }\n`;
}

fs.writeFile('tabla-2.txt', data, (err) => {
    if (err) throw err;
    console.log('El archivo tabla-2.txt ha sido reado');
});




//2 * 1 = 2
//2 * 2 = 4
//2 * 2 = 6
//2 * 4 = 8
//2 * 5 = 10
//2 * 6 = 12
//2 * 7 = 14
//2 * 8 = 16
//2 * 9 = 18
//2 * 10 = 20