require("should");
var validateProduct = require('./product-validator');

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('threadName');
    data.threadName.should.be.String();

    data.should.have.property('productId');
    data.productId.should.instanceof(Object);

    data.should.have.property('thread');
    data.thread.should.instanceof(Object);
    validateProduct(data.thread);

    data.should.have.property('thin');
    data.thin.should.instanceOf(Number);

    data.should.have.property('thick');
    data.thick.should.instanceOf(Number);

    data.should.have.property('neps');
    data.neps.should.instanceOf(Number);

    data.should.have.property('ipi');
    data.ipi.should.instanceOf(Number);

    data.should.have.property('grade');
    data.grade.should.be.String();
}