require("should");
var validateCriterion = require("./fabric-test-criterion-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('pointSystem');
    data.pointSystem.should.instanceOf(Number); 
    
    data.should.have.property('type');
    data.type.should.be.String();

    data.should.have.property('pcsNo');
    data.pcsNo.should.be.String();
    
    data.should.have.property('grade');
    data.grade.should.be.String();
    
    data.should.have.property('width');
    data.width.should.instanceOf(Number); 

    data.should.have.property('initLength');
    data.initLength.should.instanceOf(Number);
    
    data.should.have.property('avalLength');
    data.avalLength.should.instanceOf(Number);
    
    data.should.have.property('sampleLength');
    data.sampleLength.should.instanceOf(Number);
    
    data.should.have.property('finalLength');
    data.finalLength.should.instanceOf(Number);
      
    data.should.have.property('score');
    data.score.should.instanceOf(Number);
      
    data.should.have.property('finalScore');
    data.finalScore.should.instanceOf(Number);
    
    
    data.should.have.property('criteria');
    data.criteria.should.instanceOf(Array);
    for (var criterion of data.criteria) {
        validateCriterion(criterion);
    }
};