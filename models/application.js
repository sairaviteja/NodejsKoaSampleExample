'use strict';
module.exports = (sequelize, DataTypes) => {
  const application = sequelize.define('application', {
    statusId: DataTypes.INTEGER
  }, {});
  application.associate = function(models) {
    // associations can be defined here
  };
  return application;
};