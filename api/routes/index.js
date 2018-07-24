let express = require('express');
let router = express.Router();

const searchController = require('../Controllers/searchController');
const itemController = require('../Controllers/itemController');
/* GET home page. */
router.get('/api/items', searchController.getController);
router.get('/api/items/:name', itemController.getItem);
router.get('/categories/:id', itemController.getBreadcrumb);

module.exports = router;
