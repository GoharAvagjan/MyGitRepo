/*
    1. Ստեղծել Promise վերադարձնող ֆունկցիա , որը գեներացնում է 0 - 10 միջակայքի թիվ և ստուգում ,
    եթե թիվը փոքր է 5-ից reject է անում , հակառակ դեպքում resolve . Աշխատացնել ֆունկցիան և տպել արժեքները։

*/
const random = require('random');

function check(){
    return new Promise((resolve, reject) => {
        const randomNumber = random.int(0, 10);
        if(randomNumber < 5){
            reject(new Error("The number less than 5"))
        } else {
            resolve(randomNumber);
        }
    });
}

check().then((number) =>{
    console.log(number);
}).catch((err) =>{
    console.log(err.message);
});