class Product {
  constructor(){
    this.id = "";
    this.title = "";
    this.currency = "";
    this.amount = "";
    this.decimal = "";
    this.picture = "";
    this.condition = "";
    this.free_shipping = "";
    this.sold_quantity = "";
    this.city = "";
    this.description = "";
    this.name = "Denise";
    this.lastname ="Neustadt";
  }
  getAuthor(){
    return({
      name: this.name,
      lastname: this.lastname,
      })
    }

  getBreadcrumb(data){
    let cat = [];

    data.map((result)=>{
      cat.push(result.name);
    })
    return cat
  }

  getImg(info){
    if (info.pictures){
      return this.picture = info.pictures[0].secure_url;
    }
    else {
      return this.picture = info.thumbnail;
    }
  }

  getDecimal(info) {
    let num=0
    num = ((info.price - this.amount)*100);
    num = num.toFixed(0);
    if (num == 0) {
      this.decimal = '00'
      return this.decimal;
    } else {
      this.decimal = num;
      return this.decimal
    }
  }

  getProduct(info) {
    if (info) {
      this.id = info.id;
      this.title = info.title;
      this.currency=info.currency_id;
      this.amount = Math.floor(info.price);
      this.decimal =this.getDecimal(info);
      this.picture = this.getImg(info);
      this.condition = info.condition;
      this.free_shipping = info.shipping.free_shipping;
      this.sold_quantity = info.sold_quantity;
      this.city = info.seller_address.city.name;
      this.description = info.description;
      return(
        {
          id: this.id,
          title: this.title,
          price: {
            currency: this.currency,
            amount: this.amount,
            decimals: this.decimal,
          },
          picture: this.picture,
          condition: this.condition,
          free_shipping: this.free_shipping,
          sold_quantity: this.sold_quantity,
          description: this.description,
          city : this.city,
        }
      )
    }
    else {
      console.log('soy un error')
    }
  }
}
module.exports = Product;
