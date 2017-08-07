require("should");
var validateBadOutputReason = require('../../master/bad-output-reason-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('presentation');
    data.presentation.should.instanceOf(Number);
    
    data.should.have.property('description');
    data.description.should.be.String();

    data.should.have.property('badOutputReasonId');
    data.badOutputReasonId.should.instanceOf(Object);

    data.should.have.property('badOutputReason');
    data.badOutputReason.should.instanceof(Object);
    validateBadOutputReason(data.badOutputReason);
};