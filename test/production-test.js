var validate = require('../src/validator').production;

it("#01. Quality Hasil Produksi Spinning should valid", function () {
    var WindingQualitySampling = require('../src/production/spinning/winding/winding-quality-sampling');
    validate.spinning.winding.windingQualitySampling(new WindingQualitySampling());
});

it("#02. Output Hasil Produksi Spinning should valid", function () {
    var windingProductionOutput = require('../src/production/spinning/winding/winding-production-output');
    validate.spinning.winding.windingProductionOutput(new WindingProductionOutput());
});

it("#03. Sales Contract should valid", function () {
    var salesContract = require('../src/production/sales-contract');
    validate.finishingPrinting.salesContract(new SalesContract());
});