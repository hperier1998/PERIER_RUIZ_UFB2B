let Users = require('../models/Users')

module.exports = {
    async getScore(req,res){
        await Users.getScore(function(data){
            let usersScore = []
            let i = 1
            data.forEach(usr => {
                let user = {
                    Place:i,
                    Nom:usr.Nom,
                    Prenom:usr.Prenom,
                    Score:usr.score
                }
                
                usersScore.push(user)
                i+=1
            });
            res.send(usersScore)
        })
    },

    async userScore(req,res){
        await Users.userScore(req.body.id,function(data){
            let user = {
                Nom:data.Nom,
                Prenom:data.Prenom,
                Score:data.score
            }
            res.send(user)
        })
    }
}