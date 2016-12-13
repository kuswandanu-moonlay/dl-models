require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);
    
    data.should.have.property('processType');
    data.processType.should.be.String();

    data.should.have.property('construction');
    data.construction.should.be.String();

    data.should.have.property('material');
    data.material.should.be.String();

    data.should.have.property('steps');
    data.steps.should.instanceOf(Array);
};