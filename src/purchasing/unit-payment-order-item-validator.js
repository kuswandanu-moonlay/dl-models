require("should");
var validateUnitReceiptNote = require('./unit-receipt-note-validator');
var validateProduct = require('../master/product-validator');
var validateUom = require('../master/uom-validator');

module.exports = function (data) {
    data.should.have.property('unitReceiptNoteId');
    data.unitReceiptNoteId.should.instanceof(Object);

    data.should.have.property('unitReceiptNote');
    data.unitReceiptNote.should.instanceof(Object);
    // validateUnitReceiptNote(data.unitReceiptNote); 

    data.unitReceiptNote.should.have.property('no');
    data.unitReceiptNote.no.should.instanceOf(String);

    data.unitReceiptNote.should.have.property('deliveryOrder');
    data.unitReceiptNote.deliveryOrder.should.instanceof(Object);

    data.unitReceiptNote.deliveryOrder.should.have.property('no');
    data.unitReceiptNote.deliveryOrder.no.should.instanceOf(String);

    data.unitReceiptNote.should.have.property('items');
    data.unitReceiptNote.items.should.instanceOf(Array);
    for (var item of data.unitReceiptNote.items) {

        item.should.have.property('product');
        item.product.should.instanceof(Object);

        item.product.should.have.property('code');
        item.product.code.should.instanceOf(String);

        item.product.should.have.property('name');
        item.product.name.should.instanceOf(String);

        item.should.have.property('deliveredQuantity');
        item.deliveredQuantity.should.instanceof(Number);

        item.should.have.property('deliveredUom');
        item.deliveredUom.should.instanceof(Object);

        item.deliveredUom.should.have.property('unit');
        item.deliveredUom.unit.should.instanceOf(String);

        item.should.have.property('pricePerDealUnit');
        item.pricePerDealUnit.should.instanceof(Number);

        item.should.have.property('currency');
        item.currency.should.instanceof(Object);

        item.currency.should.have.property('code');
        item.currency.code.should.instanceOf(String);

        item.currency.should.have.property('symbol');
        item.currency.symbol.should.instanceOf(String);

        item.currency.should.have.property('rate');
        item.currency.rate.should.instanceOf(Number);

        item.should.have.property('currencyRate');
        item.currencyRate.should.instanceof(Number);

        item.should.have.property('correction');
        item.correction.should.instanceOf(Array);

        item.should.have.property('purchaseOrderId');
        item.purchaseOrderId.should.instanceof(Object);

        item.should.have.property('purchaseOrder');
        item.purchaseOrder.should.instanceof(Object);

        item.purchaseOrder.should.have.property('purchaseOrderExternal');
        item.purchaseOrder.purchaseOrderExternal.should.instanceof(Object);

        item.purchaseOrder.purchaseOrderExternal.should.have.property('no');
        item.purchaseOrder.purchaseOrderExternal.no.should.instanceOf(String);

        item.purchaseOrder.should.have.property('currency');
        item.purchaseOrder.currency.should.instanceof(Object);

        item.purchaseOrder.currency.should.have.property('code');
        item.purchaseOrder.currency.code.should.instanceOf(String);

        item.purchaseOrder.currency.should.have.property('symbol');
        item.purchaseOrder.currency.symbol.should.instanceOf(String);

        item.purchaseOrder.currency.should.have.property('rate');
        item.purchaseOrder.currency.rate.should.instanceOf(Number);

        item.purchaseOrder.should.have.property('categoryId');
        item.purchaseOrder.categoryId.should.instanceof(Object);

        item.purchaseOrder.should.have.property('category');
        item.purchaseOrder.category.should.instanceof(Object);

        item.purchaseOrder.should.have.property('purchaseRequest');
        item.purchaseOrder.purchaseRequest.should.instanceof(Object);

        item.purchaseOrder.purchaseRequest.should.have.property('no');
        item.purchaseOrder.purchaseRequest.no.should.instanceOf(String);
        for (var poItem of item.purchaseOrder.items) {
            poItem.should.have.property('useIncomeTax');
            poItem.useIncomeTax.should.instanceof(Boolean);

            poItem.should.have.property('product');
            poItem.product.should.instanceof(Object);

            poItem.product.should.have.property('code');
            poItem.product.code.should.instanceOf(String);

            poItem.product.should.have.property('name');
            poItem.product.name.should.instanceOf(String);
        }
    }
};