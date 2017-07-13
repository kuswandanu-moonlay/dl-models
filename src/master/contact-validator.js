require("should");
var validateCompany = require('./company-validator');

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.be.String();

    data.should.have.property('firstName');
    data.firstName.should.be.String();

    data.should.have.property('lastName');
    data.lastName.should.be.String();
    
    data.should.have.property('email');
    data.email.should.be.String();

    data.should.have.property('phoneNumber');
    data.phoneNumber.should.be.String();

    data.should.have.property('companyId');
    data.companyId.should.instanceOf(Object);

    data.should.have.property('company');
    data.company.should.instanceof(Object);
    validateCompany(data.company);

    data.should.have.property('jobTitle');
    data.jobTitle.should.instanceOf(String);
    
    data.should.have.property('information');
    data.information.should.be.String();
};