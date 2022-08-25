//#Carga las variables de entorno y las exporta
import { config } from "dotenv";
config();

export default{
    mongodbURL: process.env.MONGODB_URI
};