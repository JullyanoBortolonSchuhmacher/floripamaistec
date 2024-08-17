const { DataTypes } = require('sequelize')
const sequelize = require('../database/connection')

const Professor = sequelize.define('professores', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  especialidade: {
    type: DataTypes.STRING,
  }
}, {
  timestamps: false
})

module.exports = Professor
