//#archivo de configuracion
import express from "express";
import morgan from "morgan";
import cors from "cors";
import TasksRoutes from "./routes/tasks.routes";

const app = express();
//*Settings
app.set("port", process.env.PORT || 3000);

//*midslewares
app.use(cors());
app.use(morgan("dev")); //#mostrar las peticiones del servidor
app.use(express.json()); //#poder usar objetos json
app.use(express.urlencoded({ extended: false })); //#poder resivir petiocnes del forms HTML

//*Routes
app.get("/", (req, res) => {
  //#principal
  res.json({ message: "Welcome to my application" });
});

app.use("/api/tasks", TasksRoutes); //#rutas de tasks

export default app;
