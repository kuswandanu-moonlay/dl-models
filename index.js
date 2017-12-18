module.exports = {
    auth: {
        Account: require('./src/auth/account'),
        Profile: require('./src/auth/profile'),
        Role: require('./src/auth/role'),
        ApiEndpoint: require('./src/auth/api-endpoint')
    },
    master: {
        Product: require('./src/master/product'),
        Buyer: require('./src/master/buyer'),
        Supplier: require('./src/master/supplier'),
        Uom: require('./src/master/uom'),
        Division: require('./src/master/division'),
        Unit: require('./src/master/unit'),
        Category: require('./src/master/category'),
        Currency: require('./src/master/currency'),
        Vat: require('./src/master/vat'),
        Budget: require('./src/master/budget'),
        ThreadSpecification: require('./src/master/thread-specification'),
        Machine: require('./src/master/machine'),
        SpinningProductionLot: require('./src/master/spinning-production-lot'),
        YarnEquivalentConversion: require('./src/master/yarn-equivalent-conversion'),
        Uster: require('./src/master/uster'),
        UsterClassification: require('./src/master/uster-classification'),
        LampStandard: require('./src/master/lamp-standard'),
        AccountBank: require('./src/master/account-bank'),
        Instruction: require('./src/master/instruction'),
        MachineType: require('./src/master/machine-type'),
        MachineTypeIndicator: require('./src/master/machine-type-indicator'),
        OrderType: require('./src/master/order-type'),
        ProcessType: require('./src/master/process-type'),
        ColorType: require('./src/master/color-type'),
        Step: require('./src/master/step'),
        StepIndicator: require('./src/master/step-indicator'),
        MachineSpesificationStandard: require('./src/master/machine-spesification-standard'),
        MaterialConstruction: require('./src/master/material-construction'),
        YarnMaterial: require('./src/master/yarn-material'),
        FinishType: require('./src/master/finish-type'),
        StandardTest: require('./src/master/standard-test'),
        MachineEvent: require('./src/master/machine-event'),
        Comodity: require('./src/master/comodity'),
        Quality: require('./src/master/quality'),
        ArrayStep: require('./src/master/array-step'),
        TermOfPayment: require('./src/master/term-of-payment'),
        DesignMotive: require('./src/master/design-motive'),
        Storage: require('./src/master/storage'),
        Holiday: require('./src/master/holiday'),
        Company: require('./src/master/company'),
        Contact: require('./src/master/contact'),
        BadOutputReason: require('./src/master/bad-output-reason'),
        FinishingPrintingDurationEstimation: require('./src/master/fp-duration-estimation'),
        DealTrackingReason: require('./src/master/deal-tracking-reason'),
        SpinningYarn: require('./src/master/spinning-yarn'),
        KursBudget: require('./src/master/kurs-budget')
    },
    inventory: {
        finishingPrinting: {
            FPInventoryMovement: require("./src/inventory/finishing-printing/fp-inventory-movement"),
            FPInventorySummary: require("./src/inventory/finishing-printing/fp-inventory-summary"),
            FPPackingReceipt: require("./src/inventory/finishing-printing/fp-packing-receipt"),
            FPReturToQCDoc: require("./src/inventory/finishing-printing/retur-to-qc-doc/fp-retur-to-qc-doc"),
            FPReturToQCDocItem: require("./src/inventory/finishing-printing/retur-to-qc-doc/fp-retur-to-qc-doc-item"),
            FPReturToQCDocDetail: require("./src/inventory/finishing-printing/retur-to-qc-doc/fp-retur-to-qc-doc-detail"),
            FPShipmentDocument: require("./src/inventory/finishing-printing/shipment-document/fp-shipment-document"),
            FPReturFromBuyerDoc: require("./src/inventory/finishing-printing/retur-fr-byr-doc/fp-retur-fr-byr-doc"),
            FPReturFromBuyerDocDetail: require("./src/inventory/finishing-printing/retur-fr-byr-doc/fp-retur-fr-byr-doc-detail"),
            FPReturFromBuyerDocItem: require("./src/inventory/finishing-printing/retur-fr-byr-doc/fp-retur-fr-byr-doc-item")
        },
        InventoryMovement: require("./src/inventory/inventory-movement"),
        InventorySummary: require("./src/inventory/inventory-summary"),
        InventoryDocument: require("./src/inventory/inventory-document")
    },

    garmentInventory: {

        GarmentInventoryMovement: require("./src/inventory-garment/garment-inventory-movement"),
        GarmentInventorySummary: require("./src/inventory-garment/garment-inventory-summary"),
        GarmentInventoryDocument: require("./src/inventory-garment/garment-inventory-document")
    },
    purchasing: {
        PurchaseOrderItem: require('./src/purchasing/purchase-order-item'),
        PurchaseOrder: require('./src/purchasing/purchase-order'),
        PurchaseOrderExternal: require('./src/purchasing/purchase-order-external'),
        QualityStandard: require('./src/purchasing/quality-standard'),
        DeliveryOrder: require('./src/purchasing/delivery-order'),
        DeliveryOrderItem: require('./src/purchasing/delivery-order-item'),
        DeliveryOrderItemFulfillment: require('./src/purchasing/delivery-order-item-fulfillment'),
        UnitReceiptNote: require('./src/purchasing/unit-receipt-note'),
        UnitReceiptNoteItem: require('./src/purchasing/unit-receipt-note-item'),
        PurchaseRequestItem: require('./src/purchasing/purchase-request-item'),
        PurchaseRequest: require('./src/purchasing/purchase-request'),
        UnitPaymentCorrectionNote: require('./src/purchasing/unit-payment-correction-note'),
        UnitPaymentCorrectionNoteItem: require('./src/purchasing/unit-payment-correction-note-item'),
        UnitPaymentOrder: require('./src/purchasing/unit-payment-order'),
        UnitPaymentOrderItem: require('./src/purchasing/unit-payment-order-item'),
        enum: {
            PurchaseRequestStatus: require('./src/purchasing/enum/purchase-request-status-enum'),
            PurchaseOrderStatus: require('./src/purchasing/enum/purchase-order-status-enum')
        }
    },
    garmentPurchasing: {
        GarmentPurchaseRequest: require('./src/garment-purchasing/purchase-request'),
        GarmentPurchaseOrder: require('./src/garment-purchasing/purchase-order'),
        Customs: require('./src/garment-purchasing/customs'),
        GarmentPurchaseOrderExternal: require('./src/garment-purchasing/purchase-order-external'),
        GarmentDeliveryOrder: require('./src/garment-purchasing/delivery-order'),
        GarmentInvoiceNote: require('./src/garment-purchasing/invoice-note'),
        GarmentPurchaseCorrection: require('./src/garment-purchasing/garment-purchase-correction'),
        GarmentUnitReceiptNote: require('./src/garment-purchasing/unit-receipt-note'),
        GarmentInternNote: require('./src/garment-purchasing/intern-note'),
        GarmentCurrency: require('./src/garment-purchasing/garment-currency'),
    },
    production: {
        spinning: {
            winding: {
                WindingQualitySampling: require('./src/production/spinning/winding/winding-quality-sampling'),
                WindingProductionOutput: require('./src/production/spinning/winding/winding-production-output')
            },
            DailySpinningProductionReport: require('./src/production/spinning/daily-spinning-production-report')
        },
        finishingPrinting: {
            MonitoringEvent: require("./src/production/finishing-printing/monitoring-event"),
            DailyOperation: require("./src/production/finishing-printing/daily-operation"),
            BadOutputReasonItem: require("./src/production/finishing-printing/bad-output-reason-item"),
            Kanban: require("./src/production/finishing-printing/kanban"),
            MonitoringSpecificationMachine: require("./src/production/finishing-printing/monitoring-specification-machine"),
            qualityControl: {
                defect: {
                    FabricTestCriterion: require("./src/production/finishing-printing/quality-control/defect/fabric-test-criterion"),
                    FabricGradeTest: require("./src/production/finishing-printing/quality-control/defect/fabric-grade-test"),
                    FabricQualityControl: require("./src/production/finishing-printing/quality-control/defect/fabric-quality-control")
                },
                Packing: require("./src/production/finishing-printing/quality-control/packing"),
                PackingItem: require("./src/production/finishing-printing/quality-control/packing-item"),
                InspectionLotColor: require("./src/production/finishing-printing/quality-control/inspection-lot-color"),
                InspectionLotColorItem: require("./src/production/finishing-printing/quality-control/inspection-lot-color-item")
            }
        }
    },
    sales: {
        ProductionOrder: require('./src/sales/production-order'),
        ProductionOrderDetail: require('./src/sales/production-order-detail'),
        ProductionOrderLampStandard: require('./src/sales/production-order-lamp-standard'),
        FinishingPrintingSalesContract: require("./src/sales/finishing-printing-sales-contract"),
        FinishingPrintingSalesContractDetail: require("./src/sales/finishing-printing-sales-contract-detail"),
        SpinningSalesContract: require("./src/sales/spinning-sales-contract"),
        WeavingSalesContract: require("./src/sales/weaving-sales-contract"),
        DealTrackingBoard: require("./src/sales/deal-tracking-board"),
        DealTrackingStage: require("./src/sales/deal-tracking-stage"),
        DealTrackingDeal: require("./src/sales/deal-tracking-deal"),
        DealTrackingActivity: require("./src/sales/deal-tracking-activity")
    },
    garmentMasterPlan: {
        WeeklyPlan: require("./src/garment-master-plan/weekly-plan"),
        WeeklyPlanItem: require("./src/garment-master-plan/weekly-plan-item"),
        WorkingHoursStandard: require('./src/garment-master-plan/working-hours-standard'),
        Style: require('./src/garment-master-plan/style'),
        StandardHour: require('./src/garment-master-plan/standard-hour'),
        BookingOrder: require('./src/garment-master-plan/booking-order'),
        BookingOrderItem: require('./src/garment-master-plan/booking-order-item'),
        MasterPlanComodity: require('./src/garment-master-plan/master-plan-comodity'),
        MasterPlan: require('./src/garment-master-plan/master-plan'),
        MasterPlanDetail: require('./src/garment-master-plan/master-plan-detail'),
        MasterPlanDetailItem: require('./src/garment-master-plan/master-plan-detail-item')
    },
    map: require('./src/map'),
    validator: require('./src/validator')
}
