require("should");
var validateLampStandard = require('../master/lamp-standard-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('lampStandardId');
    data.lampStandardId.should.instanceof(Object);

    data.should.have.property('lampStandard');
    data.lampStandard.should.instanceof(Object);
    validateLampStandard(data.lampStandard);
};