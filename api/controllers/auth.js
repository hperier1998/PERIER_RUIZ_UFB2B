let Users = require('../models/Users')

module.exports = {
    async register(req, res){
        try {
            await Users.create(req.body, function(){
                res.send({Message:'User created.'})
            })
        } catch (error) {
            
        }
    },

    async login(req, res){
        try {
            await Users.login(req.body, function(data){
                res.send(data)
            })
        } catch (error) {
            
        }
    },

    async modify(req, res){
        try {
            if(req.body.email != ''){
                await Users.emailModify(req.body, function(callback){})
            }
            if(req.body.tel != ''){
                await Users.telModify(req.body, function(callback){})
            }
            if(req.body.codepostal != ''){
                await Users.codepostalModify(req.body, function(callback){})
            }
            if(req.body.ville != ''){
                await Users.villeModify(req.body, function(callback){})
            }
            if(req.body.adresse != ''){
                await Users.adresseModify(req.body, function(callback){})
            }
            if(req.body.pays != null){
                await Users.paysModify(req.body, function(callback){})
            }
            if(req.body.password != ''){
                await Users.passwordModify(req.body, function(callback){})
            }
            res.send('Utilisateur mis a jour')
        } catch (error) {
            console.log(err)
        }
    },

    async refreshVueX(req, res){
        try { 
            console.log(req.body)
            Users.selectUserByID(req.body.ID, function(callback){
            let user=callback
            res.send(user)
            })
        } catch(err) {
                console.log(err)
        }
    },

    async addUsertosession(req, res){
        try {
            await Users.addUserses(req.body, function(data){
                console.log('Ok')
                res.send(data)
            })
        } catch (error) {
            
        }
    }
}