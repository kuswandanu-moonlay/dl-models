require("should");
var validatorComodity = require('./master-plan-comodity-validator');
var validatorUnit = require('../master/unit-validator');
var validatorWeek = require('./weekly-plan-item-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.be.String();
    
    // data.should.have.property('quantity');
    // data.quantity.should.instanceOf(Number);
    
    // data.should.have.property('remark');
    // data.remark.should.instanceOf(String);

    // data.should.have.property('detailItems');
    // data.detailItems.should.instanceOf(Array);
    // if(data.detailItems.length > 0){
    //     for (var item of data.detailItems) {
    //         item.should.instanceOf(Object);
    //     }
    // }
    
    data.should.have.property('shCutting');
    data.shCutting.should.instanceOf(Number);
    
    data.should.have.property('shSewing');
    data.shSewing.should.instanceOf(Number);
    
    data.should.have.property('shFinishing');
    data.shFinishing.should.instanceOf(Number);
    
    data.should.have.property('unitId');
    data.unitId.should.instanceOf(Object);
    
    data.should.have.property('unit');
    data.unit.should.instanceOf(Object);
    validatorUnit(data.unit);
    
    data.should.have.property('weeklyPlanId');
    data.weeklyPlanId.should.instanceOf(Object);
    
    data.should.have.property('weeklyPlanYear');
    data.weeklyPlanYear.should.instanceOf(Number);
    
    data.should.have.property('week');
    data.week.should.instanceOf(Object);
    validatorWeek(data.week);
    
    if(data.masterPlanComodityId)
        data.masterPlanComodityId.should.instanceOf(Object);
    
    if(data.masterPlanComodity){
        data.masterPlanComodity.should.instanceOf(Object);
        validatorComodity(data.masterPlanComodity);
    }
    
    data.should.have.property('isConfirmed');
    data.isConfirmed.should.instanceOf(Boolean);
    
    data.should.have.property('deliveryDate');
    data.deliveryDate.should.instanceOf(Date);
    
    data.should.have.property('quantity');
    data.quantity.should.instanceOf(Number);
    
    data.should.have.property('remark');
    data.remark.should.instanceOf(String);

    data.should.have.property('efficiency');
    data.efficiency.should.instanceOf(Number);
    
    data.should.have.property('ehBooking');
    data.ehBooking.should.instanceOf(Number);
};