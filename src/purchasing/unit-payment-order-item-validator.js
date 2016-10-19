require("should"); 
var validateUnitReceiptNote = require('./unit-receipt-note-validator');
var validateProduct = require('../master/product-validator');
var validateUom = require('../master/uom-validator');

module.exports = function (data) {    
    data.should.have.property('unitReceiptNoteId');
    data.unitReceiptNoteId.should.instanceof(Object);

    data.should.have.property('unitReceiptNote');
    data.unitReceiptNote.should.instanceof(Object);
    validateUnitReceiptNote(data.unit);

    data.should.have.property('productId');
    data.productId.should.instanceof(Object);

    data.should.have.property('product');
    data.product.should.instanceof(Object);
    validateProduct(data.product);

    data.should.have.property('unitReceiptNoteQuantity');
    data.unitReceiptNoteQuantity.should.instanceOf(Number); 

    data.should.have.property('unitReceiptNoteUom');
    data.unitReceiptNoteUom.should.instanceOf(Object);
    validateUom(data.unitReceiptNoteUom);

    data.should.have.property('invoicePrice');
    data.invoicePrice.should.instanceOf(Number); 

    data.should.have.property('remark');
    data.remark.should.instanceOf(String); 
}