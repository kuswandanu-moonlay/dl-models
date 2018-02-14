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

it("#05. Deal Tracking Board should valid", function () {
    var DealTrackingBoard = require('../src/sales/deal-tracking-board');
    validate.dealTrackingBoard(new DealTrackingBoard());
});

it("#06. Deal Tracking Stage should valid", function () {
    var DealTrackingStage = require('../src/sales/deal-tracking-stage');
    validate.dealTrackingStage(new DealTrackingStage());
});

it("#07. Deal Tracking Deal should valid", function () {
    var DealTrackingDeal = require('../src/sales/deal-tracking-deal');
    validate.dealTrackingDeal(new DealTrackingDeal());
});

it("#08. Deal Tracking Activity should valid", function () {
    var DealTrackingActivity = require('../src/sales/deal-tracking-activity');
    validate.dealTrackingActivity(new DealTrackingActivity());
});

it("#09. Order status History should valid", function () {
    var OrderStatusHistory = require('../src/sales/order-status-history');
    validate.orderStatusHistory(new OrderStatusHistory());
});