require("should");
var validatePurchaseOrderItem = require('./purchase-order-item-validator');
var validateBuyer = require('../master/buyer-validator');
var validateSupplier = require('../master/supplier-validator');
var validateCurrency = require('../master/currency-validator');
var validateVat = require('../master/vat-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('no');
    data.no.should.be.String();

    data.should.have.property('refNo');
    data.refNo.should.be.String();

    data.should.have.property('purchaseRequestId');
    data.purchaseRequestId.should.instanceof(Object);

    data.should.have.property('purchaseRequest');
    data.purchaseRequest.should.instanceof(Object);

    data.purchaseRequest.should.have.property('no');
    data.purchaseRequest.no.should.instanceOf(String);

    data.should.have.property('purchaseOrderExternalId');
    data.purchaseOrderExternalId.should.instanceof(Object);

    data.should.have.property('purchaseOrderExternal');
    data.purchaseOrderExternal.should.instanceof(Object);

    data.should.have.property('supplierId');
    data.supplierId.should.instanceof(Object);

    data.should.have.property('supplier');
    data.supplier.should.instanceof(Object);

    data.supplier.should.have.property('code');
    data.supplier.code.should.instanceOf(String);

    data.supplier.should.have.property('name');
    data.supplier.name.should.instanceOf(String);

    data.supplier.should.have.property('address');
    data.supplier.address.should.instanceOf(String);

    data.supplier.should.have.property('contact');
    data.supplier.contact.should.instanceOf(String);

    data.supplier.should.have.property('PIC');
    data.supplier.PIC.should.instanceOf(String);

    data.supplier.should.have.property('import');
    data.supplier.import.should.instanceOf(Boolean);

    data.supplier.should.have.property('NPWP');
    data.supplier.NPWP.should.instanceOf(String);

    data.supplier.should.have.property('serialNumber');
    data.supplier.serialNumber.should.instanceOf(String);

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

    data.should.have.property('categoryId');
    data.categoryId.should.instanceof(Object);

    data.should.have.property('category');
    data.category.should.instanceof(Object);

    data.category.should.have.property('code');
    data.category.code.should.instanceOf(String);

    data.category.should.have.property('name');
    data.category.name.should.instanceOf(String);

    data.should.have.property('freightCostBy');
    data.freightCostBy.should.instanceOf(String);

    data.should.have.property('currency');
    data.currency.should.instanceof(Object);

    data.currency.should.have.property('code');
    data.currency.code.should.instanceOf(String);

    data.currency.should.have.property('symbol');
    data.currency.symbol.should.instanceOf(String);

    data.currency.should.have.property('rate');
    data.currency.rate.should.instanceOf(Number);

    data.should.have.property('currencyRate');
    data.currencyRate.should.instanceOf(Number);

    data.should.have.property('paymentMethod');
    data.paymentMethod.should.instanceOf(String);

    data.should.have.property('paymentDueDays');
    data.paymentDueDays.should.instanceOf(Number);

    data.should.have.property('vat');
    data.vat.should.instanceof(Object);
    validateVat(data.vat);

    data.should.have.property('useVat');
    data.useVat.should.instanceOf(Boolean);

    data.should.have.property('vatRate');
    data.vatRate.should.instanceOf(Number);

    data.should.have.property('useIncomeTax');
    data.useIncomeTax.should.instanceOf(Boolean);

    data.should.have.property('date');
    data.date.should.instanceof(Date);

    data.should.have.property('expectedDeliveryDate');
    data.expectedDeliveryDate.should.instanceof(Date);

    data.should.have.property('actualDeliveryDate');
    data.actualDeliveryDate.should.instanceof(Date);

    data.should.have.property('isPosted');
    data.isPosted.should.instanceOf(Boolean);

    data.should.have.property('isClosed');
    data.isClosed.should.instanceOf(Boolean);

    data.should.have.property('remark');
    data.remark.should.instanceOf(String);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validatePurchaseOrderItem(item);
    }

    data.should.have.property('status');
    data.status.should.instanceof(Object);
};