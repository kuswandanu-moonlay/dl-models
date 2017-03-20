require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('no');
    data.no.should.instanceOf(String);

    data.should.have.property('name');
    data.name.should.instanceOf(String);

    data.should.have.property('category');
    data.category.should.instanceOf(String);
};