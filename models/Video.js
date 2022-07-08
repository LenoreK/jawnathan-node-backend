'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class video extends Model {

    static associate(models) {

    }
  }
    video.init({
        video_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        video_url: {
            type: DataTypes.string,
            allowNull: false
        },
        video_name: {
            type: DataTypes.string,
            allowNull: false
        }
      }, {
        sequelize,
        modelName: 'Video',
        tableName: 'video',
        timestamps: true
      })
    
      return video
  };