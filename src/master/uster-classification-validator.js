require("should");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('thin');
    data.thin.should.instanceOf(Number);

    data.should.have.property('thick');
    data.thick.should.instanceOf(Number);

    data.should.have.property('neps');
    data.neps.should.instanceOf(Number);

    data.should.have.property('ipi');
    data.ipi.should.instanceOf(Number);

    data.should.have.property('grade');
    data.grade.should.be.String();
};