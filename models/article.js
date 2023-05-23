const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('article', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    libelle: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    prix: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    qtestock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imagearticle: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    scategorieid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'scategorie',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'article',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "scategorieid",
        using: "BTREE",
        fields: [
          { name: "scategorieid" },
        ]
      },
    ]
  });
};
