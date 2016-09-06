require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('unit');
    data.unit.should.instanceOf(String);
    
    data.should.have.property('PRDate');
    data.PRDate.should.instanceOf(Date);
    
    data.should.have.property('category');
    data.category.should.instanceOf(String);
    
    data.should.have.property('requestDate');
    data.requestDate.should.instanceOf(Date);
    
    data.should.have.property('staffName');
    data.staffName.should.instanceOf(String);
    
    data.should.have.property('receiveDate');
    data.receiveDate.should.instanceOf(Date);
    
}