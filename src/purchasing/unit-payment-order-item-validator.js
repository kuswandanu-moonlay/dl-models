require("should");
var validateUnitReceiptNote = require('./unit-payment-order-item-unit-receipt-note-validator');

module.exports = function (data) {
    data.should.have.property('unitReceiptNoteId');
    data.unitReceiptNoteId.should.instanceof(Object);

    data.should.have.property('unitReceiptNote');
    data.unitReceiptNote.should.instanceof(Object);
    validateUnitReceiptNote(data.unitReceiptNote);
   
};