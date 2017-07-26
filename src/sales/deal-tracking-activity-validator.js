require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('dealId');
    data.dealId.should.instanceof(Object);
    
    data.should.have.property('type');
    data.type.should.instanceOf(String);

    data.should.have.property('field');
    data.field.should.instanceof(Object);
};