require("should");
var validateInvoiceNoteDeliveryOrderItem = require('./invoice-note-delivery-order-item-validator');
module.exports = function (data) {
    data.should.have.property('deliveryOrderId');
    data.deliveryOrderId.should.instanceof(Object);

    data.should.have.property('deliveryOrderNo');
    data.deliveryOrderNo.should.be.String();
    
    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validateInvoiceNoteDeliveryOrderItem(item);
    }
};