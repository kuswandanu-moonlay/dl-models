require("should");
var validateProduct = require('../master/product-validator');
var validateUom = require('../master/uom-validator');
var validatePurchaseOrder = require('./purchase-order-validator');
var validateCurrency = require('../master/currency-validator');

module.exports = function (data) {
    data.should.have.property('product');
    data.product.should.instanceof(Object);
    validateProduct(data.product);

    data.should.have.property('deliveredQuantity');
    data.deliveredQuantity.should.instanceOf(Number);

    data.should.have.property('deliveredUom');
    data.deliveredUom.should.instanceOf(Object);
    validateUom(data.deliveredUom);

    data.should.have.property('purchaseOrderQuantity');
    data.purchaseOrderQuantity.should.instanceOf(Number);

    data.should.have.property('pricePerDealUnit');
    data.pricePerDealUnit.should.instanceOf(Number);
    
    data.should.have.property('currency');
    data.currency.should.instanceof(Object);
    validateCurrency(data.currency);

    data.should.have.property('currencyRate');
    data.currencyRate.should.instanceOf(Number);
    
    data.should.have.property('purchaseOrder');
    data.purchaseOrder.should.instanceOf(Object);
    validatePurchaseOrder(data.purchaseOrder);
    
    data.should.have.property('purchaseOrderId');
    data.purchaseOrderId.should.instanceof(Object);

    data.should.have.property('correction');
    data.correction.should.instanceOf(Array);
    
    data.should.have.property('remark');
    data.remark.should.instanceOf(String);
};