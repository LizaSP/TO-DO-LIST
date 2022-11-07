const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate(models) {
      this.hasMany(models.Task, { foreignKey: 'album_id' });
      this.belongsToMany(models.Tag, { through: 'AlbumTags' });
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Album.init({
    title: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};
