'use strict';
module.exports = (sequelize, DataTypes) => {
  const companies = sequelize.define('companies', {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING
  });
  companies.associate = function(models) {
    // One to Many relation 
    companies.hasMany(models.job)
  };
  return companies;
};