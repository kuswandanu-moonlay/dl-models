module.exports = {

        auth: {
                account: require("./auth/account-validator"),
                profile: require("./auth/profile-validator"),
                role: require("./auth/role-validator")
        },
        master: {
                product: require("./master/product-validator"),
                buyer: require("./master/buyer-validator"),
                supplier: require("./master/supplier-validator"),
                uom: require("./master/uom-validator"),
                division: require("./master/division-validator"),
                unit: require("./master/unit-validator"),
                category: require("./master/category-validator"),
                currency: require("./master/currency-validator"), 
                vat: require("./master/vat-validator"),
                budget: require('./master/budget-validator'),
                threadSpecification: require('./master/thread-specification-validator'),
                machine: require('./master/machine-validator'),
                usterClassification: require('./master/uster-classification-validator'),
                lotMachine: require('./master/lot-machine-validator'),
                yarnEquivalentConversion: require('./master/yarn-equivalent-conversion-validator'),
                uster: require('./master/uster-validator'),
                lampStandard: require('./master/lamp-standard-validator'),
                accountBank : require('./master/account-bank-validator'),
                instruction: require('./master/instruction-validator'),
                monitoringEventType: require("./master/monitoring-event-type-validator"),
        },
        purchasing: {
                purchaseOrder: require("./purchasing/purchase-order-validator"),
                purchaseOrderItem: require("./purchasing/purchase-order-item-validator"),
                purchaseOrderExternal: require("./purchasing/purchase-order-external-validator"),
                deliveryOrder: require("./purchasing/delivery-order-validator"),
                unitReceiptNote: require("./purchasing/unit-receipt-note-validator"),
                unitPaymentCorrectionNote: require("./purchasing/unit-payment-correction-note-validator"),
                unitPaymentCorrectionNoteItem: require("./purchasing/unit-payment-correction-note-item-validator"),
                UnitPaymentOrder: require("./purchasing/unit-payment-order-validator"),
                UnitPaymentOrderItem: require("./purchasing/unit-payment-order-item-validator"),
                purchaseRequest: require("./purchasing/purchase-request-validator"),
                purchaseRequestItem: require("./purchasing/purchase-request-item-validator")
        },
        production: {
                spinning:{
                        winding:{
                                windingQualitySampling : require("./production/spinning/winding/winding-quality-sampling-validator"),
                                windingProductionOutput : require("./production/spinning/winding/winding-production-output-validator")
                        }
                },
                finishingPrinting:{
                        productionOrder: require("./production/finishing-printing/production-order-validator"),
                        productionOrderDetail: require("./production/finishing-printing/production-order-detail-validator"),
                        salesContract: require("./production/finishing-printing/sales-contract-validator"),
                        monitoringEvent: require("./production/finishing-printing/monitoring-event-validator"),
                },
                dailySpinningProductionReport : require("./production/spinning/daily-spinning-production-report-validator")
        }
};