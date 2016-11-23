require("should");
var validateUsterClassification = require('./uster-classification-validator');
var validateProduct = require('./product-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('productId');
    data.productId.should.instanceof(Object);

    data.should.have.property('product');
    data.product.should.instanceof(Object);
    validateProduct(data.product);

    data.should.have.property('classifications');
    data.classifications.should.instanceOf(Array);
    for (var item of data.classifications) {
        validateUsterClassification(item);
    }
}