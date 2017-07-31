require("should");
var validateFPReturToQCItem = require("./fp-retur-to-qc-doc-item-validator");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('returNo');
    data.returNo.should.instanceof(String);

    data.should.have.property('destination');
    data.destination.should.instanceof(String);

    data.should.have.property('remark');
    data.remark.should.be.String();

    data.should.have.property('date');
    data.date.should.instanceof(Object);

    data.should.have.property('materialId');
    data.materialId.should.instanceof(Object);

    data.should.have.property('materialName');
    data.materialName.should.instanceof(String);

    data.should.have.property('materialCode');
    data.materialCode.should.instanceof(String);

    data.should.have.property('materialConstructionId');
    data.materialConstructionId.should.instanceof(Object);

    data.should.have.property('materialConstructionName');
    data.materialConstructionName.should.instanceof(String);

    data.should.have.property('materialConstructionCode');
    data.materialConstructionCode.should.instanceof(String);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validateFPReturToQCItem(item);
    }

};