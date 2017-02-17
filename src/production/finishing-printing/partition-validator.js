require("should");
var Uom = require("../../master/uom");
var validateUom = require('../../master/uom-validator');

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.be.String();

    data.should.have.property('no');
    data.no.should.be.String();

    data.should.have.property('lengthFabric');
    data.lengthFabric.should.instanceOf(Number);

    data.should.have.property('uomId');
    data.uomId.should.instanceOf(Object);

    data.should.have.property('uom');
    data.uom.should.instanceOf(Object);
    validateUom(data.uom);

    data.should.have.property('reference');
    data.reference.should.be.String();
};