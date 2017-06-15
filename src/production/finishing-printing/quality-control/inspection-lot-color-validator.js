require("should");
var validateInpectionLotColorItem = require("./inspection-lot-color-item-validator");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property("fabricQualityControlCode");
    data.fabricQualityControlCode.should.instanceOf(String);

    data.should.have.property("fabricQualityControlId");
    data.fabricQualityControlId.should.instanceOf(Object);

    data.should.have.property("productionOrderNo");
    data.productionOrderNo.should.instanceOf(String);

    data.should.have.property("productionOrderId");
    data.productionOrderId.should.instanceOf(Object);

    data.should.have.property("productionOrderType");
    data.productionOrderType.should.instanceOf(String);

    data.should.have.property("cartNo");
    data.cartNo.should.instanceOf(String);

    data.should.have.property("construction");
    data.construction.should.instanceOf(String);

    data.should.have.property("color");
    data.color.should.instanceOf(String);

    data.should.have.property("orderQuantity");
    data.orderQuantity.should.instanceOf(Number);

    data.should.have.property("construction");
    data.construction.should.instanceOf(String);

    data.should.have.property("kanbanCode");
    data.kanbanCode.should.instanceOf(String);

    data.should.have.property("kanbanId");
    data.kanbanId.should.instanceOf(String);

    data.should.have.property('date');
    data.date.should.instanceof(Date);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validateInpectionLotColorItem(item);
    }
};