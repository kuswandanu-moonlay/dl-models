require("should");
var validatorComodity = require('./master-plan-comodity-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    
    data.should.have.property('code');
    data.code.should.be.instanceOf(String);
    
    data.should.have.property('masterPlanComodityId');
    data.masterPlanComodityId.should.instanceOf(Object);

    data.should.have.property('masterPlanComodity');
    data.masterPlanComodity.should.instanceOf(Object);
    validatorComodity(data.masterPlanComodity);
    
    data.should.have.property('deliveryDate');
    data.deliveryDate.should.instanceof(Date);

    data.should.have.property('quantity');
    data.quantity.should.be.instanceOf(Number);
    
    data.should.have.property('remark');
    data.remark.should.be.instanceOf(String);
    
    // data.should.have.property('isConfirmed');
    // data.isConfirmed.should.instanceOf(Boolean);
};