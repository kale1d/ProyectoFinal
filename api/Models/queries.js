const productModel = require('../Models/product');

class Query {
  constructor(info) {
    this.categories = []
    let filter = info.filters
    let maxObj = {
      name: "",
      results: 0
    }

    if (filter.length == 0) {
      const results = info.available_filters[0];
      results.values.map((val)=>{
        if(val.results>maxObj.results) {
          maxObj = {
            name: val.name,
            results: val.results,
          }
        }
      })
      this.categories.push(maxObj.name);
    }
    else {
      if(info.filters.length !== 0){
        info.filters.map((result)=>{
          return result.values.map((val)=>{
            if(val.path_from_root) {
              return val.path_from_root.map((cat)=>{
                this.categories.push(cat.name);
                return cat.name;
              });
            } else {
              return val.name
            }

          });
        });
      }
    }
    this.items = [];
    for (var i = 0; i < 4; i++) {
      this.items.push(new productModel().getProduct(info.results[i]));
    }
  }

  getQuery() {
    return(
      {
        author: new productModel().getAuthor(),
        categories: this.categories,
        items: this.items,
      })
    }
  }

  module.exports = Query;
