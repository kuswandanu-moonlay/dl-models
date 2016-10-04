require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('name');
    data.name.should.be.String();

    data.should.have.property('rate');
    data.rate.should.instanceOf(Number);

    data.should.have.property('description');
    data.description.should.be.String();

}