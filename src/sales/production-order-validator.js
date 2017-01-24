require("should");
var validateBuyer = require('../master/buyer-validator');
var validateUom = require('../master/uom-validator');
var validateProduct = require('../master/product-validator');
var validateProcessType = require('../master/process-type-validator');
var validateOrderType = require('../master/order-type-validator');
var validateLamp=require ('../master/lamp-standard-validator');
var validateDetail= require('./production-order-detail-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('salesContractNo');
    data.salesContractNo.should.be.String();

    data.should.have.property('orderNo');
    data.orderNo.should.be.String();

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

    data.should.have.property('orderQuantity');
    data.orderQuantity.should.instanceOf(Number);

    data.should.have.property('uomId');
    data.uomId.should.instanceof(Object);

    data.should.have.property('uom');
    data.uom.should.instanceof(Object);
    validateUom(data.uom);

    data.should.have.property('spelling');
    data.spelling.should.instanceOf(Number);

    data.should.have.property('originGreigeFabric');
    data.originGreigeFabric.should.be.String();

    data.should.have.property('finishWidth');
    data.finishWidth.should.be.String();

    data.should.have.property('design');
    data.design.should.be.String();

    data.should.have.property('handlingStandard');
    data.handlingStandard.should.be.String();

    data.should.have.property('RUN');
    data.RUN.should.be.String();

    data.should.have.property('shrinkageStandard');
    data.shrinkageStandard.should.be.String();

    data.should.have.property('lampStandardId');
    data.lampStandardId.should.instanceof(Object);

    data.should.have.property('lampStandard');
    data.lampStandard.should.instanceof(Object);
    validateLamp(data.lampStandard);

    data.should.have.property('rollLength');
    data.rollLength.should.be.String();

    data.should.have.property('sample');
    data.sample.should.be.String();

    data.should.have.property('deliveryDate');
    data.deliveryDate.should.instanceof(Date);

    data.should.have.property('remark');
    data.remark.should.be.String();

    data.should.have.property('isUsed');
    data.isUsed.should.instanceOf(Boolean);

    data.should.have.property('details');
    data.details.should.instanceOf(Array);
    for (var detail of data.details) {
        validateDetail(detail);
    }

};