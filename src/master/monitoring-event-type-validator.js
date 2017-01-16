require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);
    
    data.should.have.property('code');
    data.code.should.be.String();

    data.should.have.property('description');
    data.description.should.be.String();
}