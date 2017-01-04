require("should");
var validateUom = require('../master/uom-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.be.String();

    data.should.have.property('colour');
    data.colour.should.be.String();

    data.should.have.property('design');
    data.design.should.be.String();

    data.should.have.property('quantity');
    data.quantity.should.instanceOf(Number);

    data.should.have.property('uomId');
    data.uomId.should.instanceOf(Object);

    data.should.have.property('uom');
    data.uom.should.instanceOf(Object);
    validateUom(data.uom);

};