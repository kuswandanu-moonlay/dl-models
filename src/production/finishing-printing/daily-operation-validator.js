require("should");
var validateProductionOrder = require('../../sales/production-order-validator');
var validateKanban = require('./kanban-validator');
var validateProduct = require("../../master/product-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('salesContract');
    data.salesContract.should.be.String();

    data.should.have.property('productionOrder');
    data.productionOrder.should.instanceOf(Object);
    validateProductionOrder(data.productionOrder);

    data.should.have.property('materialId');
    data.materialId.should.instanceOf(Object);

    data.should.have.property('material');
    data.material.should.instanceOf(Object);
    validateProduct(data.material);

    data.should.have.property('construction');
    data.construction.should.be.String();

    data.should.have.property('color');
    data.color.should.be.String();

    data.should.have.property('kanban');
    data.kanban.should.instanceOf(Object);
    validateKanban(data.kanban);
};