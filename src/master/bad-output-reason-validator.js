require("should");
var validateMachine = require('./machine-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);
    
    data.should.have.property('code');
    data.code.should.instanceOf(String);
    
    data.should.have.property('reason');
    data.reason.should.instanceOf(String);

    data.should.have.property('machines');
    data.machines.should.instanceOf(Array);
    for (var machine of data.machines) {
        validateMachine(machine);
    }
};