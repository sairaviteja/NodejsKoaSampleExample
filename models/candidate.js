'use strict';
module.exports = (sequelize, DataTypes) => {
  const candidate = sequelize.define('candidate', {
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    Email: DataTypes.STRING
  });
  candidate.associate = function(models) {
    //Many to Many relationship
     candidate.belongsToMany(models.job,{
         through:'Application'
     })
  };
  return candidate;
};