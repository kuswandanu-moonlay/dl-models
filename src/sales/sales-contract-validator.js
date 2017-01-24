require("should");

var validateProductionOrder= require('./production-order-validator');
var validateBuyer = require('../master/buyer-validator');
var validateUom = require('../master/uom-validator');
var validateProduct = require('../master/product-validator');
var validateProcessType = require('../master/process-type-validator');
var validateOrderType = require('../master/order-type-validator');
var validateCurrency = require('../master/currency-validator');
var validateAccount= require('../master/account-bank-validator');
var validateDetails= require('../master/sales-contract-detail-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('salesContractNo');
    data.salesContractNo.should.be.String();

    data.should.have.property('date');
    data.date.should.instanceof(Date);

    data.should.have.property('buyerId');
    data.buyerId.should.instanceof(Object);

    data.should.have.property('buyer');
    data.buyer.should.instanceof(Object);
    validateBuyer(data.buyer);

    data.should.have.property('processTypeId');
    data.processTypeId.should.instanceof(Object);

    data.should.have.property('processType');
    data.processType.should.instanceof(Object);
    validateProcessType(data.processType);

    data.should.have.property('orderTypeId');
    data.orderTypeId.should.instanceof(Object);

    data.should.have.property('orderType');
    data.orderType.should.instanceof(Object);
    validateOrderType(data.orderType);

    data.should.have.property('construction');
    data.construction.should.be.String();

    data.should.have.property('materialId');
    data.materialId.should.instanceof(Object);

    data.should.have.property('material');
    data.material.should.instanceof(Object);
    validateProduct(data.material);

    data.should.have.property('uomId');
    data.uomId.should.instanceof(Object);

    data.should.have.property('uom');
    data.uom.should.instanceof(Object);
    validateUom(data.uom);

    data.should.have.property('spelling');
    data.spelling.should.instanceOf(Number);

    data.should.have.property('quality');
    data.quality.should.be.String();

    data.should.have.property('rollLength');
    data.rollLength.should.be.String();

    data.should.have.property('paymentMethod');
    data.paymentMethod.should.be.String();

    data.should.have.property('paymentRequirement');
    data.paymentRequirement.should.be.String();

    data.should.have.property('useIncomeTax');
    data.useIncomeTax.should.instanceof(Boolean);

    data.should.have.property('currencyId');
    data.currencyId.should.instanceof(Object);

    data.should.have.property('currency');
    data.currency.should.instanceof(Object);
    validateCurrency(data.currency);

    data.should.have.property('accountBankId');
    data.accountBankId.should.instanceof(Object);

    data.should.have.property('accountBank');
    data.accountBank.should.instanceof(Object);
    validateAccount(data.accountBank);

    data.should.have.property('deliveredTo');
    data.deliveredTo.should.be.String();

    data.should.have.property('condition');
    data.condition.should.be.String();

    data.should.have.property('deliverySchedule');
    data.deliverySchedule.should.instanceof(Date);

    data.should.have.property('details');
    data.details.should.instanceOf(Array);
    for (var detail of data.details) {
        validateProductionOrder(detail);
    }

    data.should.have.property('productionOrders');
    data.productionOrders.should.instanceOf(Array);
    for (var productionOrder of data.productionOrders) {
        validateProductionOrder(productionOrder);
    }
}