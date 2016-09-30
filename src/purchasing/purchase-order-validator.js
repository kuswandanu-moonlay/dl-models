require("should");
var validatePurchaseOrderItem = require('./purchase-order-item-validator');
var validateBuyer = require('../master/buyer-validator');
var validateSupplier = require('../master/supplier-validator');
var validateCurrency = require('../master/currency-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('no');
    data.no.should.be.String();

    data.should.have.property('refNo');
    data.refNo.should.be.String();

    data.should.have.property('iso');
    data.iso.should.be.String();

    data.should.have.property('realizationOrderId');
    data.realizationOrderId.should.instanceof(Object);

    data.should.have.property('realizationOrder');
    data.realizationOrder.should.instanceof(Object);

    data.should.have.property('purchaseRequestId');
    data.purchaseRequestId.should.instanceof(Object);

    data.should.have.property('purchaseRequest');
    data.purchaseRequest.should.instanceof(Object);

    data.should.have.property('buyerId');
    data.buyerId.should.instanceof(Object);

    data.should.have.property('buyer');
    data.buyer.should.instanceof(Object);
    validateBuyer(data.buyer);

    data.should.have.property('purchaseOrderExternalId');
    data.purchaseOrderExternalId.should.instanceof(Object);

    data.should.have.property('purchaseOrderExternal');
    data.purchaseOrderExternal.should.instanceof(Object);

    data.should.have.property('supplierId');
    data.supplierId.should.instanceof(Object);

    data.should.have.property('supplier');
    data.supplier.should.instanceof(Object);
    validateSupplier(data.supplier);
    
    data.should.have.property('unitId');
    data.unitId.should.instanceof(Object);

    data.should.have.property('unit');
    data.unit.should.instanceof(Object);
    
    data.should.have.property('categoryId');
    data.categoryId.should.instanceof(Object);

    data.should.have.property('category');
    data.category.should.instanceof(Object);
    

    data.should.have.property('freightCostBy');
    data.freightCostBy.should.instanceOf(String);

    data.should.have.property('currency');
    data.supplier.should.instanceof(Object);
    validateCurrency(data.currency);

    data.should.have.property('currencyRate');
    data.currencyRate.should.instanceOf(Number);
    
    data.should.have.property('paymentMethod');
    data.paymentMethod.should.instanceOf(String);

    data.should.have.property('paymentDueDays');
    data.paymentDueDays.should.instanceOf(Number);
   
    data.should.have.property('useVat');
    data.useVat.should.instanceOf(Boolean);

    data.should.have.property('vatRate');
    data.vatRate.should.instanceOf(Number);

    data.should.have.property('useIncomeTax');
    data.useIncomeTax.should.instanceOf(Boolean);

    data.should.have.property('date');
    data.date.should.instanceof(Date);
    
    data.should.have.property('expectedDeliveryDate');
    data.expectedDeliveryDate.should.instanceof(Date);
    
    data.should.have.property('actualDeliveryDate');
    data.actualDeliveryDate.should.instanceof(Date);
    
    data.should.have.property('isPosted');
    data.isPosted.should.instanceOf(Boolean);
    
    data.should.have.property('isClosed');
    data.isClosed.should.instanceOf(Boolean);
    
    data.should.have.property('remark');
    data.remark.should.instanceOf(String);
    
    data.should.have.property('items');
    data.items.should.instanceOf(Array); 
    for (var item of data.items) {
        validatePurchaseOrderItem(item);
    }
}