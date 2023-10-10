import express from "express";
import morgan from "morgan";
import hbs from "hbs";
import path from 'path';
import userRouter from "./routes/userRouter.mjs"
import cors from 'cors'
import { check, validationResult } from "express-validator";

import * as url from 'url';
import { userCreate } from "./controller/userController.mjs";

const app = express();
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));


/* ap.use(morgan()) */
app.use(morgan('dev')) 
/* app.use(morgan('combined')) */
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(  __dirname,'views')))
app.use(cors())

app.set('view engine', 'hbs')
app.set('views', path.join( 'views'));



hbs.registerPartials( path.join(__dirname, 'views/partials'));

app.use('/', userRouter)

app.get('/',(req,res) =>{
    res.render('index')
})

app.post('/',[
check('nombre').isLength({min:4}),
check('email').isEmail(),
check('password').isLength({min:6}),
], 
(req, res) =>{
    const {nombre, email, password} = req.body;

    const errores = validationResult(req);
    if (!errores.isEmpty()){
         res.send(`los datos recibidos son ${nombre} - ${email} - ${password}`)
        
    }else{
        res.send(`<h1> Errores en los datos ingresados</h1>`)
        console.log(errores)
        ;
    
   
res.json({
    nombre: nombre,
    email: email,
    password: password,

})}
}) 

export default app