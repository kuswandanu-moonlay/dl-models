require("should");
var validateUom = require('../master/uom-validator');
var validateSubItem = require('./sales-contract-sub-item-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('productionNo');
    data.productionNo.should.be.String();

    data.should.have.property('design');
    data.design.should.be.String();

    data.should.have.property('sphere');
    data.sphere.should.instanceOf(Number);

    data.should.have.property('uomId');
    data.uomId.should.instanceOf(Object);

    data.should.have.property('uom');
    data.uom.should.instanceOf(Object);
    validateUom(data.uom);

    data.should.have.property('subItems');
    data.subItems.should.instanceOf(Array);
    for (var subItem of data.subItems) {
        validateSubItem(subItem);
    }

};