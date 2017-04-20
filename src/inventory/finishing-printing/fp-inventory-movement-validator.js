require("should");
var validateUom = require('../../master/uom-validator'); 
        
module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('date');
    data.date.should.instanceof(Object);

    data.should.have.property('productionOrderId');
    data.productionOrderId.should.instanceof(Object);
    
    data.should.have.property('productionOrderNo');
    data.productionOrderNo.should.be.String();
    
    data.should.have.property('packingId');
    data.packingId.should.instanceof(Object);
    
    data.should.have.property('packingCode');
    data.packingCode.should.be.String();
    
    data.should.have.property('colorCode');
    data.colorCode.should.be.String();
    
    data.should.have.property('colorName');
    data.colorName.should.be.String();
    
    data.should.have.property('grade');
    data.grade.should.be.String();
    
    data.should.have.property('lot');
    data.lot.should.be.String();
    
    data.should.have.property('uom');
    data.uom.should.be.String();

    data.should.have.property('weight');
    data.weight.should.instanceOf(Number);

    data.should.have.property('length');
    data.length.should.instanceOf(Number);
    
    data.should.have.property('quantity');
    data.quantity.should.instanceOf(Number);
  
    data.should.have.property('type');
    data.type.should.be.String(); 
};