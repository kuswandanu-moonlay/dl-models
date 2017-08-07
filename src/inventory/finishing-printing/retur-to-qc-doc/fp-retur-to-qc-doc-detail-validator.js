require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('productId');
    data.productId.should.instanceof(Object);

    data.should.have.property('productName');
    data.productName.should.instanceof(String);

    data.should.have.property('designNumber');
    data.designNumber.should.instanceof(String);

    data.should.have.property('designCode');
    data.designCode.should.instanceof(String);

    data.should.have.property('remark');
    data.remark.should.be.String();

    data.should.have.property('colorWay');
    data.colorWay.should.instanceof(String);

    data.should.have.property('quantityBefore');
    data.quantityBefore.should.instanceof(Number);

    data.should.have.property('returQuantity');
    data.returQuantity.should.instanceof(Number);

    data.should.have.property('uomId');
    data.uomId.should.instanceof(Object);

    data.should.have.property('uom');
    data.uom.should.instanceof(String);

    data.should.have.property('length');
    data.length.should.instanceof(Number);

    data.should.have.property('weight');
    data.weight.should.instanceof(Number);

};