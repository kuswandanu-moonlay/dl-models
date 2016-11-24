require("should");
var validateUnit = require('../../../master/unit-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('unit');
    data.unit.should.instanceof(Object);
    validateUnit(data.unit);

    data.should.have.property('unitId');
    data.unitId.should.instanceof(Object);

    data.should.have.property('date');
    data.date.should.instanceOf(Date);

    data.should.have.property('entries');
    data.items.should.instanceOf(Array);
    
    data.should.have.property('threadCountInBale');
    data.threadCountInBale.should.instanceOf(Number);

    data.should.have.property('mtdThreadCountInBale');
    data.mtdThreadCountInBale.should.instanceOf(Number);

    data.should.have.property('averageCount');
    data.averageCount.should.instanceOf(Number);

    data.should.have.property('factorStandard30s');
    data.factorStandard30s.should.instanceOf(Number);

    data.should.have.property('productionStandard30s');
    data.productionStandard30s.should.instanceOf(Number);

    data.should.have.property('usedMachineCount');
    data.usedMachineCount.should.instanceOf(Number);

    data.should.have.property('mtdUsedMachineCount');
    data.mtdUsedMachineCount.should.instanceOf(Number);

    data.should.have.property('actualMachineCount');
    data.actualMachineCount.should.instanceOf(Number);

    data.should.have.property('mtdActualMachineCount');
    data.mtdActualMachineCount.should.instanceOf(Number);

    data.should.have.property('spindleCount');
    data.spindleCount.should.instanceOf(Number);

    data.should.have.property('utilityPercentage');
    data.utilityPercentage.should.instanceOf(Number);

    data.should.have.property('mtdUtilityPercentage');
    data.mtdUtilityPercentage.should.instanceOf(Number);
}