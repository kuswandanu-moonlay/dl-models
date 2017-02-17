require("should");
var validateStep=require('./step-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('name');
    data.name.should.instanceOf(String);

    data.should.have.property('steps');
    data.steps.should.instanceOf(Array);
    for (var step of data.steps) {
        validateStep(step);
    }
};