require("should");

var validateBuyer = require('../master/buyer-validator');
var validateUom = require('../master/uom-validator');
var validateProduct = require('../master/product-validator');
var validateProcessType = require('../master/process-type-validator');
var validateOrderType = require('../master/order-type-validator');
var validateAccount= require('../master/account-bank-validator');
var validateMaterialConstruction= require ('../master/material-construction-validator');
var validateDetails= require('./finishing-printing-sales-contract-detail-validator');
var validateYarnMaterial= require ('../master/yarn-material-validator');
var validateQuality = require('../master/quality-validator');
var validateComodity = require('../master/comodity-validator');
var validateTermOfPayment = require('../master/term-of-payment-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('salesContractNo');
    data.salesContractNo.should.be.String();

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

    data.should.have.property('materialConstructionId');
    data.materialConstructionId.should.instanceof(Object);

    data.should.have.property('materialConstruction');
    data.materialConstruction.should.instanceof(Object);
    validateMaterialConstruction(data.materialConstruction);

    data.should.have.property('yarnMaterialId');
    data.yarnMaterialId.should.instanceof(Object);

    data.should.have.property('yarnMaterial');
    data.yarnMaterial.should.instanceof(Object);
    validateYarnMaterial(data.yarnMaterial);

    data.should.have.property('materialId');
    data.materialId.should.instanceof(Object);

    data.should.have.property('material');
    data.material.should.instanceof(Object);
    validateProduct(data.material);

    data.should.have.property('materialWidth');
    data.materialWidth.should.be.String();

    data.should.have.property('uomId');
    data.uomId.should.instanceof(Object);

    data.should.have.property('uom');
    data.uom.should.instanceof(Object);
    validateUom(data.uom);

    data.should.have.property('shippingQuantityTolerance');
    data.shippingQuantityTolerance.should.instanceOf(Number);

    data.should.have.property('qualityId');
    data.qualityId.should.instanceof(Object);

    data.should.have.property('quality');
    data.quality.should.instanceof(Object);
    validateQuality(data.quality);

    data.should.have.property('comodityId');
    data.comodityId.should.instanceof(Object);

    data.should.have.property('comodity');
    data.comodity.should.instanceof(Object);
    validateComodity(data.comodity);

    data.should.have.property('termOfPaymentId');
    data.termOfPaymentId.should.instanceof(Object);

    data.should.have.property('termOfPayment');
    data.termOfPayment.should.instanceof(Object);
    validateTermOfPayment(data.termOfPayment);

    data.should.have.property('useIncomeTax');
    data.useIncomeTax.should.instanceof(Boolean);

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
        validateDetails(detail);
    }
};