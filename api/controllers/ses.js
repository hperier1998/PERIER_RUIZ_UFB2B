let Sessions = require('../models/Sessions')

module.exports = {
    async registerSes(req, res){
        try {
            await Sessions.createSes(req.body, function(){
                res.send({Message:'Session created.'})
            })
        } catch (error) {
            
        }
    },

    async modifySes(req, res){
        try {
            if(req.body.datedebut != ''){
                await Sessions.datedebutModify(req.body, function(callback){})
            }
            if(req.body.datefin != ''){
                await Sessions.datefinModify(req.body, function(callback){})
            }
            if(req.body.sessioanctive != ''){
                await Sessions.sessionstateModify(req.body, function(callback){})
            }
            if(req.body.titre != ''){
                await Sessions.titreModify(req.body, function(callback){})
            }
            res.send('Session mis a jour')
        } catch (error) {
            console.log(err)
        }
    },

    async getSession(req,res){
        await Sessions.getSession(function(data){
            let sessionStore = []
            let i = 1
            data.forEach(ses => {
                let session = {
                    Titre:ses.Titre,
                    DateDebut:ses.DateDebut,
                    DateFin:ses.DateFin,
                    SessionActive:ses.SessionActive
                }
                sessionStore.push(session)
                i+=1
            });
            res.send(sessionStore)
        })
    },

    async getDefi(req,res){
        await Sessions.getDefi(function(data){
            let defiStore = []
            let i = 1
            data.forEach(def => {
                let defis = {
                    Titre:def.Titre,
                    Description:def.Description
                }
                defiStore.push(defis)
                i+=1
            });
            res.send(defiStore)
        })
    },

    async getSessionnames(req, res){
        try {
            await Sessions.getSessionname(function(callback){res.send(callback)})
        } catch (error) {
            console.log(error)
        }
    },

    async registerDefi(req, res){
        try {
            await Sessions.createDefi(req.body, function(){
                res.send({Message:'Defi created.'})
            })
        } catch (error) {
            
        }
    },

    async getDefinames(req, res){
        try {
            await Sessions.getDefiname(function(callback){res.send(callback)})
        } catch (error) {
            console.log(error)
        }
    },

    async modifyDefi(req, res){
        try {
            if(req.body.descriptiondefi != ''){
                await Sessions.defidescModify(req.body, function(callback){})
            }
            if(req.body.titredefi != ''){
                await Sessions.defititleModify(req.body, function(callback){})
            }
            res.send('Defi mis a jour')
        } catch (error) {
            console.log(err)
        }
    },

    async defiSelects(req, res){
        try {
            await Sessions.defiSelect(req, function(callback){res.send(callback)})
        } catch (error) {
            console.log(error)
        }
    }, 

    async getDefiByName(req, res){
        try {
            await Sessions.getDefiByName(req, function(callback){res.send(callback)})
        } catch (error) {
            console.log(error)
        }
    }, 

    async getProofs(req, res){
        try {
            await Sessions.getProofs(req, function(callback){res.send(callback)})
        } catch (error) {
            console.log(error)
        }
    }, 

    async getAllProofs(req, res){
        try {
            await Sessions.getAllProofs(req, function(callback){res.send(callback)})
        } catch (error) {
            console.log(error)
        }
    }, 

    
    async addPoints(req, res){
        try {
            await Sessions.addPoints(req, function(callback){res.send(callback)})
        } catch (error) {
            console.log(error)
        }
    },

    
    async validateProof(req, res){
        try {
            await Sessions.validateProof(req, function(callback){res.send(callback)})
        } catch (error) {
            console.log(error)
        }
    },
    
}