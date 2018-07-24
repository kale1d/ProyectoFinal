let self = {};
let rest = require('restler');
/* GET home page. */

self.getList =  function (name){
  const api = new Promise ((resolve, reject)=>{
    rest.get('https://api.mercadolibre.com/sites/MLA/search?q='+name+'&limit=4').on('complete', function(result){
      console.log(result)
      resolve(result)
    }).on('fail', function(err) {
      console.log(err)
      reject(err)
    });
  });
  return api;

}
module.exports = self;
