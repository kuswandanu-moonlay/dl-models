require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('SJNo');
    data.SJNo.should.instanceOf(String);

    data.should.have.property('SJDate');
    data.SJDate.should.instanceOf(Date);

    data.should.have.property('realizationQuantity');
    data.realizationQuantity.should.instanceOf(Number);
}