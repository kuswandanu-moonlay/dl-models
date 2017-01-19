require("should");
var validateUom = require('../../master/uom-validator');
var validateColorType = require('../../master/color-type-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('colorRequest');
    data.colorRequest.should.instanceOf(String);

    data.should.have.property('colorTemplate');
    data.colorTemplate.should.instanceOf(String);

    data.should.have.property('colorTypeId');
    data.colorTypeId.should.instanceof(Object);

    data.should.have.property('colorType');
    data.colorType.should.instanceOf(Object);
    validateColorType(data.colorType);

    data.should.have.property('quantity');
    data.quantity.should.instanceOf(Number);

    data.should.have.property('uomId');
    data.uomId.should.instanceof(Object);

    data.should.have.property('uom');
    data.uom.should.instanceOf(Object);
    validateUom(data.uom);

};