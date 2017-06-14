require("should");
var validateProduct = require('../master/product-validator');
var validateUom = require('../master/uom-validator');
var validatePurchaseOrder = require('./purchase-order-validator');
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

    data.should.have.property('currencyRate');
    data.currencyRate.should.instanceOf(Number);

    data.should.have.property('purchaseOrder');
    data.purchaseOrder.should.instanceOf(Object);
    // validatePurchaseOrder(data.purchaseOrder);
    data.purchaseOrder.should.have.property('purchaseOrderExternal');
    data.purchaseOrder.purchaseOrderExternal.should.instanceof(Object);

    data.purchaseOrder.purchaseOrderExternal.should.have.property('no');
    data.purchaseOrder.purchaseOrderExternal.no.should.instanceOf(String);

    data.purchaseOrder.should.have.property('currency');
    data.purchaseOrder.currency.should.instanceof(Object);

    data.purchaseOrder.currency.should.have.property('code');
    data.purchaseOrder.currency.code.should.instanceOf(String);

    data.purchaseOrder.currency.should.have.property('symbol');
    data.purchaseOrder.currency.symbol.should.instanceOf(String);

    data.purchaseOrder.currency.should.have.property('rate');
    data.purchaseOrder.currency.rate.should.instanceOf(Number);

    data.purchaseOrder.should.have.property('categoryId');
    data.purchaseOrder.categoryId.should.instanceof(Object);

    data.purchaseOrder.should.have.property('category');
    data.purchaseOrder.category.should.instanceof(Object);

    data.purchaseOrder.should.have.property('unitId');
    data.purchaseOrder.unitId.should.instanceof(Object);

    data.purchaseOrder.should.have.property('unit');
    data.purchaseOrder.unit.should.instanceof(Object);

    data.purchaseOrder.should.have.property('code');
    data.purchaseOrder.unit.code.should.instanceof(String);

    data.purchaseOrder.should.name.have.property('name');
    data.purchaseOrder.unit.should.instanceof(String);

    data.purchaseOrder.should.have.property('purchaseRequest');
    data.purchaseOrder.purchaseRequest.should.instanceof(Object);

    data.purchaseOrder.purchaseRequest.should.have.property('no');
    data.purchaseOrder.purchaseRequest.no.should.instanceOf(String);

    for (var item of data.purchaseOrder.items) {
        item.should.have.property('useIncomeTax');
        item.useIncomeTax.should.instanceof(Boolean);

        item.should.have.property('product');
        item.product.should.instanceof(Object);

        item.product.should.have.property('code');
        item.product.code.should.instanceOf(String);

        item.product.should.have.property('name');
        item.product.name.should.instanceOf(String);

        item.should.have.property('pricePerDealUnit');
        item.pricePerDealUnit.should.instanceOf(Number);

        item.should.have.property('useIncomeTax');
        item.useIncomeTax.should.instanceOf(Boolean);
    }

    data.should.have.property('purchaseOrderId');
    data.purchaseOrderId.should.instanceof(Object);

    data.should.have.property('correction');
    data.correction.should.instanceOf(Array);

    data.should.have.property('remark');
    data.remark.should.instanceOf(String);
};