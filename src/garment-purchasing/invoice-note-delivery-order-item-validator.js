require("should");

module.exports = function (data) {
    data.should.have.property('purchaseOrderExternalId');
    data.purchaseOrderExternalId.should.instanceOf(Object);

    data.should.have.property('purchaseOrderExternalNo');
    data.purchaseOrderExternalNo.should.be.String();

    data.should.have.property('purchaseOrderId');
    data.purchaseOrderId.should.instanceOf(Object);

    data.should.have.property('purchaseOrderNo');
    data.purchaseOrderNo.should.instanceOf(String);

    data.should.have.property('purchaseRequestId');
    data.purchaseRequestId.should.instanceOf(Object);

    data.should.have.property('purchaseRequestNo');
    data.purchaseRequestNo.should.instanceOf(String);

    data.should.have.property('productId');
    data.productId.should.instanceOf(Object);

    data.should.have.property('product');
    data.product.should.instanceOf(Object);

    data.product.should.have.property('code');
    data.product.code.should.instanceOf(String);

    data.product.should.have.property('name');
    data.product.name.should.instanceOf(String);

    data.should.have.property('purchaseOrderQuantity');
    data.purchaseOrderQuantity.should.instanceOf(Number);

    data.should.have.property('purchaseOrderUom');
    data.purchaseOrderUom.should.instanceOf(Object);

    data.purchaseOrderUom.should.have.property('unit');
    data.purchaseOrderUom.unit.should.instanceOf(String);

    data.should.have.property('deliveredQuantity');
    data.deliveredQuantity.should.instanceOf(Number);

    data.should.have.property('pricePerDealUnit');
    data.pricePerDealUnit.should.instanceOf(Number);

    data.should.have.property('paymentMethod');
    data.paymentMethod.should.instanceOf(String);

    data.should.have.property('paymentType');
    data.paymentType.should.instanceOf(String);

    data.should.have.property('paymentDueDays');
    data.paymentDueDays.should.instanceOf(Number);
};