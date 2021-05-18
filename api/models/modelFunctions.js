let connection = require('../database')

class modelFunctions {
    static sendPic (content, cb) {
        try{
            connection.query('INSERT INTO depot (ID_User, ID_Defi, Attachement) VALUES (?, ?, ?)', 
            [content.body.ID, content.body.defiID, content.body.pic], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = modelFunctions