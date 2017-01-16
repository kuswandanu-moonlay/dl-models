require("should");
   
module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('name');
    data.name.should.instanceof(String);

    data.should.have.property('method');
    data.method.should.instanceof(String);

    data.should.have.property('uri');
    data.uri.should.instanceof(String);

    data.should.have.property('isLocked');
    data.isLocked.should.instanceof(Boolean);

    data.should.have.property('roles');
    data.roles.should.instanceof(Array);  
};