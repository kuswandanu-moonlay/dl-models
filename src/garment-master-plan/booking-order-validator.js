require("should");
var validatorDetails = require('./booking-order-detail-validator');
var validatorStyle = require('./style-validator');
var validatorstandardHours = require('./standard-hour-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.be.String();
    
    data.should.have.property('bookingDate');
    data.bookingDate.should.instanceof(Date);
    
    data.should.have.property('deliveryDate');
    data.deliveryDate.should.instanceof(Date);
    
    data.should.have.property('garmentBuyerId');
    data.garmentBuyerId.should.instanceOf(Object);
    
    data.should.have.property('garmentBuyerName');
    data.garmentBuyerName.should.be.String();
    
    data.should.have.property('garmentBuyerCode');
    data.garmentBuyerCode.should.be.String();
    
    data.should.have.property('styleId');
    data.styleId.should.instanceOf(Object);

    data.should.have.property('style');
    data.style.should.instanceOf(Object);
    validatorStyle(data.style);
    
    data.should.have.property('orderQuantity');
    data.orderQuantity.should.instanceOf(Number);
    
    data.should.have.property('standardHourId');
    data.standardHourId.should.instanceOf(Object);
    
    data.should.have.property('standardHour');
    data.standardHour.should.instanceOf(Object);
    validatorstandardHours(data.standardHour);

    data.should.have.property('remark');
    data.remark.should.be.String();

    data.should.have.property('isConfirmed');
    data.isConfirmed.should.instanceOf(Boolean);

    data.should.have.property('details');
    data.details.should.instanceOf(Array);
    for (var item of data.details) {
        validatorDetails(item);
    }
};