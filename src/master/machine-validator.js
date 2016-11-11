require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);
    
    
    data.should.have.property('code');
    data.code.should.instanceOf(String);
    
    data.should.have.property('name');
    data.name.should.instanceOf(String);

    data.should.have.property('unit');
    data.unit.should.instanceOf(String);

    data.should.have.property('process');
    data.process.should.instanceOf(String);
    
    data.should.have.property('manufacture');
    data.manufacture.should.instanceOf(String);
    
    data.should.have.property('year');
    data.year.should.instanceOf(Number);
    
    data.should.have.property('machineCondition');
    data.machineCondition.should.instanceOf(String);
}