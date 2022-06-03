const fs = require('fs');
const {Transform} = require('stream');
const zlib = require('zlib');


const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

const transformText = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
})

readStream.pipe(transformText).pipe(writeStream); //1

readStream.on('data', chunk => {
    writeStream.write(chunk.toString().toUpperCase()); //2
});

const gzipTransform = fs.createWriteStream('output.gz')
const gzip = zlib.createGzip();  // սա Transform stream է, սրա միջով Data անցնում է

readStream.pipe(gzip).pipe(writeStream);

