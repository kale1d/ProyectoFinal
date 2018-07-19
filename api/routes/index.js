let express = require('express');
let router = express.Router();
let rest = require('restler');

const searchController = require('../Controllers/searchController');
const itemController = require('../Controllers/itemController');
/* GET home page. */
router.get('/api/items', searchController.getController);
router.get('/api/items/:name', itemController.getItem);
router.get('/categories/:id', itemController.getBreadcrumb);
//router.get('/description/:id', itemController.getDescription);

module.exports = router;
