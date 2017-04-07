require("should");
var validateProductionOrder = require('../../sales/production-order-validator');
var validateMachine = require('../../master/machine-validator');
var validateMonitoringSpecfificationMachineItem = require("./monitoring-specification-machine-item-validator");

module.exports = function (data) {

    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('date');
    data.date.should.instanceOf(Date);

    data.should.have.property('time');
    data.time.should.instanceOf(Date);

    data.should.have.property('machineId');
    data.machineId.should.instanceof(Object);

    data.should.have.property('machine');
    data.machine.should.instanceof(Object);
    validateMachine(data.machine);

    data.should.have.property('productionOrderId');
    data.productionOrderId.should.instanceof(Object);

    data.should.have.property('productionOrder');
    data.productionOrder.should.instanceof(Object);
    validateProductionOrder(data.productionOrder);

    data.should.have.property('cartNumber');
    data.cartNumber.should.instanceOf(String);


    data.should.have.property('items');
    data.items.should.instanceof(Array);

    for (var item of data.items) {
        validateMonitoringSpecfificationMachineItem(item);
    }
};