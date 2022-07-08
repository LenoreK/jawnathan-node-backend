'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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