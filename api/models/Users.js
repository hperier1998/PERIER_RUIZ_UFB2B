let connection = require('../database')

class Users {
    static create (content, cb) {
        try{
            connection.query('INSERT INTO utilisateur SET Password = ?, Email = ?, Nom = ?, Prenom = ?, Adresse = ?, Ville = ?, CodePostal = ?, Pays = ?, Tel = ?, DateNaissance = ?', 
            [content.password, content.email, content.nom, content.prenom, content.adresse, content.ville, content.codepostal, content.pays, content.tel, content.datenaissance], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static login (content, cb) {
        try {            
            connection.query('SELECT * FROM utilisateur WHERE email = ? LIMIT 1', [content.email], 
            (err, result) => {
                if(err) throw err
                
                if (result.length > 0 && content.email == result[0].Email && content.password == result[0].Password) {
                    cb(result[0])
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static selectUserByID (content, cb) {
        try {
            console.log(content)
            connection.query('SELECT * FROM utilisateur WHERE ID = ? LIMIT 1', [content], 
            (err, result) => {
                if(err) throw err
                cb(result[0])
            })
        }
        catch(err){
            console.log(err)
        }
    }
    
    static emailModify (content, cb) {
        try {         
            console.log(content)   
            connection.query('UPDATE utilisateur SET Email = ? WHERE ID = ?', [content.email, content.ID], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static telModify (content, cb) {
        try {          
            console.log(content)  
            connection.query('UPDATE utilisateur SET Tel = ? WHERE ID = ?', [content.tel, content.ID], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static postalcodeModify (content, cb) {
        try {          
            console.log(content)  
            connection.query('UPDATE utilisateur SET CodePostal = ? WHERE ID = ?', [content.codepostal, content.ID], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static villeModify (content, cb) {
        try {          
            console.log(content)  
            connection.query('UPDATE utilisateur SET Ville = ? WHERE ID = ?', [content.ville, content.ID], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static adresseModify (content, cb) {
        try {          
            console.log(content)  
            connection.query('UPDATE utilisateur SET Adresse = ? WHERE ID = ?', [content.adresse, content.ID], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static paysModify (content, cb) {
        try {          
            console.log(content)  
            connection.query('UPDATE utilisateur SET Pays = ? WHERE ID = ?', [content.pays, content.ID], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static passwordModify (content, cb) {
        try {          
            console.log(content)  
            connection.query('UPDATE utilisateur SET Password = ? WHERE ID = ?', [content.password, content.ID], 
            (err, result) => {
                if(err) throw err
                cb(result)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static getScore (cb){
        try {
            connection.query('SELECT Nom,Prenom,score FROM utilisateur WHERE Admin=0 ORDER BY utilisateur.score DESC LIMIT 10',
            (err,row)=> {
                if(err) throw err
                    cb(row)
            })
        } catch (err) {
            console.log(err)
        }
    }
    
    static userScore (id,cb){
        try {
            connection.query('SELECT Nom,Prenom,score FROM utilisateur WHERE ID=?',[id],
            (err,row)=> {
                if(err) throw err
                    cb(row[0])
            })
        } catch (err) {
            console.log(err)
        }
    }

    static addUserses(content, cb){
        try {
            connection.query('UPDATE utilisateur SET isParticipant = ? WHERE ID = ?', [content.isParticipant, content.ID],
            (err,row)=> {
                if(err) throw err
                    cb(row)
            })
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = Users