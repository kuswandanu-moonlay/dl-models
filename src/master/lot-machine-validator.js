require("should");
var validateProduct = require('./product-validator');
var validateMachine = require('./machine-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);
     
    data.should.have.property('productId');
    data.productId.should.instanceof(Object);

    data.should.have.property('product');
    data.product.should.instanceof(Object);
    validateProduct(data.product);

    data.should.have.property('rpm');
    data.rpm.should.instanceof(Number);

    data.should.have.property('lot');
    data.lot.should.be.String();

    data.should.have.property('machineId');
    data.machineId.should.instanceof(Object);

    data.should.have.property('machine');
    data.machine.should.instanceof(Object);
    validateProduct(data.product);

    data.should.have.property('ne');
    data.ne.should.instanceof(Number);

    data.should.have.property('constant');
    data.constant.should.instanceof(Number);
}