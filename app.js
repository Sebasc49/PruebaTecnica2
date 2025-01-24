import express from 'express';
import dotenv from 'dotenv';
import { connectionMongo } from './src/config/db.js';
import departamentoRouter from './src/routes/departamentos.routes.js';
import empleadoRouter from './src/routes/empleados.routes.js';


dotenv.config();
connectionMongo();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/empleados', empleadoRouter);  
app.use('/departamentos', departamentoRouter); 

app.listen(port, () => {
    console.log(`El servidor se está ejecutando en el puerto ${port}`);
});


