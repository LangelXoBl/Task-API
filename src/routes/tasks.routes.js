//#archivo de rutas
import { Router } from "express";
import * as taskCtrl from "../controllers/task.controller"; //#importa el controllador

const router = Router();
//*Crear task
router.post("/", taskCtrl.createTask);
//*ver tasks
router.get("/", taskCtrl.findAllTasks);
//*ver task hechas
router.get("/done", taskCtrl.findAllDoneTasks); //#esta ruta debe ir antes de "find one" porque hacen conflicto por el parametro que recibe
//*buscar un task
router.get("/:id", taskCtrl.findOneTask);
//*eliminar un task
router.delete("/:id", taskCtrl.deleteTask);

router.put("/:id", taskCtrl.updateTask);

export default router;
