require("should");
var validatorDetails = require('./sewing-blocking-plan-detail-validator');
var validatorBookingItems = require('./booking-order-item-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.be.String();

    data.should.have.property('bookingOrderNo');
    data.bookingOrderNo.should.be.String();
    
    data.should.have.property('bookingOrderId');
    data.bookingOrderId.should.instanceOf(Object);
    
    data.should.have.property('garmentBuyerId');
    data.garmentBuyerId.should.instanceOf(Object);
    
    data.should.have.property('garmentBuyerName');
    data.garmentBuyerName.should.instanceOf(String);
    
    data.should.have.property('garmentBuyerCode');
    data.garmentBuyerCode.should.instanceOf(String);
    
    data.should.have.property('quantity');
    data.quantity.should.instanceOf(Number);
    
    data.should.have.property('bookingDate');
    data.bookingDate.should.instanceOf(Date);
    
    data.should.have.property('deliveryDate');
    data.deliveryDate.should.instanceOf(Date);
    
    data.should.have.property('remark');
    data.remark.should.instanceOf(String);
    
    data.should.have.property('status');
    data.status.should.be.String();

    data.should.have.property('details');
    data.details.should.instanceOf(Array);
    for (var item of data.details) {
        validatorDetails(item);
    }
};