require("should");
var validatePartition = require('./partition-validator');
var validateProductionOrder = require('../../sales/production-order-validator');
var validateStep = require('../../master/step-validator');
var validateInstruction = require('../../master/instruction-validator');

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('productionOrderId');
    data.productionOrderId.should.instanceOf(Object);

    data.should.have.property('productionOrder');
    data.productionOrder.should.instanceOf(Object);
    validateProductionOrder(data.productionOrder);

    data.should.have.property('color');
    data.color.should.be.String();

    data.should.have.property('grade');
    data.grade.should.be.String();

    data.should.have.property('lengthFabric');
    data.lengthFabric.should.instanceOf(Number);

    data.should.have.property('partitions');
    data.partitions.should.instanceOf(Array);
    for (var partition of data.partitions) {
        validatePartition(partition);
    }

    data.should.have.property('instructionId');
    data.instructionId.should.instanceOf(Object);

    data.should.have.property('instruction');
    data.instruction.should.instanceOf(Object);
    validateInstruction(data.instruction);

    data.should.have.property('steps');
    data.steps.should.instanceOf(Array);
    for (var step of data.steps) {
        validateStep(step);
    }
};