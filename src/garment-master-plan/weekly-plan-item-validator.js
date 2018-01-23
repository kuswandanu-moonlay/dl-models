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

    data.should.have.property('efficiency');
    data.efficiency.should.be.instanceOf(Number);

    data.should.have.property('operator');
    data.operator.should.be.instanceOf(Number);

    data.should.have.property('AH');
    data.AH.should.be.instanceOf(Number);

    data.should.have.property('ahTotal');
    data.ahTotal.should.be.instanceOf(Number);

    data.should.have.property('remainingAH');
    data.remainingAH.should.be.instanceOf(Number);

    data.should.have.property('usedAH');
    data.usedAH.should.be.instanceOf(Number);
};