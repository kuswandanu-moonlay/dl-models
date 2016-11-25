require("should");
var validateMachine = require('../../../master/machine-validator');
var validateProduct = require('../../../master/product-validator');
var validateUnit = require('../../../master/unit-validator');
var validateLotMachine = require('../../../master/machine-validator');
var validateThreadSpecification = require('../../../master/thread-specification');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('unitId');
    data.unitId.should.instanceof(Object);

    data.should.have.property('unit');
    data.unit.should.instanceof(Object);
    validateUnit(data.unit);

    data.should.have.property('date');
    data.date.should.instanceOf(Date);

    data.should.have.property('shift');
    data.shift.should.be.String();

    data.should.have.property('productId');
    data.productId.should.instanceof(Object);

    data.should.have.property('product');
    data.product.should.instanceof(Object);
    validateProduct(data.product);

    data.should.have.property('machine');
    data.machine.should.instanceof(Object);
    validateMachine(data.machine);

    data.should.have.property('machineId');
    data.machineId.should.instanceof(Object);

    data.should.have.property('lotMachine');
    data.lotMachine.should.instanceof(Object);
    validateLotMachine(data.lotMachine);

    data.should.have.property('lotMachineId');
    data.lotMachineId.should.instanceof(Object);

    data.should.have.property('threadSpecification');
    data.threadSpecification.should.instanceof(Object);
    validateThreadSpecification(data.threadSpecification);

    data.should.have.property('threadSpecificationId');
    data.threadSpecificationId.should.instanceof(Object);
    
    data.should.have.property('threadWeight');
    data.threadWeight.should.instanceOf(Number);

    data.should.have.property('goodCone');
    data.goodCone.should.instanceOf(Number);

    data.should.have.property('badCone');
    data.badCone.should.instanceOf(Number);

    data.should.have.property('drum');
    data.drum.should.instanceOf(Number);
}