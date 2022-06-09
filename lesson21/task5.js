/*
    5.Գրել ծրագիր որ կկարդա Homework5 պապկայի ֆայլերը,  կստեղծի newDir պապկա և այնտեղ կտեղափոխի այն ֆայլերը
     իրենց պարունակություններով որոնք 1kB մեծ են :
 */
const fs = require('fs').promises;
const fsExtra = require('fs-extra');

async function moveDir(){
    const files = await fs.readdir('Web');
    for(let filePath of files ){
        const stat = await fs.stat('./Web/'+filePath);
        if(stat.isFile() && stat.size > 0.1){
           await fsExtra.move('./Web/'+ filePath, './newDir/' + filePath);
        }
    }
}


moveDir().then().catch(err=>{
    console.error('err');
});

