require("should");
var validateUnit = require('./unit-validator');
var validateStep = require('./step-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);
    
    
    data.should.have.property('code');
    data.code.should.instanceOf(String);
    
    data.should.have.property('name');
    data.name.should.instanceOf(String);

    data.should.have.property('unitId');
    data.unitId.should.instanceOf(Object);

    data.should.have.property('unit');
    data.unit.should.instanceOf(Object);
    validateUnit(data.unit);

    data.should.have.property('stepId');
    data.stepId.should.instanceOf(Object);

    data.should.have.property('step');
    data.step.should.instanceOf(Object);
    validateStep(data.step);

    data.should.have.property('process');
    data.process.should.instanceOf(String);
    
    data.should.have.property('manufacture');
    data.manufacture.should.instanceOf(String);
    
    data.should.have.property('year');
    data.year.should.instanceOf(Number);
    
    data.should.have.property('condition');
    data.condition.should.instanceOf(String);
};