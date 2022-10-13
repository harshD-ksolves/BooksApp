const { appendFile } = require("fs");

const appLog=(req,res,next)=>{

    const ip = req.rawHeaders['x-forwarded-for'] ||
     req.socket.remoteAddress ||
     null;

    const data=`${new Date()} request ${req.method} is made on ${req._parsedUrl.path} by IP:- ${ip}\n`;
    appendFile(process.env.appLogFileName,data,(err)=>{
        if(err){
            console.log(err);
        }
    });
    next();
}

module.exports=appLog;