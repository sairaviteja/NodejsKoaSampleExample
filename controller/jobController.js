module.exports= {
    async create(ctx){
           try{
            if(!ctx.request.body.title){
                ctx.throw(400, ' please Enter Job role.')
            }
            if(!ctx.request.body.companyId){
                ctx.throw(400, ' please Enter companyID.')
            }
    
            ctx.body =await ctx.db.job.create({
                title:ctx.request.body.title,
                companyId:ctx.request.body.companyId
            })
           }
           catch(err){
               ctx.throw(500,err);
           }
    },

    async findAllJob(ctx){
               ctx.body = await ctx.db.job.findAll({
                    includes:[{
                        models:ctx.db.candidate 
                    }]
               }) 
    }
}