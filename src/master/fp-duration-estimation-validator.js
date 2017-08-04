require("should");
var validateProcessType = require('./process-type-validator');
var validateArea = require('./fp-duration-estimation-area-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('processTypeId');
    data.processTypeId.should.instanceof(Object);

    data.should.have.property('processType');
    data.processType.should.instanceof(Object);
    validateProcessType(data.processType);

    data.should.have.property('areas');
    data.areas.should.instanceOf(Array);
    for (var area of data.areas) {
        validateArea(area);
    }
};