require("should");
var validateProduct = require('../master/product-validator');
var validateUom = require('../master/uom-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('uom');
    data.uom.should.instanceof(Object);
    validateUom(data.uom);
     
    data.should.have.property('productId');
    data.productId.should.instanceof(Object);

    data.should.have.property('product');
    data.product.should.instanceof(Object);
    validateProduct(data.product);

    data.should.have.property('quantity');
    data.quantity.should.instanceof(Number);

    data.should.have.property('remark');
    data.remark.should.instanceOf(String);
    
    data.should.have.property('purchaseOrders');
    data.purchaseOrders.should.instanceof(Array); 
}