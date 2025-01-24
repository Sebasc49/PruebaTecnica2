
import mongoose from "mongoose";

const empleadosSchema = new mongoose.Schema(
    {
        Codigo:{type: Number, required: true},
        Nombre:{type: String, required: true},
        Apellido1:{type: String, required: true},
        Apellido2:{type: String},
        CodigoDepartamento:{type: mongoose.Schema.Types.ObjectId, ref:'departamento'},
    }
)

export const empleadosModel = mongoose.model('empleados', empleadosSchema);