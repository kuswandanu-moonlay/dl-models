require("should");
var validateProduct = require('../master/product-validator');
var validateUom = require('../master/uom-validator');

module.exports = function (data) {
    data.should.have.property('product');
    data.product.should.instanceof(Object);
    validateProduct(data.product);

    data.should.have.property('deliveredQuantity');
    data.deliveredQuantity.should.instanceOf(Number);

    data.should.have.property('deliveredUom');
    data.deliveredUom.should.instanceOf(Object);
    validateUom(data.deliveredUom);
}