require("should");
// var machineTypeIndicators = require('./machine-type-indicator-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('indicator');
    data.indicator.should.instanceOf(String);

    data.should.have.property('dataType');
    data.dataType.should.instanceOf(String);

    data.should.have.property('defaultValue');

    data.should.have.property('value');

    data.should.have.property('uom');
    data.uom.should.instanceOf(String);

};