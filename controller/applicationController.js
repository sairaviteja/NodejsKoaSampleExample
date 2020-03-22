module.exports = {
    async create(ctx){
        try{
                const candidate = await ctx.db.candidate.create({
                                    fName:ctx.request.body.fName,
                                    lName:ctx.request.body.lName,
                                    Email:ctx.request.body.Email
                                });

                          ctx.body = await ctx.db.application.create({
                                        jobID:ctx.request.body.jobId,
                                        candidateId:candidate.id
                          })          
        }
        catch(err){
            ctx.throw(500,err);
        }
    }
}