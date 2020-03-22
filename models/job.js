'use strict';
module.exports = (sequelize, DataTypes) => {
  const job = sequelize.define('job', {
    title: DataTypes.STRING
  });
  job.associate = function(models) {
    //adding relationship between job and company
    //Many to One relationship
    job.belongsTo(models.companies,{
       foreignKey:{
          allowNull:false
       }
    });
    //Many to Many relation
    job.belongsToMany(models.cadidate,{
      //when ever we are creating M-M relationship we need to have a 3 Model via "through" so it holds job and candidate Id's
        through:'Application'
    });
  };
  return job;
};