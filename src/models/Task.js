import { Schema, model } from "mongoose";
import mongoPag from "mongoose-paginate-v2";

const taskSchema = new Schema(
  {
    //#crear un nuevo schema
    title: {
      //#se habren llaves para poner validaciones
      type: String,
      required: true,
      trim: true, //#hace que se borren los espacios de mas
    },
    description: {
      type: String,
      trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    //#son las propiedades que queremos que mongoose use o no
    versionKey: false,
    timestamps: true, //#pone fecha de creacion y actualizacion
  }
);

taskSchema.plugin(mongoPag);
export default model("Task", taskSchema);
