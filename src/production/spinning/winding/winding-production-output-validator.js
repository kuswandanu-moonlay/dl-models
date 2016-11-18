require("should");
var validateMachine = require('../../../master/machine-validator');
var validateProduct = require('../../../master/product-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('spinning');
    data.spinning.should.be.String();

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
    
    data.should.have.property('threadName');
    data.threadName.should.be.String();

    data.should.have.property('threadWeight');
    data.threadWeight.should.instanceOf(Number);

    data.should.have.property('goodCone');
    data.goodCone.should.instanceOf(Number);

    data.should.have.property('badCone');
    data.badCone.should.instanceOf(Number);

    data.should.have.property('drum');
    data.drum.should.instanceOf(Number);
}