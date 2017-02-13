var validate = require('../src/validator').production;


it("#01. Quality Hasil Produksi Spinning should valid", function () {
    var WindingQualitySampling = require('../src/production/spinning/winding/winding-quality-sampling');
    validate.spinning.winding.windingQualitySampling(new WindingQualitySampling());
});

it("#02. Daily Operation Finishing Printing should valid", function () {
    var DailyOperation = require('../src/production/finishing-printing/daily-operation');
    validate.finishingPrinting.dailyOperation(new DailyOperation());
});

it("#03. Output Hasil Produksi Spinning should valid", function () {
    var WindingProductionOutput = require('../src/production/spinning/winding/winding-production-output');
    validate.spinning.winding.windingProductionOutput(new WindingProductionOutput());
});

it("#04. Daily Operation Finishing Printing should valid", function () {
    var DailyOperation = require('../src/production/finishing-printing/daily-operation');
    validate.finishingPrinting.dailyOperation(new DailyOperation());
});

it("#05. Monitoring Event Finishing Printing should valid", function () {
    var MonitoringEvent = require('../src/production/finishing-printing/monitoring-event');
    validate.finishingPrinting.monitoringEvent(new MonitoringEvent());
});

it("#06. Monitoring Specification Finishing Printing Machine should valid", function () {
    var MonitoringSpecificationMachine = require('../src/production/finishing-printing/monitoring-specification-machine');
    validate.finishingPrinting.monitoringSpecificationMachine(new MonitoringSpecificationMachine());
});
