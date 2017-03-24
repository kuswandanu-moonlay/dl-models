require("should");
var validateProductionOrder = require('../../sales/production-order-validator');
var validateProductionOrderDetail = require('../../sales/production-order-detail-validator');
var validateCart = require('./cart-validator');
var validateInstruction = require('../../master/instruction-validator');

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('productionOrderId');
    data.productionOrderId.should.instanceOf(Object);

    data.should.have.property('productionOrder');
    data.productionOrder.should.instanceOf(Object);
    validateProductionOrder(data.productionOrder);

    data.should.have.property('selectedProductionOrderDetail');
    data.selectedProductionOrderDetail.should.instanceof(Object);
    validateProductionOrderDetail(data.selectedProductionOrderDetail);

    data.should.have.property('cart');
    data.cart.should.instanceof(Object);
    validateCart(data.cart);

    data.should.have.property('instructionId');
    data.instructionId.should.instanceOf(Object);

    data.should.have.property('instruction');
    data.instruction.should.instanceof(Object);
    validateInstruction(data.instruction);

    data.should.have.property('grade');
    data.grade.should.instanceof(String);

    data.should.have.property('isComplete');
    data.isComplete.should.instanceof(Boolean);

    data.should.have.property('currentStepIndex');
    data.currentStepIndex.should.instanceof(Number);

    data.should.have.property('currentQty');
    data.currentQty.should.instanceof(Number);

    data.should.have.property('goodOutput');
    data.goodOutput.should.instanceof(Number);

    data.should.have.property('badOutput');
    data.badOutput.should.instanceof(Number);

    data.should.have.property('oldKanbanId');
    data.oldKanbanId.should.instanceof(Object);

    data.should.have.property('oldKanban');
    data.oldKanban.should.instanceof(Object);
};