'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('professores', [
      {
        nome: 'Fernando Souza',
        email: 'fernando@souza.com',
        telefone: '(48) 9 9999-9999',
        especialidade: 'Redes'
      },
      {
        nome: 'Maria Mendes',
        email: 'mariamendes@psicology.com',
        telefone: '(48) 9 9999-9999',
        especialidade: 'Psicologia'
      },
      {
        nome: 'Eduardo Ramos',
        email: 'duduramos@gmail.com',
        telefone: '(48) 9 9999-9999',
        especialidade: 'TI'
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('professores', null, {})
  }
};
