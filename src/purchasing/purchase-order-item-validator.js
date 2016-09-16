require("should");
var validateProduct = require('../master/product-validator');
var validateUom = require('../master/uom-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('realizationQuantity');
    data.realizationQuantity.should.instanceOf(Number);
    
    data.should.have.property('pricePerDealUnit');
    data.pricePerDealUnit.should.instanceOf(Number);

    data.should.have.property('remark');
    data.remark.should.instanceOf(String);

    data.should.have.property('dealQuantity');
    data.dealQuantity.should.instanceOf(Number);

    data.should.have.property('dealUom');
    data.dealUom.should.instanceOf(Object);
    validateUom(data.dealUom);

    data.should.have.property('defaultQuantity');
    data.defaultQuantity.should.instanceOf(Number);

    data.should.have.property('defaultUom');
    data.defaultUom.should.instanceOf(Object);
    validateUom(data.defaultUom);
    
    data.should.have.property('product');
    data.product.should.instanceof(Object);
    validateProduct(data.product);
    
}