'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cursos', [
      {
        nome: 'java',
        online: true,
        descricao: 'Curso para inciantes, requisitos: Motivação',
        duracao: '440'
      },
      {
        nome: 'python',
        descricao: 'Comece agora python do zero!',
        duracao: '220'
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cursos', null, {})
  }
};
