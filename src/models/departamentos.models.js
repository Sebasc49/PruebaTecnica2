import mongoose from "mongoose";

const departamentoSchema = new mongoose.Schema({
  Nombre: { type: String, required: true },
  CodigoDepartamento: { type: Number, required: true },
});

export const departamentoModel = mongoose.model(
  "departamento",
  departamentoSchema
);
