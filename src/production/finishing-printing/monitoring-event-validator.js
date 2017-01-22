require("should");
var validateMachine = require('../../master/machine-validator');
var validateProductionOrder = require('./production-order-validator');
var validateMonitoringEventItem = require('./monitoring-event-item-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);
    
    data.should.have.property('date');
    data.date.should.instanceof(Date);

    data.should.have.property('timeInMillis');
    data.timeInMillis.should.instanceof(Number);

    data.should.have.property('machineId');
    data.machineId.should.instanceof(Object);

    data.should.have.property('machine');
    data.machine.should.instanceof(Object);
    validateMachine(data.machine);

    data.should.have.property('productionOrder');
    data.productionOrder.should.instanceof(Object);
    validateProductionOrder(data.productionOrder);

    for (var item of data.items) {
        validateMonitoringEventItem(item);
    }
    
}