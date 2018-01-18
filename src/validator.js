module.exports = {

        auth: {
                account: require("./auth/account-validator"),
                profile: require("./auth/profile-validator"),
                role: require("./auth/role-validator"),
                apiEndpoint: require("./auth/api-endpoint-validator")
        },
        master: {
                product: require("./master/product-validator"),
                holiday: require('./master/holiday-validator'),
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
                spinningProductionLot: require('./master/spinning-production-lot-validator'),
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
                designMotive: require('./master/design-motive-validator'),
                storage: require('./master/storage-validator'),
                company: require('./master/company-validator'),
                contact: require('./master/contact-validator'),
                badOutputReason: require('./master/bad-output-reason-validator'),
                finishingPrintingDurationEstimation: require('./master/fp-duration-estimation-validator'),
                dealTrackingReason: require('./master/deal-tracking-reason-validator'),
                spinningYarn: require('./master/spinning-yarn-validator'),
                kursBudget: require('./master/kurs-budget-validator')
        },
        inventory: {
                finishingPrinting: {
                        fpInventorySummary: require("./inventory/finishing-printing/fp-inventory-summary-validator"),
                        fpInventoryMovement: require("./inventory/finishing-printing/fp-inventory-movement-validator"),
                        fpPackingReceipt: require("./inventory/finishing-printing/fp-packing-receipt-validator"),
                        fpReturToQCDoc: require("./inventory/finishing-printing/retur-to-qc-doc/fp-retur-to-qc-doc-validator"),
                        fpReturToQCDocItem: require("./inventory/finishing-printing/retur-to-qc-doc/fp-retur-to-qc-doc-item-validator"),
                        fpReturToQCDocDetail: require("./inventory/finishing-printing/retur-to-qc-doc/fp-retur-to-qc-doc-detail-validator"),
                        fpShipmentDocument: require("./inventory/finishing-printing/shipment-document/fp-shipment-document-validator"),
                        fpReturFromBuyerDoc: require("./inventory/finishing-printing/retur-fr-byr-doc/fp-retur-fr-byr-doc-validator"),
                        fpReturFromBuyerDocDetail: require("./inventory/finishing-printing/retur-fr-byr-doc/fp-retur-fr-byr-doc-detail-validator"),
                        fpReturFromBuyerDocItem: require("./inventory/finishing-printing/retur-fr-byr-doc/fp-retur-fr-byr-doc-item-validator")
                },
                inventorySummary: require("./inventory/inventory-summary-validator"),
                inventoryMovement: require("./inventory/inventory-movement-validator"),
                inventoryDocument: require("./inventory/inventory-document-validator")
        },

        garmentInventory: {
                garmentInventorySummary: require("./inventory-garment/garment-inventory-summary-validator"),
                garmentInventoryMovement: require("./inventory-garment/garment-inventory-movement-validator"),
                garmentInventoryDocument: require("./inventory-garment/garment-inventory-document-validator"),
                garmentInventoryDocumentItem: require("./inventory-garment/garment-inventory-document-item-validator")
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
        garmentPurchasing: {
                garmentPurchaseRequest: require("./garment-purchasing/purchase-request-validator"),
                garmentPurchaseOrder: require("./garment-purchasing/purchase-order-validator"),
                customs: require("./garment-purchasing/customs-validator"),
                garmentPurchaseOrderExternal: require("./garment-purchasing/purchase-order-external-validator"),
                garmentDeliveryOrder: require("./garment-purchasing/delivery-order-validator"),
                garmentInvoiceNote: require("./garment-purchasing/invoice-note-validator"),
                garmentPurchaseCorrection: require('./garment-purchasing/garment-purchase-correction-validator'),
                garmentUnitReceiptNote: require("./garment-purchasing/unit-receipt-note-validator"),
                garmentInternNote: require("./garment-purchasing/intern-note-validator"),
                garmentCurrency: require("./garment-purchasing/garment-currency-validator"),
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
                        badOutputReasonItem: require("./production/finishing-printing/bad-output-reason-item-validator"),
                        kanban: require("./production/finishing-printing/kanban-validator"),
                        monitoringSpecificationMachine: require("./production/finishing-printing/monitoring-specification-machine-validator"),
                        qualityControl: {
                                defect: {
                                        fabricTestCriterion: require("./production/finishing-printing/quality-control/defect/fabric-test-criterion-validator"),
                                        fabricGradeTest: require("./production/finishing-printing/quality-control/defect/fabric-grade-test-validator"),
                                        fabricQualityControl: require("./production/finishing-printing/quality-control/defect/fabric-quality-control-validator")
                                },
                                packing: require("./production/finishing-printing/quality-control/packing-validator"),
                                packingItem: require("./production/finishing-printing/quality-control/packing-item-validator"),
                                inspectionLotColor: require("./production/finishing-printing/quality-control/inspection-lot-color-validator"),
                                inspectionLotColorItem: require("./production/finishing-printing/quality-control/inspection-lot-color-item-validator")
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
                spinningSalesContract: require("./sales/spinning-sales-contract-validator"),
                dealTrackingBoard: require("./sales/deal-tracking-board-validator"),
                dealTrackingStage: require("./sales/deal-tracking-stage-validator"),
                dealTrackingDeal: require("./sales/deal-tracking-deal-validator"),
                dealTrackingActivity: require("./sales/deal-tracking-activity-validator")
        },
        garmentMasterPlan: {
                weeklyPlan: require("./garment-master-plan/weekly-plan-validator"),
                workingHoursStandard: require('./garment-master-plan/working-hours-standard-validator'),
                style: require('./garment-master-plan/style-validator'),
                standardHour: require('./garment-master-plan/standard-hour-validator'),
                bookingOrder: require('./garment-master-plan/booking-order-validator'),
                bookingOrderItem: require('./garment-master-plan/booking-order-item-validator'),
                masterPlanComodity: require('./garment-master-plan/master-plan-comodity-validator'),
                masterPlan: require('./garment-master-plan/master-plan-validator'),
                masterPlanDetail: require('./garment-master-plan/master-plan-detail-validator'),
                masterYarnType: require('./garment-master-plan/master-yarn-type-validator'),
        }
};
