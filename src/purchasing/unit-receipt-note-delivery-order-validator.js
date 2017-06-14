require("should");
var validateSupplier = require('../master/supplier-validator');
var validateDeliveryOrderItem = require('../purchasing/delivery-order-item-validator');

module.exports = function (data) {
    data.should.have.property('no');
    data.no.should.instanceOf(String);

    data.should.have.property('refNo');
    data.refNo.should.instanceOf(String);

    data.should.have.property('date');
    data.date.should.instanceOf(Date);

    data.should.have.property('supplierDoDate');
    data.supplierDoDate.should.instanceOf(Date);

    data.should.have.property('supplierId');
    data.supplierId.should.instanceof(Object);

    data.should.have.property('supplier');
    data.supplier.should.instanceof(Object);

    data.should.have.property('supplier');
    data.supplier.should.instanceof(Object);

    data.supplier.should.have.property('code');
    data.supplier.code.should.instanceof(String);

    data.supplier.should.have.property('name');
    data.supplier.name.should.instanceof(String);

    data.should.have.property('isPosted');
    data.isPosted.should.instanceOf(Boolean);

    data.should.have.property('isClosed');
    data.isClosed.should.instanceOf(Boolean);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var poItem of data.items) {
        poItem.should.have.property('purchaseOrderExternalId');
        poItem.purchaseOrderExternalId.should.instanceOf(Object);

        poItem.should.have.property('purchaseOrderExternal');
        poItem.purchaseOrderExternal.should.instanceOf(Object);

        poItem.purchaseOrderExternal.should.have.property('no');
        poItem.purchaseOrderExternal.no.should.instanceOf(String);

        poItem.should.have.property('isClosed');
        poItem.isClosed.should.instanceOf(Boolean);

        poItem.should.have.property('fulfillments');
        poItem.fulfillments.should.instanceOf(Array);
        for (var fulfillment of poItem.fulfillments) {
            fulfillment.should.have.property('purchaseOrderId');
            fulfillment.purchaseOrderId.should.instanceOf(Object);

            fulfillment.should.have.property('purchaseOrder');
            fulfillment.purchaseOrder.should.instanceOf(Object);

            fulfillment.purchaseOrder.should.have.property('purchaseOrderExternal');
            fulfillment.purchaseOrder.purchaseOrderExternal.should.instanceof(Object);

            fulfillment.purchaseOrder.purchaseOrderExternal.should.have.property('no');
            fulfillment.purchaseOrder.purchaseOrderExternal.no.should.instanceOf(String);

            fulfillment.purchaseOrder.should.have.property('currency');
            fulfillment.purchaseOrder.currency.should.instanceof(Object);

            fulfillment.purchaseOrder.currency.should.have.property('code');
            fulfillment.purchaseOrder.currency.code.should.instanceOf(String);

            fulfillment.purchaseOrder.currency.should.have.property('symbol');
            fulfillment.purchaseOrder.currency.symbol.should.instanceOf(String);

            fulfillment.purchaseOrder.currency.should.have.property('rate');
            fulfillment.purchaseOrder.currency.rate.should.instanceOf(Number);

            fulfillment.purchaseOrder.should.have.property('categoryId');
            fulfillment.purchaseOrder.categoryId.should.instanceof(Object);

            fulfillment.purchaseOrder.should.have.property('category');
            fulfillment.purchaseOrder.category.should.instanceof(Object);

            fulfillment.purchaseOrder.should.have.property('unitId');
            fulfillment.purchaseOrder.unitId.should.instanceof(Object);

            fulfillment.purchaseOrder.should.have.property('unit');
            fulfillment.purchaseOrder.unit.should.instanceof(Object);

            fulfillment.purchaseOrder.unit.should.have.property('code');
            fulfillment.purchaseOrder.unit.code.should.instanceof(String);

            fulfillment.purchaseOrder.unit.should.have.property('name');
            fulfillment.purchaseOrder.unit.name.should.instanceof(String);

            fulfillment.purchaseOrder.should.have.property('purchaseRequest');
            fulfillment.purchaseOrder.purchaseRequest.should.instanceof(Object);

            fulfillment.purchaseOrder.purchaseRequest.should.have.property('no');
            fulfillment.purchaseOrder.purchaseRequest.no.should.instanceOf(String);

            for (var poItem of fulfillment.purchaseOrder.items) {
                poItem.should.have.property('useIncomeTax');
                poItem.useIncomeTax.should.instanceof(Boolean);

                poItem.should.have.property('product');
                poItem.product.should.instanceof(Object);

                poItem.product.should.have.property('code');
                poItem.product.code.should.instanceOf(String);

                poItem.product.should.have.property('name');
                poItem.product.name.should.instanceOf(String);

                poItem.should.have.property('pricePerDealUnit');
                poItem.pricePerDealUnit.should.instanceOf(Number);

                poItem.should.have.property('useIncomeTax');
                poItem.useIncomeTax.should.instanceOf(Boolean);
            }

            fulfillment.should.have.property('productId');
            fulfillment.productId.should.instanceOf(Object);

            fulfillment.should.have.property('product');
            fulfillment.product.should.instanceOf(Object);

            fulfillment.product.should.have.property('code');
            fulfillment.product.code.should.instanceOf(String);

            fulfillment.product.should.have.property('name');
            fulfillment.product.name.should.instanceOf(String);

            fulfillment.should.have.property('purchaseOrderQuantity');
            fulfillment.purchaseOrderQuantity.should.instanceOf(Number);

            fulfillment.should.have.property('purchaseOrderUom');
            fulfillment.purchaseOrderUom.should.instanceOf(Object);

            fulfillment.purchaseOrderUom.should.have.property('unit');
            fulfillment.purchaseOrderUom.unit.should.instanceOf(String);

            fulfillment.should.have.property('deliveredQuantity');
            fulfillment.deliveredQuantity.should.instanceOf(Number);

            fulfillment.should.have.property('realizationQuantity');
            fulfillment.realizationQuantity.should.instanceOf(Array);

        }
    }
};