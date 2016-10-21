require("should");

var validatePurchaseOrderExternal = require('../purchasing/purchase-order-external-validator');
var validateProduct = require('../master/product-validator');
var validateUom = require('../master/uom-validator');
var validateCurrency = require('../master/currency-validator');

module.exports = function (data) {
    data.should.have.property('purchaseOrderExternalId');
    data.purchaseOrderExternalId.should.instanceOf(Object);
    
    data.should.have.property('purchaseOrderExternal');
    data.purchaseOrderExternal.should.instanceOf(Object);
    validatePurchaseOrderExternal(data.purchaseOrderExternal);
    
    data.should.have.property('purchaseRequestId');
    data.purchaseRequestId.should.instanceof(Object);
    
    data.should.have.property('purchaseRequest');
    data.purchaseRequest.should.instanceof(Object);
    
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
}