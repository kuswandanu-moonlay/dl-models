require("should");
var validatePackingItem = require("./packing-item-validator");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('productionOrderId');
    data.productionOrderId.should.be.Object();

    data.should.have.property('productionOrderNo');
    data.productionOrderNo.should.instanceOf(String);

    data.should.have.property('orderType');
    data.orderType.should.instanceOf(String);

    data.should.have.property('designCode');
    data.designCode.should.instanceOf(String);

    data.should.have.property('designNumber');
    data.designNumber.should.instanceOf(String);

    //Buyer
    data.should.have.property('buyerId');
    data.buyerId.should.instanceOf(Object);

    data.should.have.property('buyerCode');
    data.buyerCode.should.instanceOf(String);

    data.should.have.property('buyerName');
    data.buyerName.should.instanceOf(String);

    data.should.have.property('buyerAddress');
    data.buyerAddress.should.instanceOf(String);

    data.should.have.property('buyerType');
    data.buyerType.should.instanceOf(String);


    data.should.have.property('date');
    data.date.should.be.Object();

    data.should.have.property('packingUom');
    data.packingUom.should.instanceOf(String);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validatePackingItem(item);
    }

    data.should.have.property('construction');
    data.construction.should.instanceOf(String);

    data.should.have.property('colorCode');
    data.colorCode.should.instanceOf(String);

    data.should.have.property('colorName');
    data.colorName.should.instanceOf(String);

    data.should.have.property('colorType');
    data.colorType.should.instanceOf(String);

    data.should.have.property('materialConstructionFinishId');
    data.materialConstructionFinishId.should.instanceOf(Object);

    data.should.have.property('materialConstructionFinishName');
    data.materialConstructionFinishName.should.instanceOf(String);

    data.should.have.property('materialWidthFinish');
    data.materialWidthFinish.should.instanceOf(String);

    data.should.have.property('motif');
    data.motif.should.instanceOf(String);

    data.should.have.property('status');
    data.status.should.instanceOf(String);

    data.should.have.property('accepted');
    data.accepted.should.instanceOf(Boolean);

    data.should.have.property('declined');
    data.declined.should.instanceOf(Boolean);

    data.should.have.property('salesContractNo');
    data.salesContractNo.should.instanceOf(String);
};
