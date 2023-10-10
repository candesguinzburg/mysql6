 import {  validationResult } from "express-validator";
 import database from "../database/conexion.mjs"
 
  const userLogin =(req, res) =>{
    res.render('login')}


 const userCreate = (req, res) =>{
        const { nombre, email, password} = req.body;
    
        const errores = validationResult(req);

        if (!errores.isEmpty()) {
            return res.send(`<h1> Errores en los datos ingresados</h1>`);
        }
    
        console.log(`Los datos recibidos son ${nombre} - ${email} - ${password}`);

        const sql = 'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)';
        const values = [nombre, email, password];
        
        database.query( sql, values, (err, result)=>{
            if (err) throw err;
            console.log('Usuario insertado correctamente en la base de datos');
            
            res.json({
                nombre: nombre,
                email: email,
                password: password,
                
            })
            
        })
    }

export{
     userCreate,
     userLogin
}