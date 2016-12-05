require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('bankName');
    data.bankName.should.instanceOf(String);

    data.should.have.property('bankAddress');
    data.bankAddress.should.instanceOf(String);

    data.should.have.property('accountName');
    data.accountName.should.instanceOf(String);

    data.should.have.property('accountNumber');
    data.accountNumber.should.instanceOf(String);

    data.should.have.property('swiftCode');
    data.swiftCode.should.instanceOf(String);
};