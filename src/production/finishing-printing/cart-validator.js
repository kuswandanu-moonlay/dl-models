require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String);
    
    data.should.have.property('cartNumber');
    data.cartNumber.should.be.String();

    data.should.have.property('qty');
    data.qty.should.instanceOf(Number);

    data.should.have.property('pcs');
    data.pcs.should.instanceOf(Number);
};