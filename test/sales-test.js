var validate = require('../src/validator').sales;

it("#01. Sales Contract should valid", function () {
    var salesContract = require('../src/sales/sales-contract');
    validate.salesContract(new salesContract());
});

it("#02. Production Order should valid", function () {
    var productionOrder = require('../src/sales/production-order');
    validate.productionOrder(new productionOrder());
});