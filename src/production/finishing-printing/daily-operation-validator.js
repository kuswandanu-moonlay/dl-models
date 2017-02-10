require("should");
var validateProductionOrder = require('../../sales/production-order-validator');
var validateKanban = require('./kanban-validator');
var validateProduct = require("../../master/product-validator");
var validateYarnMaterial = require("../../master/yarn-material-validator");
var validateMaterialConstruction = require("../../master/material-construction-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('salesContract');
    data.salesContract.should.be.String();

    data.should.have.property('productionOrderlId');
    data.productionOrderlId.should.instanceOf(Object);

    data.should.have.property('productionOrder');
    data.productionOrder.should.instanceOf(Object);
    validateProductionOrder(data.productionOrder);

    data.should.have.property('materialId');
    data.materialId.should.instanceOf(Object);

    data.should.have.property('material');
    data.material.should.instanceOf(Object);
    validateProduct(data.material);

    data.should.have.property('materialConstructionId');
    data.materialConstructionId.should.instanceOf(Object);

    data.should.have.property('materialConstruction');
    data.materialConstruction.should.instanceOf(Object);
    validateMaterialConstruction(data.materialConstruction);

    data.should.have.property('yarnMaterialId');
    data.yarnMaterialId.should.instanceOf(Object);

    data.should.have.property('yarnMaterial');
    data.yarnMaterial.should.instanceOf(Object);
    validateYarnMaterial(data.yarnMaterial);

    data.should.have.property('color');
    data.color.should.be.String();

    data.should.have.property('kanban');
    data.kanban.should.instanceOf(Object);
    validateKanban(data.kanban);
};