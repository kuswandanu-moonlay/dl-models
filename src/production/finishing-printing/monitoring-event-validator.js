require("should");
var validateMachine = require('../../master/machine-validator');
var validateMonitoringEventType = require('../../master/monitoring-event-type-validator');
var validateSalesContract = require('./sales-contract-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);
    
    data.should.have.property('date');
    data.date.should.instanceof(Date);

    data.should.have.property('time');
    data.time.should.instanceof(Number);

    data.should.have.property('machineId');
    data.machineId.should.instanceof(Object);

    data.should.have.property('machine');
    data.machine.should.instanceof(Object);
    validateMachine(data.machine);

    // data.should.have.property('salesContractId');
    // data.salesContractId.should.instanceof(Object);

    // data.should.have.property('salesContract');
    // data.salesContract.should.instanceof(Object);
    // validateSalesContract(data.salesContract);
    
    // data.should.have.property('monitoringEventTypeId');
    // data.monitoringEventTypeId.should.instanceof(Object);

    // data.should.have.property('monitoringEventType');
    // data.monitoringEventType.should.instanceof(Object);
    // validateMonitoringEventType(data.monitoringEventType);

    data.should.have.property('productionOrderNumber');
    data.productionOrderNumber.should.be.String();

    data.should.have.property('monitoringEventType');
    data.monitoringEventType.should.be.String();

    data.should.have.property('description');
    data.description.should.be.String();
}