require("should");
var validatePurchaseOrder = require('./unit-payment-order-item-purchase-order-validator');
var validateUnitReceiptNoteItem = require('./unit-payment-order-item-unit-receipt-note-item-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('no');
    data.no.should.instanceOf(String);

    data.should.have.property('deliveryOrder');
    data.deliveryOrder.should.instanceof(Object);

    data.deliveryOrder.should.have.property('no');
    data.deliveryOrder.no.should.instanceOf(String);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {

        item.should.not.equal(null);
        item.product.should.instanceof(Object);
        validateUnitReceiptNoteItem(item)
    }
};