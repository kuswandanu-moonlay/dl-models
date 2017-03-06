var validate = require('../src/validator').sales;

it("#01. Finishing Printing Sales Contract should valid", function () {
    var FinishingPrintingSalesContract = require('../src/sales/finishing-printing-sales-contract');
    validate.finishingPrintingSalesContract(new FinishingPrintingSalesContract());
});

it("#02. Production Order should valid", function () {
    var ProductionOrder = require('../src/sales/production-order');
    validate.productionOrder(new ProductionOrder());
});

it("#03. Spinning Sales Contract should valid", function () {
    var SpinningSalesContract = require('../src/sales/spinning-sales-contract');
    validate.spinningSalesContract(new SpinningSalesContract());
});

it("#04. Weaving Sales Contract should valid", function () {
    var WeavingSalesContract = require('../src/sales/weaving-sales-contract');
    validate.weavingSalesContract(new WeavingSalesContract());
});