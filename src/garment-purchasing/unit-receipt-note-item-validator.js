require("should");
var validateProduct = require('../master/product-validator');
var validateUom = require('../master/uom-validator');
var validateCurrency = require('../master/currency-validator');

module.exports = function (data) {
    data.should.have.property('product');
    data.product.should.instanceof(Object);
    // validateProduct(data.product);
    data.should.have.property('product');
    data.product.should.instanceof(Object);

    data.product.should.have.property('code');
    data.product.code.should.instanceOf(String);

    data.product.should.have.property('name');
    data.product.name.should.instanceOf(String);

    data.should.have.property('deliveredQuantity');
    data.deliveredQuantity.should.instanceOf(Number);

    data.should.have.property('deliveredUom');
    data.deliveredUom.should.instanceOf(Object);
    // validateUom(data.deliveredUom);
    data.deliveredUom.should.have.property('unit');
    data.deliveredUom.unit.should.instanceOf(String);

    data.should.have.property('purchaseOrderQuantity');
    data.purchaseOrderQuantity.should.instanceOf(Number);

    data.should.have.property('pricePerDealUnit');
    data.pricePerDealUnit.should.instanceOf(Number);

    data.should.have.property('currency');
    data.currency.should.instanceof(Object);
    // validateCurrency(data.currency);
    data.currency.should.have.property('code');
    data.currency.code.should.instanceOf(String);

    data.currency.should.have.property('symbol');
    data.currency.symbol.should.instanceOf(String);

    data.currency.should.have.property('rate');
    data.currency.rate.should.instanceOf(Number);

    data.should.have.property('categoryId');
    data.categoryId.should.instanceof(Object);

    data.should.have.property('category');
    data.category.should.instanceof(Object);

    data.should.have.property('purchaseOrderId');
    data.purchaseOrderId.should.instanceOf(Object);

    data.should.have.property('purchaseOrderNo');
    data.purchaseOrderNo.should.instanceOf(String);

    data.should.have.property('purchaseRequestId');
    data.purchaseRequestId.should.instanceOf(Object);

    data.should.have.property('purchaseRequestNo');
    data.purchaseRequestNo.should.instanceOf(String);

    data.should.have.property('purchaseRequestRefNo');
    data.purchaseRequestRefNo.should.instanceOf(String);

    data.should.have.property('correction');
    data.correction.should.instanceOf(Array);

    data.should.have.property('remark');
    data.remark.should.instanceOf(String);

    data.should.have.property('quantityConversion');
    data.quantityConversion.should.instanceOf(Number);

    data.should.have.property('conversion');
    data.conversion.should.instanceOf(Number);

    data.should.have.property('uomConversion');
    data.uomConversion.should.instanceOf(Object);

    data.uomConversion.should.have.property('unit');
    data.uomConversion.unit.should.instanceOf(String);

    data.should.have.property('buyer');
    data.buyer.should.instanceof(Object);
};