require("should");
var validateBuyer = require('../core/buyer-validator');
var validateSupplier = require('../core/supplier-validator');
var validatePurchaseOrderItem = require('./purchase-order-item-validator');
var validateStandardQuality = require('./standard-quality-test-percentage-validator');
var validateDODetails = require('./delivery-order-detail-validator');

module.exports = function (data) {
    data.should.have.property('iso');
    data.iso.should.instanceOf(String);

    data.should.have.property('PRNo');
    data.PRNo.should.instanceOf(String);

    data.should.have.property('PONo');
    data.PONo.should.instanceOf(String);

    data.should.have.property('RefPONo');
    data.RefPONo.should.instanceOf(String);

    data.should.have.property('linkedPONo');
    data.linkedPONo.should.instanceOf(String);

    data.should.have.property('description');
    data.description.should.instanceOf(String);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validatePurchaseOrderItem(item);
    }

    data.should.have.property('unit');
    data.unit.should.instanceOf(String);

    data.should.have.property('PRDate');
    data.PRDate.should.instanceOf(Date);

    data.should.have.property('category');
    data.category.should.instanceOf(String);

    data.should.have.property('requestDate');
    data.requestDate.should.instanceOf(Date);

    data.should.have.property('staffName');
    data.staffName.should.instanceOf(String);

    data.should.have.property('receivedDate');
    data.receivedDate.should.instanceOf(Date);

    data.should.have.property('PODLNo');
    data.PODLNo.should.instanceOf(String);

    data.should.have.property('supplierId');
    data.supplierId.should.instanceof(Object);

    data.should.have.property('supplier');
    data.supplier.should.instanceof(Object);
    validateSupplier(data.supplier);

    data.should.have.property('PODate');
    data.PODate.should.instanceOf(Date);

    data.should.have.property('deliveryDate');
    data.deliveryDate.should.instanceOf(Date);

    data.should.have.property('deliveryFeeByBuyer');
    data.deliveryFeeByBuyer.should.instanceOf(Boolean);

    data.should.have.property('termOfPayment');
    data.termOfPayment.should.instanceOf(String);

    data.should.have.property('currency');
    data.currency.should.instanceOf(String);

    data.should.have.property('rate');
    data.rate.should.instanceOf(Number);

    data.should.have.property('paymentDue');
    data.paymentDue.should.instanceOf(Number);

    data.should.have.property('ppn');
    data.ppn.should.instanceOf(Number);

    data.should.have.property('usePPn');
    data.usePPn.should.instanceOf(Boolean);

    data.should.have.property('usePPh');
    data.usePPh.should.instanceOf(Boolean);

    data.should.have.property('ispost');
    data.ispost.should.instanceOf(Boolean);

    data.should.have.property('standardQuality');
    data.standardQuality.should.instanceof(Object);
    validateStandardQuality(data.standardQuality);

    data.should.have.property('otherTest');
    data.otherTest.should.instanceOf(String);
    
    data.should.have.property('DOitems');
    data.DOitems.should.instanceOf(Array);
    for (var item of data.DOitems) {
        validateDODetails(data.detail);
    }
    
    data.should.have.property('orderedDate');
    data.orderedDate.should.instanceOf(Date);

    data.should.have.property('productArriveDate');
    data.productArriveDate.should.instanceOf(Date);

    data.should.have.property('RONo');
    data.RONo.should.instanceOf(String);

    data.should.have.property('article');
    data.article.should.instanceOf(String);

    data.should.have.property('buyerId');
    data.buyerId.should.instanceof(Object);

    data.should.have.property('buyer');
    data.buyer.should.instanceof(Object);
    validateBuyer(data.buyer);

    data.should.have.property('shipmentDate');
    data.shipmentDate.should.instanceOf(Date);

}