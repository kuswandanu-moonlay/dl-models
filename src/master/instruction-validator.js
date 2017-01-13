require("should");
var validateOrderType=require('./order-type-validator');
var validateProduct = require('./product-validator');
var validateColorType=require('./color-type-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('materialId');
    data.materialId.should.instanceof(Object);

    data.should.have.property('material');
    data.material.should.instanceof(Object);
    validateProduct(data.material);
    
    data.should.have.property('orderTypeId');
    data.orderTypeId.should.be.Object();
    
    data.should.have.property('orderType');
    data.orderType.should.instanceof(Object);
    validateOrderType(data.orderType);
    
    data.should.have.property('colorTypeId');
    data.colorTypeId.should.be.Object();
    
    data.should.have.property('colorType');
    data.colorType.should.instanceof(Object);
    validateColorType(data.colorType);

    data.should.have.property('construction');
    data.construction.should.be.String();

    data.should.have.property('steps');
    data.steps.should.instanceOf(Array);
};