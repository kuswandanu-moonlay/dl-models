require("should");
var validateKanban = require('./kanban-validator');
var validateStep = require("../../master/step-validator");
var validateMachine = require("../../master/machine-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.be.String();

    data.should.have.property('kanbanId');
    data.kanbanId.should.instanceOf(Object);

    data.should.have.property('kanban');
    data.kanban.should.instanceOf(Object);
    validateKanban(data.kanban);

    data.should.have.property('machineId');
    data.machineId.should.instanceOf(Object);

    data.should.have.property('machine');
    data.machine.should.instanceOf(Object);
    validateMachine(data.machine);

    data.should.have.property('stepId');
    data.stepId.should.instanceOf(Object);

    data.should.have.property('step');
    data.step.should.instanceOf(Object);
    validateStep(data.step);

    data.should.have.property('shift');
    data.shift.should.be.String();

    data.should.have.property('shift');
    data.shift.should.be.String();

    if(data.input)
        data.input.should.instanceOf(Number);

    if(data.dateInput)
        data.dateInput.should.instanceof(Date);

    if(data.timeInput)
        data.timeInput.should.instanceOf(Number);

    if(data.goodOutput)
        data.goodOutput.should.instanceOf(Number);

    if(data.badOutput)
        data.badOutput.should.instanceOf(Number);

    if(data.dateOutput)
        data.dateOutput.should.instanceof(Date);

    if(data.timeOutput)
        data.timeOutput.should.instanceOf(Number);

    if(data.badOutputDescription)
        data.badOutputDescription.should.be.String();
};