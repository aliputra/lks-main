const indexController  = require('../controllers/indexController')

module.exports = (app) => {
    
    // app.route('/')
    //     .get(indexController.index)
    
    // app.route('/quiz')
    //     .get(indexController.getAllData)    
        
    // app.route('/init')
    //     .get(indexController.create)

    // app.route('/flush')
    //     .get(indexController.flush)

    app.route('/exam')
        .get(indexController.index)
    
    app.route('/exam/quiz')
        .get(indexController.getAllData)    
        
    app.route('/apiv2/quiz')
        .get(indexController.getAllData)    
    
    app.route('/exam/init')
        .get(indexController.create)

    app.route('/exam/flush')
        .get(indexController.flush)

}