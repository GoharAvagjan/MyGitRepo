/*
    3.Գրել ծրագիր, որը կկարդա homework3.txt ֆայլի պարունակությունը, տեքստից կհեռացնի  ստորակետները  և
    կգրի replace.txt ֆայլում, որից հետո ջնջել homework3.txt ֆայլը:
 */
const fs = require('fs');
const {Transform} = require('stream');
/*
async function removeCommas(){
    const readStream = fs.createReadStream('./homework3.txt');

    const writeStream = fs.createWriteStream('․/replace.txt');

    const transform = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().replace(/\,/g, ''));
            callback();
        }
    });
        readStream.pipe(transform).pipe(writeStream);

        readStream.on('end', () => {

        });

        writeStream.on('finish', () => {
            fs.unlink('./homework3.txt', (err) =>{

            });
        });
    }

removeCommas().then().catch((err) =>{
    console.error(err);
});
*/


//երկրորդ տարբերակ, գրել promise -ով

async function removeCommas(){
    const data = await fs.promises.readFile('./homework3.txt', "utf-8");
    //console.log(data);
    await fs.promises.writeFile('./replace.txt', data.toString().replace(/\,/g, ''));
    //await fs.promises.unlink('./homework3.txt');

}
removeCommas().then().catch((err) =>{
    console.error(err);
});