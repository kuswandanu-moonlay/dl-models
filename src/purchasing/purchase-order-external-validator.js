require("should");
var validatePurchaseOrder = require('./purchase-order-validator');
var validateSupplier = require('../master/supplier-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('no');
    data.no.should.be.String();

    data.should.have.property('supplierId');
    data.supplierId.should.instanceof(Object);

    data.should.have.property('supplier');
    data.supplier.should.instanceof(Object);
    validateSupplier(data.supplier);

    data.should.have.property('freightCostBy');
    data.freightCostBy.should.instanceOf(String);

    data.should.have.property('currency');
    data.currency.should.instanceOf(String);

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

    data.should.have.property('remark');
    data.remark.should.instanceOf(String);
    
    data.should.have.property('items');
    data.items.should.instanceOf(Array); 
    for (var item of data.items) {
        validatePurchaseOrder(item);
    }
}