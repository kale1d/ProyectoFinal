let self = {};

const searchService = require('../Services/searchService');
const queryModel = require('../Models/queries')
self.getController = async function(req,res,next){
  let name = req.query.search;
  let info =   await searchService.getList(name)
  info = new queryModel(info).getQuery();
  return res.json(info)
}
module.exports = self;
