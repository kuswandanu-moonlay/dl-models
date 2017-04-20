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

it("#04. Monitoring Event Finishing Printing should valid", function () {
    var MonitoringEvent = require('../src/production/finishing-printing/monitoring-event');
    validate.finishingPrinting.monitoringEvent(new MonitoringEvent());
});

it("#05. Monitoring Specification Finishing Printing Machine should valid", function () {
    var MonitoringSpecificationMachine = require('../src/production/finishing-printing/monitoring-specification-machine');
    validate.finishingPrinting.monitoringSpecificationMachine(new MonitoringSpecificationMachine());
});

it("#06. Kanban Finishing Printing should valid", function () {
    var Kanban = require('../src/production/finishing-printing/kanban');
    validate.finishingPrinting.kanban(new Kanban());
});

it("#07. Fabric Test Criterion should valid", function () {
    var FabricTestCriterion = require('../src/production/finishing-printing/quality-control/defect/fabric-test-criterion');
    validate.finishingPrinting.qualityControl.defect.fabricTestCriterion(new FabricTestCriterion());
});

it("#08. Fabric Grade Test should valid", function () {
    var FabricGradeTest = require('../src/production/finishing-printing/quality-control/defect/fabric-grade-test');
    validate.finishingPrinting.qualityControl.defect.fabricGradeTest(new FabricGradeTest());
});

it("#09. Fabric Quality Control should valid", function () {
    var FabricQualityControl = require('../src/production/finishing-printing/quality-control/defect/fabric-quality-control');
    validate.finishingPrinting.qualityControl.defect.fabricQualityControl(new FabricQualityControl());
});
it("#10. Packing Item should valid", function () {
    var PackingItem = require('../src/production/finishing-printing/quality-control/packing-item');
    validate.finishingPrinting.qualityControl.packingItem(new PackingItem());
});
it("#11. Packing should valid", function () {
    var Packing = require('../src/production/finishing-printing/quality-control/packing');
    validate.finishingPrinting.qualityControl.packing(new Packing());
});
