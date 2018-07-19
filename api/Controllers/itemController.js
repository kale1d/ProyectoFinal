let self = {};

const itemService = require('../Services/itemService');
const productModel = require('../Models/product');

self.getItem = async function(req,res,next){
  let name = req.params.name;
  let info = await itemService.getItem(name);
  let data = await itemService.getDescription(name);
  let bread = await itemService.getBreadcrumb(info.category_id)

  info.description = data.plain_text
  //console.log(info,345);
  //console.log(name,123);
  info = {
    author: new productModel().getAuthor(),
    item: new productModel().getProduct(info),
    categories: new productModel().getBreadcrumb(bread.path_from_root)
  }
  // console.log(info, 'pepepepe')
 return res.json(info)
}

self.getBreadcrumb = function (data) {
  let cat = [];

  data.map((result)=>{
    cat.push(result.name);
    return result.name;
  })
  // console.log(cat);

}

module.exports = self;
