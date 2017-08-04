require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('name');
    data.name.should.instanceOf(String);

    data.should.have.property('duration');
    data.duration.should.instanceOf(Number);
};