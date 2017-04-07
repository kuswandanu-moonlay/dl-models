require("should");
var validateFabricGradeTest = require("./fabric-grade-test-validator");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.be.String();

    data.should.have.property('pointSystem');
    data.pointSystem.should.instanceOf(Number);

    data.should.have.property('dateIm');
    data.dateIm.should.instanceOf(Date);

    data.should.have.property('shiftIm');
    data.shiftIm.should.be.String();

    data.should.have.property('group');
    data.group.should.be.String();

    data.should.have.property('operatorIm');
    data.operatorIm.should.be.String();

    data.should.have.property('machineNoIm');
    data.machineNoIm.should.be.String();

    data.should.have.property('productionOrderNo');
    data.productionOrderNo.should.be.String();

    data.should.have.property('productionOrderType');
    data.productionOrderType.should.be.String();

    data.should.have.property('kanbanCode');
    data.kanbanCode.should.be.String();

    data.should.have.property('cartNo');
    data.cartNo.should.be.String();

    data.should.have.property('orderQuantity');
    data.orderQuantity.should.instanceOf(Number);

    data.should.have.property('buyer');
    data.buyer.should.be.String();

    data.should.have.property('color');
    data.color.should.be.String();

    data.should.have.property('construction');
    data.construction.should.be.String();

    data.should.have.property('packingInstruction');
    data.packingInstruction.should.be.String();

    data.should.have.property('uom');
    data.packingInstruction.should.be.String();

    data.should.have.property('kanbanId');
    data.kanbanId.should.instanceOf(Object)

    data.should.have.property('fabricGradeTests');
    data.fabricGradeTests.should.instanceOf(Array);
    for (var item of data.fabricGradeTests) {
        validateFabricGradeTest(item);
    }
};