let self = {};

const searchService = require('../Services/searchService');
const queryModel = require('../Models/queries')
self.getController = async function(req,res,next){
  let name = req.query.search;
  try {
    let info =   await searchService.getList(name)
    if (info.results.length > 0) {
      console.log(info)
      info = new queryModel(info).getQuery();
      return res.json(info)

    } else {
      console.log(2323)
      return res.sendStatus(404)

    }
  }catch(error) {
    console.log(error)
  }

}
module.exports = self;
