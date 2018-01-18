require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);
    
    data.should.have.property('name');
    data.name.should.instanceOf(String);
    
    data.should.have.property('createdDate');
    data.createdDate.should.instanceof(Date);

    data.should.have.property('spinningYarnId');
    data.spinningYarnId.should.instanceOf(Object);

    data.should.have.property('spinningYarnCode');
    data.spinningYarnCode.should.be.String();

    data.should.have.property('spinningYarnName');
    data.spinningYarnName.should.be.String();

    data.should.have.property('remark');
    data.remark.should.be.String();

};