require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.be.String();
    
    data.should.have.property('color');
    data.code.should.be.String();
    
    data.should.have.property('start');
    data.start.should.instanceOf(Number);

    data.should.have.property('end');
    data.end.should.instanceOf(Number);

    data.should.have.property('remark');
    data.remark.should.be.String();
};