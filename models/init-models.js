var DataTypes = require("sequelize").DataTypes;
var _article = require("./article");
var _categorie = require("./categorie");
var _login = require("./login");
var _scategorie = require("./scategorie");

function initModels(sequelize) {
  var article = _article(sequelize, DataTypes);
  var categorie = _categorie(sequelize, DataTypes);
  var login = _login(sequelize, DataTypes);
  var scategorie = _scategorie(sequelize, DataTypes);

  scategorie.belongsTo(categorie, { as: "categorie", foreignKey: "categorie_id"});
  categorie.hasMany(scategorie, { as: "scategories", foreignKey: "categorie_id"});
  article.belongsTo(scategorie, { as: "scategorie", foreignKey: "scategorieid"});
  scategorie.hasMany(article, { as: "articles", foreignKey: "scategorieid"});

  return {
    article,
    categorie,
    login,
    scategorie,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
