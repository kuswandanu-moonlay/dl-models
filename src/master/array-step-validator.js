require("should");
var validateStep = require('./step-validator');

module.exports = function (data) {
    data.should.have.property('stepId');
    data.stepId.should.instanceOf(Object);

    data.should.have.property('step');
    data.step.should.instanceOf(Object);
    validateStep(data.step);
};