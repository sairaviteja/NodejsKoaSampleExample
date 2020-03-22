module.exports = {
    async create(ctx){

        try{
            ctx.db.companies.create({
                name:ctx.request.body.name,
                city:ctx.request.body.city,
                address:ctx.request.body.address,
            })   
        }
        catch(err){
            ctx.throw(400,err);
        }          
    },

   async findAllCompanies(ctx){
            try{
                     ctx.body = await ctx.db.companies.findAll({
                         // InOrder to search all jobs for each individual companies
                         includes:[{
                                model:ctx.db.job
                         }]
                     });
            }
            catch(err){
                ctx.throw(400,err);
            }
   },

   async findOneCompany(ctx){
        try{
                const company = await ctx.db.companies.findOne({
                    id:ctx.params.id
                })
                if(!company)
                {
                    ctx.throw(500,'invalid company id. Please enter a valid company id ');
                }

                ctx.body = company;
        }
        catch(err){
            ctx.throw(500,err);
        }
   },

   async deleteCompanyById(ctx){
             try{
                   const result = await ctx.db.companies.destroy({
                           where:{
                               id:ctx.params.id
                           }
                      })
                      
                      result === 0 ? ctx.throw(500,'No company with the following id'): ctx.body = `successfully delete the company with id ${ctx.params.id}`;
             }
             catch(err){
                 ctx.throw(500,err);
             }
   },

   async updateCompanyById(ctx){
       try{
            const result = await ctx.db.companies.update({
                name:ctx.request.body.name,
                city:ctx.request.body.city,
                address:ctx.request.body.address,
            },{
                where:{
                    id:ctx.params.id
                }
            })
            result === 0 ? ctx.throw(500,'Unable to update company  with following id'): ctx.body = `successfully udpated  the company with id ${ctx.params.id}`;  
       }
       catch(err){
           ctx.throw(5000,err);
       }
   }
}