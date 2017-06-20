require("should");
var validateBuyer = require('../master/buyer-validator');
var validateSupplier = require('../master/supplier-validator');
var validateCurrency = require('../master/currency-validator');
var validateVat = require('../master/vat-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('unitId');
    data.unitId.should.instanceof(Object);

    data.should.have.property('unit');
    data.unit.should.instanceof(Object);

    data.unit.should.have.property('code');
    data.unit.code.should.instanceof(String);

    data.unit.should.have.property('name');
    data.unit.name.should.instanceof(String)

    data.unit.should.have.property('division');
    data.unit.division.should.instanceof(Object);

    data.unit.should.have.property('divisionId');
    data.unit.divisionId.should.instanceof(Object);

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

    data.category.should.have.property('code');
    data.category.code.should.instanceOf(String);

    data.category.should.have.property('name');
    data.category.name.should.instanceOf(String);

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

        item.should.have.property('defaultQuantity');
        item.defaultQuantity.should.instanceOf(Number);

        item.should.have.property('defaultUom');
        item.defaultUom.should.instanceof(Object);

        item.defaultUom.should.have.property('unit');
        item.defaultUom.unit.should.instanceOf(String);

        item.should.have.property('dealQuantity');
        item.dealQuantity.should.instanceOf(Number);

        item.should.have.property('dealUom');
        item.dealUom.should.instanceof(Object);

        item.dealUom.should.have.property('unit');
        item.dealUom.unit.should.instanceOf(String);

        item.should.have.property('realizationQuantity');
        item.realizationQuantity.should.instanceOf(Number);

        item.should.have.property('pricePerDealUnit');
        item.pricePerDealUnit.should.instanceOf(Number);

        item.should.have.property('priceBeforeTax');
        item.priceBeforeTax.should.instanceOf(Number);

        item.should.have.property('currency');
        item.currency.should.instanceof(Object);

        item.currency.should.have.property('code');
        item.currency.code.should.instanceOf(String);

        item.currency.should.have.property('symbol');
        item.currency.symbol.should.instanceOf(String);

        item.should.have.property('conversion');
        item.conversion.should.instanceof(Number);

        item.should.have.property('isClosed');
        item.isClosed.should.instanceof(Boolean);

        item.should.have.property('useIncomeTax');
        item.useIncomeTax.should.instanceof(Boolean);

        item.should.have.property('remark');
        item.remark.should.instanceof(String);

        item.should.have.property('fulfillments');
        item.fulfillments.should.instanceof(Array);
    }
};