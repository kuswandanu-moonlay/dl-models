require("should");
var validateProduct = require('../master/product-validator');
var validateSupplier = require('../master/supplier-validator');
var validateUom = require('../master/uom-validator');
var validateCurrency = require('../master/currency-validator');

module.exports = function (data) {

    data.should.have.property('purchaseOrderId');
    data.purchaseOrderId.should.instanceOf(Object);

    data.should.have.property('purchaseOrderNo');
    data.purchaseOrderNo.should.instanceOf(String);

    data.should.have.property('purchaseRequestId');
    data.purchaseRequestId.should.instanceOf(Object);

    data.should.have.property('purchaseRequestNo');
    data.purchaseRequestNo.should.instanceOf(String);

    data.should.have.property('productId');
    data.productId.should.instanceOf(Object);

    data.should.have.property('product');
    data.product.should.instanceOf(Object);

    data.product.should.have.property('code');
    data.product.code.should.instanceOf(String);

    data.product.should.have.property('name');
    data.product.name.should.instanceOf(String);

    data.should.have.property('purchaseOrderQuantity');
    data.purchaseOrderQuantity.should.instanceOf(Number);

    data.should.have.property('purchaseOrderUom');
    data.purchaseOrderUom.should.instanceOf(Object);

    data.purchaseOrderUom.should.have.property('unit');
    data.purchaseOrderUom.unit.should.instanceOf(String);

    data.should.have.property('deliveredQuantity');
    data.deliveredQuantity.should.instanceOf(Number);

    data.should.have.property('realizationQuantity');
    data.realizationQuantity.should.instanceOf(Array);

    data.should.have.property('remainsQuantity');
    data.remainsQuantity.should.instanceOf(Number);

    data.should.have.property('pricePerDealUnit');
    data.pricePerDealUnit.should.instanceOf(Number);

    data.should.have.property('currency');
    data.currency.should.instanceof(Object);
    validateCurrency(data.currency);

    data.should.have.property('remark');
    data.remark.should.instanceOf(String);
};