require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('productionOrderNo');
    data.productionOrderNo.should.instanceOf(String);

    data.should.have.property('deliveryDateCorrection');
    data.deliveryDateCorrection.should.instanceOf(Date);

    data.should.have.property('reason');
    data.reason.should.instanceOf(String);
};