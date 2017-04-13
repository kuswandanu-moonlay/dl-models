require("should");
        
module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('lot');
    data.lot.should.instanceof(String); 

    data.should.have.property('grade');
    data.grade.should.instanceOf(String);

    data.should.have.property('weight');
    data.weight.should.instanceof(Number); 
    
    data.should.have.property('length');
    data.length.should.instanceof(Number); 
    
    data.should.have.property('quantity');
    data.quantity.should.instanceof(Number); 

    data.should.have.property('remark');
    data.remark.should.instanceof(String);
};
