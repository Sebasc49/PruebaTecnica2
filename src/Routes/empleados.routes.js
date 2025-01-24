import { postEmpleado, getEmpleado, putEmpleadoById, deleteEmpleadoById } from "../controllers/empleados.controller.js";
import express from 'express';

export const empleadosRouter = express.Router();

empleadosRouter.post('/crear', postEmpleado);
empleadosRouter.get('/obtener', getEmpleado);
empleadosRouter.put('/actualizar/:id', putEmpleadoById);
empleadosRouter.delete('/eliminar/:id', deleteEmpleadoById);