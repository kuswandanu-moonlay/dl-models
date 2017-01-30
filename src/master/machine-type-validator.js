require("should");
var machineTypeIndicators = require('./machine-type-indicator-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('name');
    data.name.should.instanceOf(String);

    data.should.have.property('description');
    data.description.should.instanceOf(String);

    data.should.have.property('indicators');
    data.indicators.should.be.Array();

    for (var indicator of data.indicators) {
        machineTypeIndicators(indicator);
    }
};