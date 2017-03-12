require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('termOfPayment');
    data.termOfPayment.should.instanceOf(String);
    
    data.should.have.property('isExport');
    data.isExport.should.instanceOf(Boolean);
};