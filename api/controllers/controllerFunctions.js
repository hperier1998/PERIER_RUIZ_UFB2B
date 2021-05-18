let modelFunctions = require('../models/modelFunctions')
let fs = require('fs')

module.exports = {

    destinationFile(res,file,cb){

        let dir = "./img/uploads/"
        if(!fs.existsSync(dir)){
            fs.mkdir(dir, { recursive: true },(err)=>{
                if(err){
                    cb(false,null)
                }else{
                    cb(null,dir)
                }
            })
        }
        cb(null,dir)
    },

    nameFile(req,file,cb){
        if(file.mimetype === 'image/png'){
            cb(null,Date.now()+".png")
        }
        if(file.mimetype === 'image/jpeg'){
            cb(null,Date.now()+".jpg")
        }
    },

    checkImage(req,file,cb){
        let allowedTypes = ["image/jpeg","image/png"]
        file.size
        if(!allowedTypes.includes(file.mimetype)){
            let error = new Error("Wrong file type")
            error.code = "LIMIT_FILE_TYPES"
            return cb(error,false)
        }
        cb(null,true)
    },

    async sendPic(req, res){
        try {
            await modelFunctions.sendPic(req, function(callback){})
        } catch (error) {
            console.log(error)
        }
    },
}

