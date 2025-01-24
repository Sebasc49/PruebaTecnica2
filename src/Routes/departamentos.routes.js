// // IMPORTAR CONTROLADORES Y DEPENDENCIAS
import { postDepartamento, getDepartamento, putDepartamentoById, deleteDepartamentoById } from '../controllers/departamentos.controller.js';
import express from 'express';


export const departamentosRouter = express.Router();

departamentosRouter.post('/crear', postDepartamento);
departamentosRouter.get('/obtener', getDepartamento);
departamentosRouter.put('/actualizar/:id', putDepartamentoById);
departamentosRouter.delete('/eliminar/:id', deleteDepartamentoById);