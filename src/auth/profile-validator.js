require("should");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('firstname');
    data.firstname.should.instanceof(String);

    data.should.have.property('lastname');
    data.lastname.should.instanceof(String);

    data.should.have.property('gender');
    data.gender.should.instanceof(String);
    
    data.should.have.property('dob');
    data.dob.should.instanceof(Date); 
    
    data.should.have.property('email');
    data.email.should.instanceof(String); 
};