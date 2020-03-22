var Router = require('koa-router');
var router = new Router();

var {
    companyController,
    jobController,
    applicationController
} = require('../controller');

// company controller
router.post('/company',companyController.create);
router.get('/company',companyController.findAllCompanies);
router.get('/company/:id',companyController.findOneCompany);
router.delete('/company/:id',companyController.deleteCompanyById);
router.put('/company/:id',companyController.updateCompanyById);

// job controller
router.post('/jobs',jobController.create);
router.get('/findAllJobs',jobController.findAllJob);

//applicaion controller
router.post('/apply',applicationController.create);







module.exports = router;