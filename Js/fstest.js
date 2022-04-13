const fs=require('fs');
fs.readFile('/Desktop/data.txt',function(err,data){
    if(err){
        console.log('读取出错',err);
        return;
    }
    console.log(data);
});