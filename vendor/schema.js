var db = connect('127.0.0.1:27017/cart');
var c;
for (c = 1; c <= 100; c++) {
  db.shop.insert({
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
store = db.shop.find();
