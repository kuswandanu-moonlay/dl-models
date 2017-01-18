require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('process');
    data.process.should.instanceOf(String);

    data.should.have.property('itemMonitoring');
    data.itemMonitoring.should.be.Array();
};