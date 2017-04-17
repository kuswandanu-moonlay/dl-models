require("should");
var validateUnitPaymentCorrectionNoteItem = require('../purchasing/unit-payment-correction-note-item-validator');

module.exports = function (data) {
    data.should.have.property('no');
    data.no.should.instanceOf(String);
    
    data.should.have.property('date');
    data.date.should.instanceOf(Date);
    
    data.should.have.property('unitPaymentOrderId');
    data.unitPaymentOrderId.should.instanceof(Object);
    
    data.should.have.property('unitPaymentOrder');
    data.unitPaymentOrder.should.instanceof(Object);
    
    data.should.have.property('invoiceCorrectionNo');
    data.invoiceCorrectionNo.should.instanceof(String);
    
    data.should.have.property('invoiceCorrectionDate');
    data.invoiceCorrectionDate.should.instanceof(Date);
    
    data.should.have.property('incomeTaxCorrectionNo');
    data.incomeTaxCorrectionNo.should.instanceof(String);
    
    data.should.have.property('incomeTaxCorrectionDate');
    data.incomeTaxCorrectionDate.should.instanceof(Date);
    
    data.should.have.property('vatTaxCorrectionNo');
    data.vatTaxCorrectionNo.should.instanceof(String);
    
    data.should.have.property('vatTaxCorrectionDate');
    data.vatTaxCorrectionDate.should.instanceof(Date);
    
    data.should.have.property('useIncomeTax');
    data.useIncomeTax.should.instanceOf(Boolean);

    data.should.have.property('useVat');
    data.useVat.should.instanceOf(Boolean);
    
    data.should.have.property('returNoteNo');
    data.returNoteNo.should.instanceof(String);
    
    data.should.have.property('correctionType');
    data.correctionType.should.instanceof(String);
    
    data.should.have.property('releaseOrderNoteNo');
    data.releaseOrderNoteNo.should.instanceof(String);
    
    data.should.have.property('remark');
    data.remark.should.instanceOf(String);
    
    data.should.have.property('items');
    data.items.should.instanceOf(Array); 
    for (var item of data.items) {
        validateUnitPaymentCorrectionNoteItem(item);
    }
};