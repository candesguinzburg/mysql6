/* conectamos a la data base */
/* levantamos el servidor */
import app from "./app.mjs"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 8080;
/* import './database/conexion.mjs' */
const server = app.listen(PORT, () =>{
    console.log(`server run in port http://localhost:${PORT}`)
})


server.on('error', (err) => {
    console.log(`error en servidor ${err}`)
})


