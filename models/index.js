'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';

// var config    = require(__dirname + '../../config\config.json')[env];
console.log("dirname=" + __dirname);

var config    = require(__dirname + "./../config/config.json")[env];
console.log(config);

var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    console.log("hey" + path.join(__dirname, file));
    var model = sequelize['import'](path.join(__dirname, file));
    console.log("hi" + model.toString());
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Definition.belongsTo(db.Entries);
db.Entries.hasMany(db.Definition);
module.exports = db;
