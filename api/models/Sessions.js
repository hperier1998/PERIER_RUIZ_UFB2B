let connection = require('../database')

class Sessions {
    static createSes (content, cb) {
        try{
            connection.query('INSERT INTO session SET Titre = ?, DateDebut = ?, DateFin = ?, SessionActive = ?', 
            [content.titre, content.datedebut, content.datefin, content.sessionactive], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static titreModify (content, cb) {
        try {         
            console.log(content)   
            connection.query('UPDATE session SET Titre = ? WHERE Titre = ?', [content.titre, content.selecttitle], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static datedebutModify (content, cb) {
        try {         
            console.log(content)   
            connection.query('UPDATE session SET DateDebut = ? WHERE Titre = ?', [content.datedebut, content.selecttitle], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static datefinModify (content, cb) {
        try {         
            console.log(content)   
            connection.query('UPDATE session SET DateFin = ? WHERE Titre = ?', [content.datefin, content.selecttitle], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static sessionstateModify (content, cb) {
        try {         
            console.log(content)   
            connection.query('UPDATE session SET SessionActive = ? WHERE Titre = ?', [content.sessionactive, content.selecttitle], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }


    static getSession (cb){
        try {
            connection.query('SELECT Titre,DateDebut,DateFin,ID,SessionActive FROM session ORDER BY DATE(session.DateDebut) ASC LIMIT 5',
            (err,row)=> {
                if(err) throw err
                    cb(row)
            })
        } catch (err) {
            console.log(err)
        }
    }

    static getSessionname (cb){
        try {
            connection.query('SELECT Titre FROM session',
            (err,row)=> {
                if(err) throw err
                    cb(row)
            })
        } catch (err) {
            console.log(err)
        }
    }

    static getDefi (cb){
        try {
            connection.query('SELECT Titre,Description FROM defi',
            (err,row)=> {
                if(err) throw err
                    cb(row)
            })
        } catch (err) {
            console.log(err)
        }
    }

    static createDefi (content, cb) {
        try{
            connection.query('INSERT INTO defi SET Titre = ?, Description = ?', 
            [content.titredefi, content.descriptiondefi], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static getDefiname (cb){
        try {
            connection.query('SELECT Titre FROM defi',
            (err,row)=> {
                if(err) throw err
                    cb(row)
            })
        } catch (err) {
            console.log(err)
        }
    }

    static defititleModify (content, cb) {
        try {         
            console.log(content)   
            connection.query('UPDATE defi SET Titre = ? WHERE Titre = ?', [content.titredefi, content.selecttitledefi], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static defidescModify (content, cb) {
        try {         
            connection.query('UPDATE defi SET Description = ? WHERE Titre = ?', [content.descriptiondefi, content.selecttitledefi], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static defiSelect (content, cb) {
        try {         
            console.log(content)   
            connection.query('SELECT Titre FROM defi, utilisateur WHERE utilisateur.ID = ? AND utilisateur.Admin = 0 AND utilisateur.isParticipant = 1', [content.ID], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static getDefiByName (content, cb) {
        try {         
            console.log(content)   
            connection.query('SELECT ID_Defi FROM defi WHERE Titre = ?', [content.body.selecttitledefi], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    } 

    static getProofs (content, cb) {
        try {         
            connection.query('SELECT defi.Titre, depot.Attachement, depot.Statut FROM depot, defi WHERE depot.ID_Defi = defi.ID_Defi AND ? = depot.ID_User', 
            [content.body.ID], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    } 

    static getAllProofs (content, cb) {
        try {         
            connection.query('SELECT utilisateur.ID AS userid, depot.ID AS proofid, defi.Titre, depot.Attachement, depot.Statut, utilisateur.Nom, utilisateur.Prenom FROM depot, defi, utilisateur WHERE depot.ID_Defi = defi.ID_Defi AND depot.ID_User = utilisateur.ID AND depot.statut != "Valider"',  
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    } 

    static addPoints (content, cb) {
        try {          
            connection.query('UPDATE utilisateur SET score = score + ? WHERE ? = ID', [content.body.points, content.body.userID], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static validateProof (content, cb) {
        try {        
            console.log(content)   
            connection.query('UPDATE depot SET statut = ? WHERE ? = ID', [content.body.statut, content.body.proofID], 
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

module.exports = Sessions