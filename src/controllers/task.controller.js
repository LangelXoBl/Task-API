//#logica de las rutas de task
import Task from "../models/Task"; //#importar el modelo task
import { getPagination } from "../libs/getPagination";

export const createTask = async (req, res) => {
  try {
    const newtask = new Task({
      //#crea un nuevo objeto task
      title: req.body.title,
      description: req.body.description,
      done: req.body.done ? req.body.done : false, //#op ternarios para validar si existe o no
    });
    const taskSaved = await newtask.save(); //#guarda el objeto en mongo
    res.json(taskSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Ocurrio un error al crear la tarea",
    });
  }
};

export const findAllTasks = async (req, res) => {
  //#ver los documentos de mongo
  try {
    //#const tasks = await Task.find(); //#funcion para buscar normal
    const { page, size, title } = req.query;//#donde express guarda las consultas

    const { limit, offset, condition } = getPagination(page, size, title);
    const data = await Task.paginate(condition, { limit, offset }); //#buscar con pagination
    res.json({
      totalTasks: data.totalDocs,
      Tasks: data.docs,
      totalPages: data.totalPages,
      currentPage: data.page
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Ocurrio un problema al buscar las tareas",
    });
  }
};

export const findOneTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "la tarea fue eliminada" });
};

export const findAllDoneTasks = async (req, res) => {
  const tasks = await Task.find({ done: true });
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Task was updated" });
};
