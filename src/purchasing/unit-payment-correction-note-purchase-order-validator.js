require("should");
var validatePurchaseOrderItem = require('./unit-payment-correction-note-purchase-order-validator');
var validateBuyer = require('../master/buyer-validator');
var validateSupplier = require('../master/supplier-validator');
var validateCurrency = require('../master/currency-validator');
var validateVat = require('../master/vat-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('purchaseOrderExternal');
    data.purchaseOrderExternal.should.instanceof(Object);

    data.purchaseOrderExternal.should.have.property('no');
    data.purchaseOrderExternal.no.should.instanceOf(String);

    data.should.have.property('currency');
    data.currency.should.instanceof(Object);

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

    data.should.have.property('purchaseRequest');
    data.purchaseRequest.should.instanceof(Object);

    data.purchaseRequest.should.have.property('no');
    data.purchaseRequest.no.should.instanceOf(String);
    for (var item of data.items) {
        item.should.have.property('useIncomeTax');
        item.useIncomeTax.should.instanceof(Boolean);

        item.should.have.property('product');
        item.product.should.instanceof(Object);

        item.product.should.have.property('code');
        item.product.code.should.instanceOf(String);

        item.product.should.have.property('name');
        item.product.name.should.instanceOf(String);
    }
};