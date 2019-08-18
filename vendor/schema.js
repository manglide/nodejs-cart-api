// Using a local Mongo Instance
// Connection String is localhost:27017 provided Mongo is Running on Port 27017
// var db = connect('mongodb+srv://desire:OI9PR1QIRDYBiYPB@brandsng-k5x55.mongodb.net/gas?retryWrites=true&w=majority');
var PORT = 27017
var DB = cart
var db = connect('mongodb://localhost:' + PORT + '/' + DB);
var c;
for (c = 1; c <= 100; c++) {
  db.cart.insert({
     status:'active',
     quantity: c,
     subtotal: 5300,
     tax: 80,
     discount: 14,
     total: 4626.80,
     products: [
  	{
  		_id: c,
  		sku: "747743943",
  		mpn: "531252",
  		title: "Samsung DVD Player",
  		price: "4380",
  		category: "Electronics",
  		inStock: true
  	},{
  		_id: c*2,
  		sku: "665656943",
  		mpn: "88832",
  		title: "iPhone XS",
  		price: "1000",
  		category: "Mobile Phones",
  		inStock: true
  	}
     ]
   });
}

//set a reference to all documents in the database
store = db.cart.find();
