require("should");
var BaseModel = require("capital-models").BaseModel;
var validateBuyer = require("../master/buyer-validator");
var validateUom = require("../master/uom-validator");
var validateCurrency = require("../master/currency-validator");
var validateAccountBank = require("../master/account-bank-validator");
var validateLampStandard = require("../master/lamp-standard-validator");
var validateSalesContractItem = require("./sales-contract-item-validator");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('no');
    data.no.should.be.String();

    data.should.have.property('buyerId');
    data.buyerId.should.instanceOf(Object);

    data.should.have.property('buyer');
    data.buyer.should.instanceOf(Object);
    validateBuyer(data.buyer);

    data.should.have.property('buyerType');
    data.buyerType.should.be.String();

    data.should.have.property('orderNo');
    data.orderNo.should.be.String();

    data.should.have.property('processType');
    data.processType.should.be.String();

    data.should.have.property('orderType');
    data.orderType.should.be.String();

    data.should.have.property('construction');
    data.construction.should.be.String();

    data.should.have.property('material');
    data.material.should.be.String();
    
    data.should.have.property('uomId');
    data.uomId.should.instanceOf(Object);

    data.should.have.property('uom');
    data.uom.should.instanceOf(Object);
    validateUom(data.uom);

    data.should.have.property('toleranceOrder');
    data.toleranceOrder.should.instanceOf(Number);
    
    data.should.have.property('quality');
    data.quality.should.be.String();

    data.should.have.property('currencyId');
    data.currencyId.should.instanceOf(Object);

    data.should.have.property('currency');
    data.currency.should.instanceOf(Object);
    validateCurrency(data.currency);

    data.should.have.property('price');
    data.price.should.instanceOf(Number);
    
    data.should.have.property('ppn');
    data.ppn.should.be.String();

    data.should.have.property('paymentMethod');
    data.paymentMethod.should.be.String();

    data.should.have.property('termOfPayment');
    data.termOfPayment.should.be.String();

    data.should.have.property('accountBankId');
    data.accountBankId.should.instanceOf(Object);

    data.should.have.property('accountBank');
    data.accountBank.should.instanceOf(Object);
    validateAccountBank(data.accountBank);

    data.should.have.property('freight');
    data.freight.should.be.String();

    data.should.have.property('sendTo');
    data.sendTo.should.be.String();

    data.should.have.property('packing');
    data.packing.should.be.String();

    data.should.have.property('agentId');
    data.agentId.should.instanceOf(Object);

    data.should.have.property('agent');
    data.agent.should.instanceOf(Object);
    if(data.agent)
        validateBuyer(data.agent);

    data.should.have.property('commission');
    data.commission.should.instanceOf(Number);
    
    data.should.have.property('deliverySchedule');
    data.deliverySchedule.should.be.String();

    data.should.have.property('condition');
    data.condition.should.be.String();

    data.should.have.property('originGreigeFabric');
    data.originGreigeFabric.should.be.String();

    data.should.have.property('width');
    data.width.should.be.String();
    
    data.should.have.property('standardHandling');
    data.standardHandling.should.be.String();

    data.should.have.property('run');
    data.run.should.be.String();

    data.should.have.property('standardShringkage');
    data.standardShringkage.should.be.String();

    data.should.have.property('longRolls');
    data.longRolls.should.be.String();

    data.should.have.property('lampStandardId'); 
    data.lampStandardId.should.instanceOf(Object);

    data.should.have.property('lampStandard'); 
    data.lampStandard.should.instanceOf(Object);
    validateLampStandard(data.lampStandard);

    data.should.have.property('sample');
    data.sample.should.be.String();

    data.should.have.property('deliveryDate');
    data.deliveryDate.should.instanceof(Date);

    data.should.have.property('description');
    data.description.should.be.String();

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validateSalesContractItem(item);
    }
};