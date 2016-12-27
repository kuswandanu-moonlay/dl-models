require("should");
var validateSupplier = require('../master/supplier-validator');
var validateDeliveryOrderItem = require('../purchasing/delivery-order-item-validator');

module.exports = function (data) {
    data.should.have.property('no');
    data.no.should.instanceOf(String);

    data.should.have.property('refNo');
    data.refNo.should.instanceOf(String);

    data.should.have.property('date');
    data.date.should.instanceOf(Date);

    data.should.have.property('supplierDoDate');
    data.supplierDoDate.should.instanceOf(Date);


    data.should.have.property('supplierId');
    data.supplierId.should.instanceof(Object);

    data.should.have.property('supplier');
    data.supplier.should.instanceof(Object);
    validateSupplier(data.supplier);

    data.should.have.property('isPosted');
    data.isPosted.should.instanceOf(Boolean);
    
    data.should.have.property('isClosed');
    data.isClosed.should.instanceOf(Boolean);

    data.should.have.property('remark');
    data.remark.should.instanceOf(String);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validateDeliveryOrderItem(item);
    }
};