require("should");
var validateItem = require('./weekly-plan-item-validator');
var validateUnit = require('../master/unit-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('year');
    data.year.should.be.instanceOf(Number);

    data.should.have.property('unitId');
    data.unitId.should.instanceOf(Object);

    data.should.have.property('unit');
    data.unit.should.instanceOf(Object);
    validateUnit(data.unit);

    data.should.have.property('items');
    data.items.should.instanceof(Array); 

    for (var item of data.items) {
        validateItem(item);
    }
};