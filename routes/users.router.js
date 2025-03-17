const express = require('express');
const router = express.Router();


router.get("/", async (req, res)=>{
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/users`); // Espera la respuesta
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const usuarios = await response.json(); // Convierte la respuesta a JSON
        console.log(usuarios); // Muestra los usuarios en la consola
        res.json(usuarios); // Envía los usuarios como respuesta
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).send("Error al obtener los usuarios");
    }

})


module.exports = router;