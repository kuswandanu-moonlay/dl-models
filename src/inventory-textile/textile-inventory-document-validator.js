require("should");

var validateTextileInventoryDocumentItem = require('./textile-inventory-document-item-validator'); 
        
module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);
    
    data.should.have.property('referenceNo');
    data.referenceNo.should.be.String();
    data.should.have.property('referenceType');
    data.referenceType.should.be.String();
    
    data.should.have.property('type');
    data.type.should.be.String();
    
    data.should.have.property('date');
    data.date.should.instanceof(Object);  

    data.should.have.property('storageId');
    data.storageId.should.instanceof(Object);

    data.should.have.property('storageCode');
    data.storageCode.should.instanceof(String); 
    
    data.should.have.property('storageName');
    data.storageName.should.be.String(); 
    
    data.should.have.property('items');
    data.items.should.instanceof(Array);

    for (var item of data.items) {
        validateTextileInventoryDocumentItem(item);
    }
    
    data.should.have.property('remark');
    data.remark.should.be.String();
};