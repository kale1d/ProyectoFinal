let self = {};
let rest = require('restler');
/* GET home page. */

self.getItem =  function (name){
  const api = new Promise ((resolve, reject)=>{
    rest.get('https://api.mercadolibre.com/items/'+name).on('complete', function(result){
      resolve(result)
    });
  });
  return api;
};

self.getDescription = function (id) {
  const api = new Promise ((resolve, reject)=>{
    rest.get('https://api.mercadolibre.com/items/'+id+'/description').on('complete', function(result){
      resolve(result)
    });
  });
  return api;
};
self.getBreadcrumb = function (id) {
  const api = new Promise ((resolve, reject)=>{
    rest.get('https://api.mercadolibre.com/categories/'+id).on('complete', function(result){
      resolve(result)
    });
  });
  return api;
};
module.exports = self;
