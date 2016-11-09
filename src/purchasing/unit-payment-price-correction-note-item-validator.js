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
    validateProduct(data.product);
    
    data.should.have.property('quantity');
    data.quantity.should.instanceof(Number);
    
    data.should.have.property('uomId');
    data.uomId.should.instanceof(Object);
    
    data.should.have.property('uom');
    data.uom.should.instanceof(Object);
    validateUom(data.uom);
    
    data.should.have.property('pricePerUnit');
    data.pricePerUnit.should.instanceof(Number);
    
    data.should.have.property('priceTotal');
    data.priceTotal.should.instanceof(Number);
    
    data.should.have.property('currency');
    data.currency.should.instanceof(Object);
    validateCurrency(data.currency);

    data.should.have.property('currencyRate');
    data.currencyRate.should.instanceOf(Number);

    data.should.have.property('unitReceiptNoteNo');
    data.unitReceiptNoteNo.should.instanceOf(String);
}