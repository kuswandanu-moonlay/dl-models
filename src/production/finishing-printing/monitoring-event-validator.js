require("should");
var validateMachine = require('../../master/machine-validator');
var validateProductionOrder = require('../../sales/production-order-validator');
var validateMonitoringEventType = require('../../master/monitoring-event-type-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);
    
    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('dateStart');
    data.dateStart.should.instanceof(Date);

    data.should.have.property('timeInMillisStart');
    data.timeInMillisStart.should.instanceof(Number);

    data.should.have.property('dateEnd');
    data.dateEnd.should.instanceof(Date);

    data.should.have.property('timeInMillisEnd');
    data.timeInMillisEnd.should.instanceof(Number);

    data.should.have.property('machineId');
    data.machineId.should.instanceof(Object);

    data.should.have.property('machine');
    data.machine.should.instanceof(Object);
    validateMachine(data.machine);

    data.should.have.property('productionOrder');
    data.productionOrder.should.instanceof(Object);
    validateProductionOrder(data.productionOrder);

    data.should.have.property('monitoringEventTypeId');
    data.monitoringEventTypeId.should.instanceof(Object);

    data.should.have.property('monitoringEventType');
    data.monitoringEventType.should.instanceof(Object);
    validateMonitoringEventType(data.monitoringEventType);

    data.should.have.property('remark');
    data.remark.should.instanceOf(String);
}