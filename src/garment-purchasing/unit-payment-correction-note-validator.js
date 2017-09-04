require("should");
var validateUnitPaymentCorrectionNoteItem = require('./unit-payment-correction-note-item-validator');
var validateDeliveryOrder = require('./delivery-order-validator');

module.exports = function (data) {
    data.should.have.property('no');
    data.no.should.instanceOf(String);
    
    data.should.have.property('date');
    data.date.should.instanceOf(Date);

    data.should.have.property('correctionType');
    data.correctionType.should.instanceof(String);
    
    data.should.have.property('deliveryOrderId');
    data.deliveryOrderId.should.instanceof(Object);
    
    data.should.have.property('deliveryOrder');
    data.deliveryOrder.should.instanceof(Object);
    validateDeliveryOrder(data.deliveryOrder);

    data.should.have.property('remark');
    data.remark.should.instanceof(String);
    
    data.should.have.property('items');
    data.items.should.instanceOf(Array); 
    for (var item of data.items) {
        validateUnitPaymentCorrectionNoteItem(item);
    }
};