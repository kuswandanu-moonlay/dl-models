require("should");
var validateSupplier = require('../master/supplier-validator');
var validateUnit = require('../master/unit-validator');
var validateCurrency = require('../master/currency-validator');
var validateUnitPaymentOrderItem = require('./unit-payment-order-item-validator');
var validateVat = require('../master/vat-validator');

module.exports = function (data) {
    data.should.have.property('no');
    data.no.should.instanceOf(String);

    data.should.have.property('unitId');
    data.unitId.should.instanceof(Object);

    data.should.have.property('unit');
    data.unit.should.instanceof(Object);
    validateUnit(data.unit);

    data.should.have.property('categoryId');
    data.categoryId.should.instanceof(Object);

    data.should.have.property('category');
    data.category.should.instanceof(Object);

    data.should.have.property('currency');
    data.supplier.should.instanceof(Object);
    validateCurrency(data.currency);

    data.should.have.property('vat');
    data.vat.should.instanceof(Object);
    validateVat(data.vat);

    data.should.have.property('paymentMethod');
    data.paymentMethod.should.instanceOf(String);

    data.should.have.property('date');
    data.date.should.instanceOf(Date);

    data.should.have.property('supplierId');
    data.supplierId.should.instanceof(Object);

    data.should.have.property('supplier');
    data.supplier.should.instanceof(Object);
    validateSupplier(data.supplier);

    data.should.have.property('invoceNo');
    data.invoceNo.should.instanceOf(String);

    data.should.have.property('invoceDate');
    data.invoceDate.should.instanceOf(Date);

    data.should.have.property('incomeTaxNo');
    data.incomeTaxNo.should.instanceOf(String);

    data.should.have.property('incomeTaxDate');
    data.incomeTaxDate.should.instanceOf(Date);

    data.should.have.property('useIncomeTax');
    data.useIncomeTax.should.instanceOf(Boolean);

    data.should.have.property('useVat');
    data.useVat.should.instanceOf(Boolean);

    data.should.have.property('vatNo');
    data.vatNo.should.instanceOf(String);

    data.should.have.property('vatDate');
    data.vatDate.should.instanceOf(Date);

    data.should.have.property('dueDate');
    data.dueDate.should.instanceOf(Date);

    data.should.have.property('vatRate');
    data.vatRate.should.instanceOf(Number);

    data.should.have.property('remark');
    data.remark.should.instanceOf(String);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validateUnitPaymentOrderItem(item);
    }
}