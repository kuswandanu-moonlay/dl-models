require("should");
var validateProduct = require('../master/product-validator');
var validateUom = require('../master/uom-validator');
var validateCurrency = require('../master/currency-validator');
module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('poNo');
    data.poNo.should.be.String();

    data.should.have.property('poId');
    data.poId.should.instanceof(Object);

    data.should.have.property('prNo');
    data.prNo.should.be.String();

    data.should.have.property('prId');
    data.prId.should.instanceof(Object);

    data.should.have.property('prRefNo');
    data.prRefNo.should.be.String();

    data.should.have.property('roNo');
    data.roNo.should.be.String();

    data.should.have.property('productId');
    data.productId.should.instanceof(Object);

    data.should.have.property('product');
    data.product.should.instanceof(Object);
    validateProduct(data.product);

    data.should.have.property('defaultQuantity');
    data.defaultQuantity.should.instanceOf(Number);

    data.should.have.property('defaultUom');
    data.defaultUom.should.instanceOf(Object);
    validateUom(data.defaultUom);

    data.should.have.property('dealQuantity');
    data.dealQuantity.should.instanceOf(Number);

    data.should.have.property('dealUom');
    data.dealUom.should.instanceOf(Object);
    validateUom(data.dealUom);

    data.should.have.property('realizationQuantity');
    data.realizationQuantity.should.instanceOf(Number);

    data.should.have.property('pricePerDealUnit');
    data.pricePerDealUnit.should.instanceOf(Number);

    data.should.have.property('priceBeforeTax');
    data.priceBeforeTax.should.instanceOf(Number);

    data.should.have.property('budgetPrice');
    data.budgetPrice.should.instanceOf(Number);

    data.should.have.property('conversion');
    data.conversion.should.instanceOf(Number);

    data.should.have.property('isClosed');
    data.isClosed.should.instanceOf(Boolean);

    data.should.have.property('useIncomeTax');
    data.useIncomeTax.should.instanceOf(Boolean);
};