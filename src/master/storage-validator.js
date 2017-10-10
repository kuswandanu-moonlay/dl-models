require("should");
var validateUnit=require('./unit-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('name');
    data.name.should.instanceOf(String);
    
    data.should.have.property('unitId');
    data.unitId.should.instanceOf(Object);

    data.should.have.property('unit');
    data.unit.should.instanceof(Object);
    validateUnit(data.unit);

    data.should.have.property('description');
    data.description.should.instanceOf(String); 
}; 
