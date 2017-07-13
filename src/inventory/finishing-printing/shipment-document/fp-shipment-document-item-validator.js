require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('productId');
    data.productId.should.instanceof(Object);

    data.should.have.property('productCode');
    data.productCode.should.instanceof(String);

    data.should.have.property('productName');
    data.productName.should.instanceof(String);

    //
    data.should.have.property('designCode');
    data.remark.should.instanceof(String);

    data.should.have.property('designNumber');
    data.designNumber.should.instanceof(String);

    data.should.have.property('colorType');
    data.colorType.should.instanceof(String);

    //
    data.should.have.property('uomId');
    data.uomId.should.instanceof(Object);

    data.should.have.property('uomUnit');
    data.uomUnit.should.instanceof(String);

    //
    data.should.have.property('quantity');
    data.quantity.should.instanceof(Number);

    data.should.have.property('length');
    data.length.should.instanceof(Number);

    data.should.have.property('weight');
    data.weight.should.instanceof(Number);

    //
    data.should.have.property('remark');
    data.remark.should.instanceof(String);
};