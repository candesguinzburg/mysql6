import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config()

const connection = mysql.createConnection({
    host: process.env.HOSTDATA,
    user: process.env.USERDATA,
    password: process.env.PASSDATA,
    port: process.env.PORTDATA,
    database: process.env.DATABASE
})

connection.connect((err)=> {
    if(err) throw err;
     console.log(`conexion a la base de datos correcta`)
      

});

export default connection;