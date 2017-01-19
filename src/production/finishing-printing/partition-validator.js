require("should");
var validateStep = require('../../master/step-validator');
var validateMachine = require('../../master/machine-validator');

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.be.String();

    data.should.have.property('no');
    data.no.should.be.String();

    data.should.have.property('shift');
    data.shift.should.be.String();

    data.should.have.property('stepId');
    data.stepId.should.instanceOf(Object);

    data.should.have.property('step');
    data.step.should.instanceOf(Object);
    validateStep(data.step);

    data.should.have.property('machineId');
    data.machineId.should.instanceOf(Object);

    data.should.have.property('machine');
    data.machine.should.instanceOf(Object);
    validateMachine(data.machine);

    data.should.have.property('steps');
    data.steps.should.be.Array();

    data.should.have.property('input');
    data.input.should.instanceOf(Number);

    data.should.have.property('dateInput');
    data.dateInput.should.instanceof(Date);

    data.should.have.property('goodOutput');
    data.goodOutput.should.instanceOf(Number);

    data.should.have.property('badOutput');
    data.badOutput.should.instanceOf(Number);

    data.should.have.property('dateOutput');
    data.dateOutput.should.instanceof(Date);

    data.should.have.property('badOutputDescription');
    data.badOutputDescription.should.be.String();
};