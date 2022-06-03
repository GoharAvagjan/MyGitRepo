/*
    3․ Ստեծել ֆունկցիա , որը input.txt ֆայլի պարունակությունը կկարդա , հետո պարունակության տեքստը կկիսի
    երկու մասի և միաժամանակ կգրի առաջին մասը output1.txt , իսկ երկրորդը output2.txt ֆայլերի մեջ։
    Օգտվել 'fs/promises' գրադարանից և օգտագործել async/await:
*/
const fs = require('fs/promises');

async function f(){
    const data = (await fs.readFile('input.txt')).toString();
    await Promise.all([
        fs.writeFile('output2.txt', data.slice(0, data.length/2 )),
        fs.writeFile('output2.txt', data.slice( data.length/2 ))
    ]);

}
f.then().catch();