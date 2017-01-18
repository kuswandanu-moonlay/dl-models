require("should");
var validateInstruction = require('../../master/instruction-validator');
var validatePartition = require('./partition-validator');

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('instructionId');
    data.instructionId.should.instanceOf(Object);

    data.should.have.property('instruction');
    data.instruction.should.instanceOf(Object);
    validateInstruction(data.instruction);

    data.should.have.property('partitions');
    data.partitions.should.instanceOf(Array);
    for (var partition of data.partitions) {
        validatePartition(partition);
    }
};