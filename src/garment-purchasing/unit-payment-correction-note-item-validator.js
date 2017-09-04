require("should");

var validateProduct = require('../master/product-validator');
var validateUom = require('../master/uom-validator');
var validateCurrency = require('../master/currency-validator');

module.exports = function (data) {
    data.should.have.property('purchaseOrderExternalId');
    data.purchaseOrderId.should.instanceof(Object);

    data.product.should.have.property('purchaseOrderExternalNo');
    data.purchaseOrderExternalNo.should.instanceOf(String);

    data.should.have.property('purchaseRequestId');
    data.purchaseRequestId.should.instanceof(Object);

    data.product.should.have.property('purchaseRequestNo');
    data.purchaseRequestNo.should.instanceOf(String);

    data.should.have.property('productId');
    data.productId.should.instanceof(Object);
    
    data.should.have.property('product');
    data.product.should.instanceof(Object);
    validateProduct(data.product);

    data.should.have.property('quantity');
    data.quantity.should.instanceof(Number);

    data.should.have.property('uomId');
    data.uomId.should.instanceof(Object);

    data.should.have.property('uom');
    data.uom.should.instanceof(Object);
    validateUom(data.uom);

    data.should.have.property('pricePerUnit');
    data.pricePerUnit.should.instanceOf(Number);

    data.should.have.property('priceTotal');
    data.priceTotal.should.instanceof(Number);

    data.should.have.property('currency');
    data.currency.should.instanceof(Object);
    validateCurrency(data.currency);

    data.should.have.property('currencyRate');
    data.currencyRate.should.instanceOf(Number);
};