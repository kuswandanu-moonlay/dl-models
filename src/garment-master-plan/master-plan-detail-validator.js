require("should");
var validatorComodity = require('./master-plan-comodity-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.be.String();
    
    data.should.have.property('masterPlanComodityId');
    data.masterPlanComodityId.should.instanceOf(Object);
    
    data.should.have.property('masterPlanComodity');
    data.masterPlanComodity.should.instanceOf(Object);
    validatorComodity(data.masterPlanComodity);
    
    data.should.have.property('quantity');
    data.quantity.should.instanceOf(Number);
    
    data.should.have.property('remark');
    data.remark.should.instanceOf(String);
    
    data.should.have.property('isConfirmed');
    data.isConfirmed.should.instanceOf(Boolean);

    data.should.have.property('detailItems');
    data.detailItems.should.instanceOf(Array);
    if(data.detailItems.length > 0){
        for (var item of data.detailItems) {
            item.should.instanceOf(Object);
        }
    }
};