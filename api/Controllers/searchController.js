let self = {};

const searchService = require('../Services/searchService');
const queryModel = require('../Models/queries')
self.getController = async function(req,res,next){
  let name = req.query.search;
  //console.log(req.query)
  //console.log(req.query.search,232323)
  let info =   await searchService.getList(name)
  //console.log(info.results[0].price)
  //console.log(name,123);
  info = new queryModel(info).getQuery();
  //console.log(name,44444)
  return res.json(info)
}
module.exports = self;
//var response = {}
