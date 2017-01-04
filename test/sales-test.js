var validate = require('../src/validator').sales;

it("#01. sales contract should valid", function() {
    var SalesContract = require('../src/sales/sales-contract');
    validate.salesContract(new SalesContract());
});