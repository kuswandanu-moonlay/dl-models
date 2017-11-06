require("should");
var validateUnit = require('../master/unit-validator');
var validateItem = require('./weekly-plan-item-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('unitId');
    data.unitId.should.instanceof(Object);

    data.should.have.property('unit');
    data.unit.should.instanceof(Object);
    validateUnit(data.unit);

    data.should.have.property('year');
    data.year.should.be.instanceOf(Number);

    data.should.have.property('items');
    data.items.should.instanceof(Array); 

    for (var item of data.items) {
        validateItem(item);
    }
};