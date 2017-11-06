require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('weekNumber');
    data.weekNumber.should.be.instanceOf(Number);

    data.should.have.property('startDate');
    data.startDate.should.instanceof(Date);

    data.should.have.property('endDate');
    data.endDate.should.instanceof(Date);

    data.should.have.property('month');
    data.month.should.be.instanceOf(Number);
};