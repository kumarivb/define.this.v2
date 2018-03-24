var Entries = require("./entry.js");
module.exports = function(sequelize, DataTypes) {
 	var Definition = sequelize.define("Definition", {
        id: {
             type: DataTypes.INTEGER,
             autoIncrement: true,
             primaryKey: true
         },
 		definition: {
 			type: DataTypes.STRING(420),
 			allowNull: false
 		},
 		userId: {
 			type: DataTypes.INTEGER,
 			allowNull: false
 		},
 
 //		entryId: {
 //			type: DataTypes.INTEGER,
 // 		references: {
 //				model: Entries,
// 				key: 'id'
// 			},
// 			allowNull: false
// 		},
 		netRating: {
 			type: DataTypes.INTEGER,
 			allowNull: false
 		},
 		context: {
 			type: DataTypes.STRING(420),
 			allowNull: true
 		},
 		contextLink: {
 			type: DataTypes.STRING(200),
 			allowNull: true
 		}
 	});
 	return Definition;
 };

  