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
        Machine:require('./src/master/machine'), 
        LotMachine:require('./src/master/lot-machine'),
        YarnEquivalentConversion:require('./src/master/yarn-equivalent-conversion'), 
        Uster:require('./src/master/uster'),
        UsterClassification:require('./src/master/uster-classification'),
        LampStandard:require('./src/master/lamp-standard'),
        AccountBank:require('./src/master/account-bank'),
        Instruction:require('./src/master/instruction'),
        MachineType:require('./src/master/machine-type'),
        MachineTypeIndicator:require('./src/master/machine-type-indicator'),
        OrderType:require('./src/master/order-type'),
        ProcessType:require('./src/master/process-type'),
        ColorType:require('./src/master/color-type'),
        Step:require('./src/master/step'),
        StepIndicator:require('./src/master/step-indicator'),
        MachineSpesificationStandard:require('./src/master/machine-spesification-standard'),
        MaterialConstruction:require('./src/master/material-construction'),
        YarnMaterial:require('./src/master/yarn-material'),
        FinishType:require('./src/master/finish-type'),
        StandardTest:require('./src/master/standard-test'),
        MachineEvent:require('./src/master/machine-event'),
        Comodity:require('./src/master/comodity'),
        Quality:require('./src/master/quality'),
        ArrayStep:require('./src/master/array-step'),
        TermOfPayment:require('./src/master/term-of-payment')
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
    production:{
        spinning:{
            winding:{
                WindingQualitySampling: require('./src/production/spinning/winding/winding-quality-sampling'),
                WindingProductionOutput: require('./src/production/spinning/winding/winding-production-output')
            },
            DailySpinningProductionReport: require('./src/production/spinning/daily-spinning-production-report')
        },
        finishingPrinting : {
            MonitoringEvent: require("./src/production/finishing-printing/monitoring-event"),
            DailyOperation: require("./src/production/finishing-printing/daily-operation"),
            Kanban: require("./src/production/finishing-printing/kanban"),
            MonitoringSpecificationMachine:require("./src/production/finishing-printing/monitoring-specification-machine")
        }
    },
    sales:{
        ProductionOrder: require('./src/sales/production-order'),
        ProductionOrderDetail: require('./src/sales/production-order-detail'),
        ProductionOrderLampStandard: require('./src/sales/production-order-lamp-standard'),
        FinishingPrintingSalesContract: require("./src/sales/finishing-printing-sales-contract"),
        FinishingPrintingSalesContractDetail: require("./src/sales/finishing-printing-sales-contract-detail"),
        SpinningSalesContract: require("./src/sales/spinning-sales-contract"),
        WeavingSalesContract: require("./src/sales/weaving-sales-contract")
    },
    map: require('./src/map'),
    validator: require('./src/validator')
}
