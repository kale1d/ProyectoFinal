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
    this.description = "";
    this.name = "Denise";
    this.lastname ="Neustadt"
   }
  getAuthor(){
    return(
      {
      name: this.name,
      lastname: this.lastname,
      }
    )
  }
  getProduct(info) {
    // console.log(info)
    // console.log(info.thumbnail)
    this.id = info.id;
    this.title = info.title;
    this.currency=info.currency_id;
    this.amount = Math.floor(info.price);
    this.decimal =  ((info.price - this.amount)*100);
    this.picture = info.thumbnail;
    this.condition = info.condition;
    this.free_shipping = info.shipping.free_shipping;
    this.sold_quantity = info.sold_quantity;
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
      }
    )
  }
}
module.exports = Product;
