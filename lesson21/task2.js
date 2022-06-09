/*
2. Գրել ծրագիր որ նախորդ առաջադրանքի կողմից ստեղծված ֆայլ կանվանափոխի այդ պահի ամիս, օր, ժամ, րոպեով,
    վայրկյանով (Օրինակ 10_11_15_32_13.txt):
 */
const fs = require('fs');
const os = require('os');
//const userInfo = require('./'+os.userInfo().username + '.json');

const fileName = os.userInfo().username + '.json';
const nowDate = new Date();

fs.rename(fileName, nowDate.getMonth() + '_' + nowDate.getHours()+'_' + nowDate.getMinutes()+'.txt', (err)=>{
    if(err){
        console.err(err.message);
        return;
    } else{
        console.log('done');
    }
});

