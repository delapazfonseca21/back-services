const express = require('express');
const routerApi = require('./routes')


const app = express();
const puerto = 3007;

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("servidor montado con éxito en express")
})

app.listen(puerto,()=>{
    console.log(`servidor corriendo en el honorable puerto ${puerto}`)
})

routerApi(app);