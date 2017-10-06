require("should");
var validateSupplier = require('../master/supplier-validator');
var validateInvoiceNote = require('./invoice-note-validator');
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
    data.currency.should.instanceof(Object);

    data.should.have.property('hasUnitReceiptNote');
    data.hasUnitReceiptNote.should.instanceof(Boolean);

    data.should.have.property('remark');
    data.remark.should.instanceOf(String);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validateInvoiceNote(item);
    }
};