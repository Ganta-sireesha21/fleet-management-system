const fs=require("fs");
const path=require("path");
module.exports=(req,res,next)=>{
    const log=`${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    fs.appendFile(path.join(__dirname,'../../logs.txt'),log);

        next();
    };