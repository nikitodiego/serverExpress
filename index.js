
//Importar archivo 
let modulo = require("./manejoArchivos")
const prod = new modulo.nombreExportacion("./productos.txt");

//Servidor con express
const express = require ('express');
const app = express();


//Peticiones
app.get('/productos', async (req,res) => {
    const a = await prod.getAll();
    res.send(a);
});

app.get('/productoRandom', async (req,res) => {
    const a = await prod.random();
    res.send(a);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});



