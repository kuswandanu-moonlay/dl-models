require("should");

module.exports = function (data) {
    data.should.have.property('purchaseOrderExternalId');
    data.purchaseOrderExternalId.should.instanceof(Object);

    data.should.have.property('purchaseOrderExternalNo');
    data.purchaseOrderExternalNo.should.instanceOf(String);

    data.should.have.property('purchaseOrderInternalId');
    data.purchaseOrderInternalId.should.instanceof(Object);

    data.should.have.property('purchaseOrderInternalNo');
    data.purchaseOrderInternalNo.should.instanceOf(String);

    data.should.have.property('purchaseOrderInternal');
    data.purchaseOrderInternal.should.instanceof(Object);

    data.should.have.property('purchaseRequestId');
    data.purchaseRequestId.should.instanceof(Object);

    data.should.have.property('purchaseRequestNo');
    data.purchaseRequestNo.should.instanceOf(String);

    data.should.have.property('purchaseRequestRefNo');
    data.purchaseRequestRefNo.should.instanceOf(String);

    data.should.have.property('roNo');
    data.roNo.should.be.String();

    data.should.have.property('productId');
    data.productId.should.instanceof(Object);

    data.should.have.property('product');
    data.product.should.instanceof(Object);

    data.should.have.property('quantity');
    data.quantity.should.instanceof(Number);

    data.should.have.property('uomId');
    data.uomId.should.instanceof(Object);

    data.should.have.property('uom');
    data.uom.should.instanceof(Object);

    data.should.have.property('pricePerUnit');
    data.pricePerUnit.should.instanceOf(Number);

    data.should.have.property('priceTotal');
    data.priceTotal.should.instanceof(Number);

    data.should.have.property('currency');
    data.currency.should.instanceof(Object);

    data.should.have.property('currencyRate');
    data.currencyRate.should.instanceOf(Number);
};