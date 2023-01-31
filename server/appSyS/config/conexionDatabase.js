import { Sequelize } from "sequelize";


const dataBase = new Sequelize('sys', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: "mysql",
  define: {
    timestamps: true
  }
})

export default dataBase