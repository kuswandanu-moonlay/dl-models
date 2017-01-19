require("should"); 
var validateDivision = require('./division-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.be.String();

    data.should.have.property('divisionId');
    data.divisionId.should.be.Object();
    
    data.should.have.property('division');
    data.division.should.be.Object();
    validateDivision(data.division);

    data.should.have.property('name');
    data.name.should.be.String();

    data.should.have.property('description');
    data.description.should.be.String(); 
    
};