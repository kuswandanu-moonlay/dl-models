require("should");
var validateFabricGradeTest = require("./fabric-grade-test-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);
    
    data.should.have.property('code');
    data.code.should.be.String();
    
    data.should.have.property('dateIm');
    data.dateIm.should.instanceOf(Date);

    data.should.have.property('shiftIm');
    data.shiftIm.should.be.String();
    
    data.should.have.property('group');
    data.group.should.be.String();
    
    data.should.have.property('operatorIm');
    data.operatorIm.should.be.String();

    data.should.have.property('machineNoIm');
    data.machineNoIm.should.be.String();
    
    data.should.have.property('kanbanId');
    data.kanbanId.should.instanceOf(Object) 
     
    data.should.have.property('fabricGradeTests');
    data.fabricGradeTests.should.instanceOf(Array);
    for (var item of data.fabricGradeTests) {
        validateFabricGradeTest(item);
    }
};