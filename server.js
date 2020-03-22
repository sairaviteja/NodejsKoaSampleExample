var koa = require('koa');
var bodyParser = require('koa-parser');
var app = new koa();
var PORT = 4000;

var router = require('./rout/api');
var db = require('./models/index');


app.use(bodyParser());
app.use(router.routes());   


// to have a direct sync with MYSQL database 
db.sequelize.sync()
        .then(() => {
              console.log(`model synced `);
        })
        .catch((err)=>{
              console.log(`the error is ${err}`);  
        })

// adding  db to global Context so by using  ctx object we can access the Db models and it's methods.
app.context.db = db;
/* 
router.get('/', ctx => {
    ctx.body = "from main method";
}) */

app.listen(PORT,() => { console.log(`listejing to port ${PORT}`)
});
