require("should");
var validatePurchaseOrder = require('./unit-payment-order-item-purchase-order-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('no');
    data.no.should.instanceOf(String);

    data.should.have.property('deliveryOrder');
    data.deliveryOrder.should.instanceof(Object);

    data.deliveryOrder.should.have.property('no');
    data.deliveryOrder.no.should.instanceOf(String);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {

        item.should.have.property('product');
        item.product.should.instanceof(Object);

        item.product.should.have.property('code');
        item.product.code.should.instanceOf(String);

        item.product.should.have.property('name');
        item.product.name.should.instanceOf(String);

        item.should.have.property('deliveredQuantity');
        item.deliveredQuantity.should.instanceof(Number);

        item.should.have.property('deliveredUom');
        item.deliveredUom.should.instanceof(Object);

        item.deliveredUom.should.have.property('unit');
        item.deliveredUom.unit.should.instanceOf(String);

        item.should.have.property('pricePerDealUnit');
        item.pricePerDealUnit.should.instanceof(Number);

        item.should.have.property('currency');
        item.currency.should.instanceof(Object);

        item.currency.should.have.property('code');
        item.currency.code.should.instanceOf(String);

        item.currency.should.have.property('symbol');
        item.currency.symbol.should.instanceOf(String);

        item.currency.should.have.property('rate');
        item.currency.rate.should.instanceOf(Number);

        item.should.have.property('currencyRate');
        item.currencyRate.should.instanceof(Number);

        item.should.have.property('correction');
        item.correction.should.instanceOf(Array);

        item.should.have.property('purchaseOrderId');
        item.purchaseOrderId.should.instanceof(Object);

        item.should.have.property('purchaseOrder');
        item.purchaseOrder.should.instanceof(Object);
        validatePurchaseOrder(item.purchaseOrder);
    }
};