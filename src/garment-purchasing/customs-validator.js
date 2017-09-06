require("should");
var validateSupplier = require('../master/supplier-validator');
var validateCurrency = require('../master/currency-validator');
var validateDeliveryOrder = require('./delivery-order-validator');

module.exports = function (data) {
    data.should.have.property('no');
    data.no.should.instanceOf(String);

    data.should.have.property('customsDate');
    data.customsDate.should.instanceOf(Date);

    data.should.have.property('validateDate');
    data.validateDate.should.instanceOf(Date);

    data.should.have.property('supplierId');
    data.supplierId.should.instanceof(Object);

    data.should.have.property('supplier');
    data.supplier.should.instanceof(Object);
    validateSupplier(data.supplier);

    data.should.have.property('amountOfPackaging');
    data.amountOfPackaging.should.instanceof(Number);

    data.should.have.property('packaging');
    data.packaging.should.instanceOf(String);

    data.should.have.property('bruto');
    data.bruto.should.instanceof(Number);

    data.should.have.property('netto');
    data.netto.should.instanceof(Number);

    data.should.have.property('currencyId');
    data.currencyId.should.instanceof(Object);

    data.should.have.property('currency');
    data.currency.should.instanceof(Object);
    validateCurrency(data.currency);

    data.should.have.property('customsOrigin');
    data.customsOrigin.should.instanceOf(String);

    data.should.have.property('customsType');
    data.customsType.should.instanceOf(String);

    data.should.have.property('deliveryOrders');
    data.deliveryOrders.should.instanceOf(Array);
    for (var item of data.deliveryOrders) {
        validateDeliveryOrder(item);
    }
};