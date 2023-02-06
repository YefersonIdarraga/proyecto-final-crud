import Sequelize from "sequelize";
import dataBase from "../config/conexionDatabase.js";

const Cliente = dataBase.define('clientes', {
  documento: {
    type: Sequelize.INTEGER
  },
  nombre: {
    type: Sequelize.STRING
  },
  apellido: {
    type: Sequelize.STRING
  },
  telefono: {
    type: Sequelize.INTEGER
  },
  correo: {
    type: Sequelize.STRING
  },
  barrio: {
    type: Sequelize.STRING
  },
  direccion: {
    type: Sequelize.STRING
  },
  foto: {
    type: Sequelize.STRING
  }
})

export default Cliente