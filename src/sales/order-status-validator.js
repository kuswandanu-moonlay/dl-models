require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('salesContractNo');
    data.code.should.instanceOf(String);

    data.should.have.property('deliveryDateCorrection');
    data.deliveryDateCorrection.should.instanceOf(Date);

    data.should.have.property('reason');
    data.name.should.instanceOf(String);
};