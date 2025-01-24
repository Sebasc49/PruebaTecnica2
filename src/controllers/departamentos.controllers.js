import { departamentoModel } from "../models/departamentos.model.js";

export const postDepartamento = async (request, response) => {
  try {
    const { Nombre, CodigoDepartamento } = request.body;

    const newDepartamento = await departamentoModel.create({
      Nombre,
      CodigoDepartamento,
    });

    return response.status(201).json({
      mensaje: "Departamento creado correctamente",
      datos: newDepartamento,
    });
  } catch (error) {
    return response.status(400).json({
      mensaje: "Hay un error al crear un departamento",
      problema: error.message,
    });
  }
};


export const getDepartamento = async (request, response) => {
  try {
    let departamento = await departamentoModel.find();

    if (departamento.length === 0) {
      return response.status(200).json({
        mensaje: "No se encuentra Departamentos",
      });
    }

    return response.status(200).json({
      mensaje: "Aqui estan los departamentos encontrados",
      datos: departamento,
    });
  } catch (error) {
    return response.status(400).json({
      mensaje: "Error cuando muestra  los departamentos",
      problema: error || error.message,
    });
  }
};

// PUT
export const putDepartamentoById = async (request, response) => {
  try {
    let idForPut = request.params.id; 
    let dataForUpdate = request.body; 

    const departamentoUpdated = await departamentoModel.findByIdAndUpdate(
      idForPut,
      dataForUpdate
    );

    if (!departamentoUpdated) {
      return response.status(404).json({
        mensaje: "No se encontro un departamento para actualizar",
      });
    }

    return response.status(200).json({
      mensaje: "Se actualizo el departamento correctamente",
      datos: departamentoUpdated,
    });
  } catch (error) {
    return response.status(400).json({
      mensaje: "Hay un error al actualizar el departamento",
      problem: error || error.message,
    });
  }
};


export const deleteDepartamentoById = async (request, response) => {
  try {
    let idForDelete = request.params.id;
    await departamentoModel.findByIdAndDelete(idForDelete);
    return response.status(200).json({
      mensaje: "Departamento eliminado correctamente",
    });
  } catch (error) {
    return response.status(400).json({
      mensaje: "Hay un error al eliminar el departamento",
      problem: error || error.message,
    });
  }
};
