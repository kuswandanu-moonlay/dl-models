require("should");
module.exports = function (data) {
    data.should.have.property('code');
    data.code.should.instanceOf(String);
    
    data.should.have.property('name');
    data.name.should.instanceOf(String);
    
    data.should.have.property('description');
    data.description.should.instanceOf(String);
    
    data.should.have.property('description');
    data.description.should.instanceOf(Number);
    
    data.should.have.property('totalSJ');
    data.totalSJ.should.instanceOf(Number);
    
    data.should.have.property('unit');
    data.unit.should.instanceOf(String);
    
    data.should.have.property('price');
    data.price.should.instanceOf(Number);
    
}