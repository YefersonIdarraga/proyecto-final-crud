import Sequelize from "sequelize";
import dataBase from "../config/conexionDatabase.js";

const Producto = dataBase.define('productos', {
  nombre: {
    type: Sequelize.STRING
  },
  descripcion: {
    type: Sequelize.STRING
  },
  valor: {
    type: Sequelize.INTEGER
  },
  cantidad: {
    type: Sequelize.INTEGER
  },
  fechaVencimiento: {
    type: Sequelize.STRING
  }
})

export default Producto