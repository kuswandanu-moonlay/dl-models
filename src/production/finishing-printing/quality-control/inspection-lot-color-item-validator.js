require("should");
        
module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('pcsNo');
    data.pcsNo.should.instanceof(String);

    data.should.have.property('lot');
    data.lot.should.instanceof(String);

    data.should.have.property('status');
    data.status.should.instanceof(String);
};