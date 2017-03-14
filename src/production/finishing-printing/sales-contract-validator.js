require("should");

var validateProductionOrder= require('./production-order-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('salesContractNo');
    data.salesContractNo.should.be.String();

    data.should.have.property('date');
    data.date.should.instanceof(Date);

    data.should.have.property('productionOrders');
    data.productionOrders.should.instanceOf(Array);
    for (var productionOrder of data.productionOrders) {
        validateProductionOrder(productionOrder);
    }
}