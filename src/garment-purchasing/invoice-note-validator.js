require("should");
var validateSupplier = require('../master/supplier-validator');
var validateInvoiceNoteItem = require('./invoice-note-item-validator');
var validateVat = require('../master/vat-validator');
var validateCurrency = require('../master/currency-validator');

module.exports = function (data) {
    data.should.have.property('no');
    data.no.should.instanceOf(String);

    data.should.have.property('date');
    data.date.should.instanceOf(Date);

    data.should.have.property('supplierId');
    data.supplierId.should.instanceof(Object);

    data.should.have.property('supplier');
    data.supplier.should.instanceof(Object);
    validateSupplier(data.supplier);

    data.should.have.property('currency');
    data.supplier.should.instanceof(Object);

    data.should.have.property('useIncomeTax');
    data.useIncomeTax.should.instanceOf(Boolean);

    data.should.have.property('incomeTaxNo');
    data.incomeTaxNo.should.instanceOf(String);

    data.should.have.property('incomeTaxInvoiceNo');
    data.incomeTaxInvoiceNo.should.instanceOf(String);

    data.should.have.property('incomeTaxDate');
    data.incomeTaxDate.should.instanceOf(Date);

    data.should.have.property('useVat');
    data.useVat.should.instanceOf(Boolean);

    data.should.have.property('vatNo');
    data.vatNo.should.instanceOf(String);

    data.should.have.property('vatInvoiceNo');
    data.vatInvoiceNo.should.instanceOf(String);

    data.should.have.property('vatDate');
    data.vatDate.should.instanceOf(Date);

    data.should.have.property('vat');
    data.vat.should.instanceof(Object);
    validateVat(data.vat);

    data.should.have.property('isPayTax');
    data.isPayTax.should.instanceOf(Boolean);

    data.should.have.property('remark');
    data.remark.should.instanceOf(String);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validateInvoiceNoteItem(item);
    }
};