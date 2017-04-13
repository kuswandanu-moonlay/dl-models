module.exports = {

        auth: {
                account: require("./auth/account-validator"),
                profile: require("./auth/profile-validator"),
                role: require("./auth/role-validator"),
                apiEndpoint: require("./auth/api-endpoint-validator")
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
                accountBank: require('./master/account-bank-validator'),
                instruction: require('./master/instruction-validator'),
                machineType: require('./master/machine-type-validator'),
                machineTypeIndicator: require('./master/machine-type-indicator-validator'),
                orderType: require('./master/order-type-validator'),
                processType: require('./master/process-type-validator'),
                colorType: require('./master/color-type-validator'),
                step: require('./master/step-validator'),
                machineSpesificationStandard: require('./master/machine-spesification-standard-validator'),
                materialConstruction: require('./master/material-construction-validator'),
                yarnMaterial: require('./master/yarn-material-validator'),
                finishType: require('./master/finish-type-validator'),
                standardTest: require('./master/standard-test-validator'),
                machineEvent: require('./master/machine-event-validator'),
                comodity: require('./master/comodity-validator'),
                quality: require('./master/quality-validator'),
                arrayStep: require('./master/array-step-validator'),
                termOfPayment: require('./master/term-of-payment-validator'),
                designMotive: require('./master/design-motive-validator')
        },
        inventory: {
                finishingPrinting: {
                        fpInventorySummary: require("./inventory/finishing-printing/fp-inventory-summary-validator"),
                        fpInventoryMovement: require("./inventory/finishing-printing/fp-inventory-movement-validator")
                }
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
                spinning: {
                        winding: {
                                windingQualitySampling: require("./production/spinning/winding/winding-quality-sampling-validator"),
                                windingProductionOutput: require("./production/spinning/winding/winding-production-output-validator")
                        }
                },
                finishingPrinting: {
                        monitoringEvent: require("./production/finishing-printing/monitoring-event-validator"),
                        dailyOperation: require("./production/finishing-printing/daily-operation-validator"),
                        kanban: require("./production/finishing-printing/kanban-validator"),
                        monitoringSpecificationMachine: require("./production/finishing-printing/monitoring-specification-machine-validator"),
                        qualityControl: {
                                defect: {
                                        fabricTestCriterion: require("./production/finishing-printing/quality-control/defect/fabric-test-criterion-validator"),
                                        fabricGradeTest: require("./production/finishing-printing/quality-control/defect/fabric-grade-test-validator"),
                                        fabricQualityControl: require("./production/finishing-printing/quality-control/defect/fabric-quality-control-validator")
                                },
                                packing: require("./production/finishing-printing/quality-control/packing-validator"),
                                packingItem: require("./production/finishing-printing/quality-control/packing-item-validator")
                        }
                },
                dailySpinningProductionReport: require("./production/spinning/daily-spinning-production-report-validator")
        },
        sales: {
                productionOrder: require("./sales/production-order-validator"),
                productionOrderDetail: require("./sales/production-order-detail-validator"),
                productionOrderLampStandard: require("./sales/production-order-lamp-standard-validator"),
                finishingPrintingSalesContract: require("./sales/finishing-printing-sales-contract-validator"),
                finishingPrintingSalesContractDetail: require("./sales/finishing-printing-sales-contract-detail-validator"),
                weavingSalesContract: require("./sales/weaving-sales-contract-validator"),
                spinningSalesContract: require("./sales/spinning-sales-contract-validator")
        }
};
