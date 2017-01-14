require("should"); 
var validateOrderType=require('./order-type-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.be.String();

    data.should.have.property('orderTypeId');
    data.orderTypeId.should.be.Object();
    
    data.should.have.property('orderType');
    data.orderType.should.instanceof(Object);
    validateOrderType(data.orderType);

    data.should.have.property('name');
    data.name.should.be.String();

    data.should.have.property('remark');
    data.remark.should.be.String(); 
    
};