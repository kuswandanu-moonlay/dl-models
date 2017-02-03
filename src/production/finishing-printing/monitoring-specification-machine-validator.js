require("should");
var validateMachineType = require('../../master/machine-type-validator');
var validateMonitoringSpecfificationMachineItem=require("./monitoring-specification-machine-item-validator");

module.exports = function (data) {

    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('date');
    data.date.should.instanceOf(Date);

    data.should.have.property('time');
    data.time.should.instanceof(String);

    data.should.have.property('machineTypeId');
    data.machineTypeId.should.instanceof(Object);

    data.should.have.property('machineType');
    data.machineType.should.instanceof(Object);
    validateMachineType(data.machineType);

    data.should.have.property('items');
    data.items.should.instanceof(Array);

    for (var item of data.items) {
        validateMonitoringSpecfificationMachineItem(item);
    }




};