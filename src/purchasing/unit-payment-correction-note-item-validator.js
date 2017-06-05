require("should");

var validateProduct = require('../master/product-validator');
var validateUom = require('../master/uom-validator');
var validateCurrency = require('../master/currency-validator');
var validatePurchaseOrder = require('./purchase-order-validator');

module.exports = function (data) {
    data.should.have.property('purchaseOrderId');
    data.purchaseOrderId.should.instanceof(Object);

    data.should.have.property('purchaseOrder');
    data.purchaseOrder.should.instanceof(Object);
    validatePurchaseOrder(data.purchaseOrder);

    data.should.have.property('productId');
    data.productId.should.instanceof(Object);

    data.should.have.property('product');
    data.product.should.instanceof(Object);
    
    // validateProduct
    data.product.should.have.property('code');
    data.product.code.should.instanceOf(String);

    data.product.should.have.property('name');
    data.product.name.should.instanceOf(String);
    //-- end validateProduct

    data.should.have.property('quantity');
    data.quantity.should.instanceof(Number);

    data.should.have.property('uomId');
    data.uomId.should.instanceof(Object);

    data.should.have.property('uom');
    data.uom.should.instanceof(Object);

    // validateUom
    data.uom.should.have.property('unit');
    data.uom.unit.should.instanceOf(String);
    //-- end validateUom

    data.should.have.property('pricePerUnit');
    data.pricePerUnit.should.instanceof(Number);

    data.should.have.property('priceTotal');
    data.priceTotal.should.instanceof(Number);

    data.should.have.property('currency');
    data.currency.should.instanceof(Object);

    // validateCurrency
    data.currency.should.have.property('code');
    data.currency.code.should.instanceOf(String);

    data.currency.should.have.property('symbol');
    data.currency.symbol.should.instanceOf(String);

    data.currency.should.have.property('rate');
    data.currency.rate.should.instanceOf(Number);
    //-- end validateCurrency

    data.should.have.property('currencyRate');
    data.currencyRate.should.instanceOf(Number);

    data.should.have.property('unitReceiptNoteNo');
    data.unitReceiptNoteNo.should.instanceOf(String);
};