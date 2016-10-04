require("should");
var validateSupplier = require('../master/supplier-validator');
var validateUnit = require('../master/unit-validator');
var validateUnitReceiptOrderItem = require('./unit-receipt-note-item-validator');
var validateDeliveryOrder = require('./delivery-order-validator');

module.exports = function (data) {
    data.should.have.property('no');
    data.no.should.instanceOf(String);
    
    data.should.have.property('unitId');
    data.unitId.should.instanceof(Object);

    data.should.have.property('unit');
    data.unit.should.instanceof(Object);
    validateUnit(data.unit);

    data.should.have.property('date');
    data.date.should.instanceOf(Date);

    data.should.have.property('supplierId');
    data.supplierId.should.instanceof(Object);

    data.should.have.property('supplier');
    data.supplier.should.instanceof(Object);
    validateSupplier(data.supplier);
    
    data.should.have.property('deliveryOrderId');
    data.deliveryOrderId.should.instanceof(Object);

    data.should.have.property('deliveryOrder');
    data.deliveryOrder.should.instanceof(Object);
    validateDeliveryOrder(data.deliveryOrder);

    data.should.have.property('remark');
    data.remark.should.instanceOf(String);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validateUnitReceiptOrderItem(item);
    }
}