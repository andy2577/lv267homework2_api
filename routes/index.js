var express = require('express');
var router = express.Router();
// var data = require('../data');
var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.displayAll);
router.get('/:id', indexController.displaySelected);

/* POST request to Save new Quote */
router.post('/', indexController.seveQuote);

/* PUT request to Update Quote */
router.put('/', indexController.updateQuote);

/* DELETE request to Delete Quote */
router.delete('/', indexController.deleteQuote);

module.exports = router;
