require("should");
var validateProduct = require('./product-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);
     
    data.should.have.property('productId');
    data.productId.should.instanceof(Object);

    data.should.have.property('product');
    data.product.should.instanceof(Object);
    validateProduct(data.product);

    data.should.have.property('rpm');
    data.rpm.should.instanceof(Number);

    data.should.have.property('spindle');
    data.spindle.should.instanceof(Number);

    data.should.have.property('tpi');
    data.tpi.should.instanceof(Number);
};