const fs=require('fs');

function readFileAsync(path){
    return new Promise(function (resolve, reject) {//实例化Promise
        fs.readFile(path,function (err,data) {
            if(err){
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

readFileAsync('C://Users/Administrator/Dasktop/data.txt')
.then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.error(err)
})