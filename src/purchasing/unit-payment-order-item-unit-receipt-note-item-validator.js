require("should");
var validatePurchaseOrder = require('./unit-payment-order-item-purchase-order-validator');

module.exports = function (data) {
    data.should.have.property('product');
    data.product.should.instanceof(Object);

    data.product.should.have.property('code');
    data.product.code.should.instanceOf(String);

    data.product.should.have.property('name');
    data.product.name.should.instanceOf(String);

    data.should.have.property('deliveredQuantity');
    data.deliveredQuantity.should.instanceof(Number);

    data.should.have.property('deliveredUom');
    data.deliveredUom.should.instanceof(Object);

    data.deliveredUom.should.have.property('unit');
    data.deliveredUom.unit.should.instanceOf(String);

    data.should.have.property('pricePerDealUnit');
    data.pricePerDealUnit.should.instanceof(Number);

    data.should.have.property('currency');
    data.currency.should.instanceof(Object);

    data.currency.should.have.property('code');
    data.currency.code.should.instanceOf(String);

    data.currency.should.have.property('symbol');
    data.currency.symbol.should.instanceOf(String);

    data.currency.should.have.property('rate');
    data.currency.rate.should.instanceOf(Number);

    data.should.have.property('currencyRate');
    data.currencyRate.should.instanceof(Number);

    data.should.have.property('correction');
    data.correction.should.instanceOf(Array);

    data.should.have.property('purchaseOrderId');
    data.purchaseOrderId.should.instanceof(Object);

    data.should.have.property('purchaseOrder');
    data.purchaseOrder.should.instanceof(Object);
    validatePurchaseOrder(data.purchaseOrder);
};