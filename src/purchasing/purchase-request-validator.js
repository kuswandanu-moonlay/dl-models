require("should");
var validatePurchaseRequestItem = require('./purchase-request-item-validator');
var validateBudget = require('../master/budget-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('no');
    data.no.should.instanceof(String);

    data.should.have.property('date');
    data.date.should.instanceof(Date);
    
    data.should.have.property('expectedDeliveryDate');
    // data.expectedDeliveryDate.should.instanceof(Date);
 
    data.should.have.property('budgetId');
    data.budgetId.should.instanceof(Object);

    data.should.have.property('budget');
    data.budget.should.instanceof(Object);
    validateBudget(data.budget);

    data.should.have.property('unitId');
    data.unitId.should.instanceof(Object);

    data.should.have.property('unit');
    data.unit.should.instanceof(Object);
    
    data.should.have.property('categoryId');
    data.categoryId.should.instanceof(Object);

    data.should.have.property('category');
    data.category.should.instanceof(Object);

    data.should.have.property('isPosted');
    data.isPosted.should.instanceOf(Boolean);

    data.should.have.property('isUsed');
    data.isUsed.should.instanceOf(Boolean);

    // data.should.have.property('internal');
    // data.internal.should.instanceOf(Boolean);

    data.should.have.property('remark');
    data.remark.should.instanceof(String);

    data.should.have.property('items');
    data.items.should.instanceof(Array); 

    for (var item of data.items) {
        validatePurchaseRequestItem(item);
    }

    data.should.have.property('status');
    data.status.should.instanceof(Object);

    data.should.have.property('purchaseOrderIds');
    data.purchaseOrderIds.should.instanceof(Array); 
};