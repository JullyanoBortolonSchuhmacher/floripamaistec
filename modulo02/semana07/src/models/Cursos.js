const { DataTypes } = require('sequelize')
const sequelize = require('../database/connection')

const Curso = sequelize.define('cursos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  online: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duracao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false
})

module.exports = Curso
