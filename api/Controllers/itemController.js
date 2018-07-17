let self = {};

const itemService = require('../Services/itemService');
const productModel = require('../Models/product');

self.getItem = async function(req,res,next){
  let name = req.params.name;
  let info = await itemService.getItem(name);
  let data = await itemService.getDescription(name);
  info.description = data.plain_text
  // console.log(info)
  info = {
    author: new productModel().getAuthor(),
    item: new productModel().getProduct(info),
  }
  // console.log(info, 'pepepepe')
 return res.json(info)
}

self.getBreadcrumb = async function (req,res,next) {
  let cat = [];
  let id = req.query.id;
  let data = await itemService.getBreadcrumb(id);
  data.path_from_root.map((result)=>{
    cat.push(result.name);
    return result.name;
  })
  // console.log(cat);

}

module.exports = self;
