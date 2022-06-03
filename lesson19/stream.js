const fs = require('fs');
const { Readable, Writable, Transform } = require('stream');


//գրենք class Read ու ժառանգի Readable class

class Read extends Readable {
   constructor (array) {
       super();
     this.array = array;
     this.index = 0;
   }
   _read () {
       if(this.index < this.array.length) {
            this.push(Buffer.from(this.array[this.index].toString()));
            this.index++;
       } else {
           this.push(null);
       }
       //this.push(this.array[0]);

   }
}

const writable = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});

const transform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
})



const readable = new Read(['a', 'b','c', 'd', 'e']);

readable.pipe(transform).pipe(writable); // մի տարբերակ
//մյուս տարբերակը

//readable.on('data', function(chunk){
//    writable.write(chunk.toString().toUpperCase())
//})

/*
readable.on('data', function (chunk){
    console.log(chunk.toString())
});
readable.on('end', function(){
    console.log('end');
});




const readable = fs.createReadStream('./input.txt', {
    highWaterMark: 4,
});
readable.on('data', function (chunk){
    console.log(chunk.toString()); //մեր կարդացած data
});

process.stdin   //հանդիսանում է readstream

process.stdin.on('data', function(chunk){
    console.log(chunk.toString());
});


process.stdin.on('data', function(chunk){
    process.stdout.write(chunk.toString().toUpperCase())
});
 */
 //console.log(process);
// console.log(process.release['name']);
