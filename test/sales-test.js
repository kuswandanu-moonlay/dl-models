var validate = require('../src/validator').sales;

it("#01. Sales Contract should valid", function () {
    var salesContract = require('../src/sales/sales-contract');
    validate.salesContract(new salesContract());
});