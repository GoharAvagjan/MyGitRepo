/*
4.Ունենք const web=['html','css','js','txt'] զանգված: Գրել ծրագի որ կստեղծի զանգվածի անունով պապկա:
Զանգվածի անդամներից այդ պապկայում ստեղծել  ֆայլեր հերթական անդամի անունով և վերջավորությունն էլ նույնը
լինի(օրինակ html.html) պարունակություն էլ այդ անդամը:

*/
const fs = require('fs').promises;

async function creatDear(dirName, arr){
   await fs.mkdir(dirName);
   //տարբերակ
    const promises = arr.map(item => fs.writeFile(dirName + '/' + item + '.' + item, item));
    //տարբերակ
    /*  const promises = [];
        for (let item of arr ){
           promises.push(fs.writeFile(dirName + '/'+ item +'.'+item, item));
        }
    */
    await Promise.all(promises);
}
creatDear('web', ['html','css','js','txt']).then().catch(err => console.error(err));