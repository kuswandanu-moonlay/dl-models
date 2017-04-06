require("should");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.be.String();

    data.should.have.property('group');
    data.group.should.be.String();
    
    data.should.have.property('name');
    data.name.should.be.String();
    
    data.should.have.property('score');
    data.score.should.instanceOf(Object);
};