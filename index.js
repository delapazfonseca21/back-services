const express = require('express');
const routerApi = require('./routes')

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')


const app = express();
const puerto = 3007;

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("servidor montado con éxito en express")
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(puerto,()=>{
    console.log(`servidor corriendo en el honorable puerto ${puerto}`)
})