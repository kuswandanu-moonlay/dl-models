require("should"); 
        
module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);
    
    data.should.have.property('referenceNo');
    data.referenceNo.should.be.String();
    data.should.have.property('referenceType');
    data.referenceType.should.be.String();
    
    data.should.have.property('date');
    data.date.should.instanceof(Object);


    data.should.have.property('productId');
    data.productId.should.instanceof(Object);
    
    data.should.have.property('productCode');
    data.productCode.should.instanceof(String); 

    data.should.have.property('productName');
    data.productName.should.be.String();
    

    data.should.have.property('storageId');
    data.storageId.should.instanceof(Object);

    data.should.have.property('storageCode');
    data.storageCode.should.instanceof(String); 
    
    data.should.have.property('storageName');
    data.storageName.should.be.String();
    
    
    data.should.have.property('before');
    data.before.should.instanceOf(Number);
    
    data.should.have.property('stockPlanning');
    data.stockPlanning.should.instanceOf(Number);
    // data.should.have.property('secondBefore');
    // data.secondBefore.should.instanceOf(Number);

    // data.should.have.property('thirdBefore');
    // data.thirdBefore.should.instanceOf(Number);
    
    data.should.have.property('quantity');
    data.quantity.should.instanceOf(Number);
    
    // data.should.have.property('secondQuantity');
    // data.secondQuantity.should.instanceOf(Number);

    // data.should.have.property('thirdQuantity');
    // data.thirdQuantity.should.instanceOf(Number);
    
    data.should.have.property('after');
    data.after.should.instanceOf(Number); 
    
    // data.should.have.property('secondAfter');
    // data.secondAfter.should.instanceOf(Number);

    // data.should.have.property('thirdAfter');
    // data.thirdAfter.should.instanceOf(Number);
    
    data.should.have.property('uomId');
    data.uomId.should.instanceof(Object);
    
    data.should.have.property('uom');
    data.uom.should.be.String();

    // data.should.have.property('secondUomId');
    // data.secondUomId.should.instanceof(Object);
    
    // data.should.have.property('secondUom');
    // data.secondUom.should.be.String();

    // data.should.have.property('thirdUomId');
    // data.thirdUomId.should.instanceof(Object);
    
    // data.should.have.property('thirdUom');
    // data.uom.should.be.String();
    
    data.should.have.property('remark');
    data.remark.should.be.String();

    data.should.have.property('type');
    data.type.should.be.String();
};