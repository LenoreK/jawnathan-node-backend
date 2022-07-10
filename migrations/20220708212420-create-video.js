'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('videos', {
      video_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      video_url: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      video_name: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('videos');
  }
};