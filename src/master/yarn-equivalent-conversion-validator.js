require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('ne');
    data.ne.should.instanceOf(Number);

    data.should.have.property('conversion');
    data.rate.should.instanceOf(Number);


}