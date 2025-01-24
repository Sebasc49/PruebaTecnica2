import { empleadosModel } from "../models/empleados.model.js";

export const postEmpleado = async (request, response) => {
  try {
    const { Codigo, Nombre, Apellido1, Apellido2, CodigoDepartamento } =
      request.body;

    const newEmpleado = await empleadosModel.create({
      Codigo,
      Nombre,
      Apellido1,
      Apellido2,
      CodigoDepartamento,
    });

    return response.status(201).json({
      mensaje: "Empleado se ha creado correctamente",
      datos: newEmpleado,
    });
  } catch (error) {
    return response.status(400).json({
      mensaje: "Error cuando crea un empleado",
      problema: error.message,
    });
  }
};

// GET
export const getEmpleado = async (request, response) => {
  try {
    let empleados = await empleadosModel.find();

    if (empleados.length === 0) {
      return response.status(200).json({
        mensaje: "No se encuentra empleados",
      });
    }

    return response.status(200).json({
      mensaje: "Estos son los empleados encontrados",
      datos: empleados,
    });
  } catch (error) {
    return response.status(400).json({
      mensaje: "Un error al mostrar los empleados",
      problema: error || error.message,
    });
  }
};

// PUT
export const putEmpleadoById = async (request, response) => {
  try {
    let idForPut = request.params.id;
    let dataForUpdate = request.body;

    const empleadoUpdated = await empleadosModel.findByIdAndUpdate(
      idForPut,
      dataForUpdate
    );

    if (!empleadoUpdated) {
      return response.status(404).json({
        mensaje: "No se ha encontrado un  empleado para actualizar",
      });
    }

    return response.status(200).json({
      mensaje: "Se actualizo el empleado correctamente",
      datos: empleadoUpdated,
    });
  } catch (error) {
    return response.status(400).json({
      mensaje: "Hay un error al actualizar el empleado",
      problem: error || error.message,
    });
  }
};

export const deleteEmpleadoById = async (request, response) => {
  try {
    let idForDelete = request.params.id;
    await empleadosModel.findByIdAndDelete(idForDelete);
    return response.status(200).json({
      mensaje: "Empleado eliminado correctamente",
    });
  } catch (error) {
    return response.status(400).json({
      mensaje: "Hay un error al eliminar el empleado",
      problem: error || error.message,
    });
  }
};
