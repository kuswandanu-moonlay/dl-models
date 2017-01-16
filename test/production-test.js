var validate = require('../src/validator').production;


it("#01. Quality Hasil Produksi Spinning should valid", function () {
    var WindingQualitySampling = require('../src/production/spinning/winding/winding-quality-sampling');
    validate.spinning.winding.windingQualitySampling(new WindingQualitySampling());
});

it("#02. Daily Operation Finishing Printing should valid", function () {
    var DailyOperation = require('../src/production/finishing-printing/daily-operation');
    validate.finishingPrinting.dailyOperation(new DailyOperation());
});

it("#03. Sales Contract should valid", function () {
    var salesContract = require('../src/production/finishing-printing/sales-contract');
    validate.finishingPrinting.salesContract(new salesContract());
});

it("#04. Output Hasil Produksi Spinning should valid", function () {
    var WindingProductionOutput = require('../src/production/spinning/winding/winding-production-output');
    validate.spinning.winding.windingProductionOutput(new WindingProductionOutput());
});