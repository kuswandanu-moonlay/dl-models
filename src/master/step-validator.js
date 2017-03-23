require("should");
var ValidateStepIndicator = require('./step-indicator-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('process');
    data.process.should.instanceOf(String);

    data.should.have.property('alias');
    data.alias.should.instanceOf(String);

    // data.should.have.property('itemMonitoring');
    // data.itemMonitoring.should.be.Array();

    data.should.have.property('stepIndicators');
    data.stepIndicators.should.instanceOf(Array);
    for (var stepIndicator of data.stepIndicators) {
        ValidateStepIndicator(stepIndicator);
    }
};