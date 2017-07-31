require("should");
var validateFPReturToQCDetail = require("./fp-retur-to-qc-doc-detail-validator");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('productionOrderId');
    data.productionOrderId.should.instanceof(Object);

    data.should.have.property('productionOrderNo');
    data.productionOrderNo.should.instanceof(String);

    data.should.have.property('packingId');
    data.packingId.should.instanceof(Object);

    data.should.have.property('packingCode');
    data.packingCode.should.instanceof(String);

    data.should.have.property('details');
    data.details.should.instanceOf(Array);
    for (var item of data.details) {
        validateFPReturToQCDetail(item);
    }

};