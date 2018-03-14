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

    data.should.have.property('workingHours');
    data.workingHours.should.be.instanceOf(Number);

    data.should.have.property('ahTotal');
    data.ahTotal.should.be.instanceOf(Number);

    data.should.have.property('ehTotal');
    data.ehTotal.should.be.instanceOf(Number);

    data.should.have.property('usedEH');
    data.usedEH.should.be.instanceOf(Number);

    data.should.have.property('remainingEH');
    data.remainingEH.should.be.instanceOf(Number);

};