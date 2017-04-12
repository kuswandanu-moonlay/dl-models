require("should");
var validatePackingItem = require("./packing-item-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('productionOrderId');
    data.productionOrderId.should.be.Object();

    data.should.have.property('productionOrderNo');
    data.productionOrderNo.should.instanceOf(String);

    data.should.have.property('buyer');
    data.buyer.should.instanceof(String);
    
    data.should.have.property('buyerLocation');
    data.buyerLocation.should.instanceof(String);
    
    data.should.have.property('date');
    data.date.should.be.Object();

    data.should.have.property('packingUom');
    data.packingUom.should.instanceof(String);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validatePackingItem(item);
    }

    data.should.have.property('colorCode');
    data.colorCode.should.instanceof(String);
    
    data.should.have.property('colorName');
    data.colorName.should.instanceof(String);
    
    data.should.have.property('construction');
    data.construction.should.instanceof(String);
    
    data.should.have.property('motif');
    data.motif.should.instanceof(String);

    data.should.have.property('status');
    data.status.should.instanceof(String);

    data.should.have.property('accepted');
    data.accepted.should.instanceof(Boolean);

    data.should.have.property('declined');
    data.declined.should.instanceof(Boolean);
};
