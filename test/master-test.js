var validate = require('../src/validator').master;

it("#01. Buyer should valid", function() {
    var Buyer = require('../src/master/buyer');
    validate.buyer(new Buyer());
})

it("#02. Product should valid", function () {
    var Product = require('../src/master/product');
    validate.product(new Product());
}) 
 
it("#03. Suppliers should valid", function(){
    var Supplier = require('../src/master/supplier');
    validate.supplier(new Supplier());
})

it("#04. uom should valid", function () {
    var uom = require('../src/master/uom');
    validate.uom(new uom());
})

it("#05. Unit should valid", function(){
    var Unit = require('../src/master/unit'); 
    validate.unit(new Unit());
})

it("#06. Category should valid", function(){
    var Category = require('../src/master/category'); 
    validate.category(new Category());
})
 