require("should");
var validateCompany = require('../master/company-validator');
var validateContact = require('../master/contact-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('name');
    data.name.should.instanceOf(String);

    data.should.have.property('amount');
    data.amount.should.instanceOf(Number);

    data.should.have.property('companyId');
    data.companyId.should.instanceof(Object);

    data.should.have.property('company');
    data.company.should.instanceof(Object);
    validateCompany(data.company);

    data.should.have.property('contactId');
    data.contactId.should.instanceof(Object);

    data.should.have.property('contact');
    data.contact.should.instanceof(Object);
    validateContact(data.contact);

    data.should.have.property('closeDate');
    data.closeDate.should.instanceOf(Date);

    data.should.have.property('description');
    data.description.should.instanceOf(String);
};