const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Album, { foreignKey: 'album_id' });
    }
  }
  Task.init({
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    checked: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    album_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
