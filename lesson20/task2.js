/*
    2.Գրել ծրագիր որ լատինատառ տեքստը որևէ մոտավորությամբ կսարքի հայատառ: Օրինակ ա տառը կդառնա a:
    Այդպես բոլոր տառերը: Ստեղծել readStream և highWaterMark:1  նշելով բոլոր սիմվոլների վրայով անցնել:
    Ծրագիրը աշխատացնել homework4Eng.txt համար:
*/
const fs = require('fs');
const {Transform} = require('stream');

const config = {
    a: 'ա',
    b: 'բ',
    c: 'ց',
    d: 'դ',
    e: 'ի'
};

const readStream = fs.createReadStream('./homework4Eng.txt',{
    highWaterMark:1
});

const writeStream = fs.createWriteStream('./homework4Hy.txt');

const transform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(config[chunk.toString()]);
        callback();
    }
});

readStream.pipe(transform).pipe(writeStream);