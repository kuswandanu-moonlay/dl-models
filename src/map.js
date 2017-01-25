module.exports = {
    auth: {
        type: {
            Account: 'account',
            Profile: 'profile',
            Role: 'role',
            ApiEndpoint: 'api-endpoint'
        },
        collection: {
            Account: 'accounts',
            Role: 'roles',
            ApiEndpoint: 'api-endpoints'
        }
    },
    master: {
        type: {
            Buyer: 'buyer',
            Supplier: 'supplier',
            uom: 'unit-of-measurement',
            Currency: 'currency',
            Vat: 'vat',
            Budget: 'budget',
            Machine: 'machine',
            Uster: 'uster',
            MonitoringEventType: 'monitoring-event-type',
            Step : 'step',
            MachineType:'machine-type',
        },
        collection: {
            Buyer: 'buyers',
            Supplier: 'suppliers',
            uom: 'unit-of-measurements',
            Product: 'products',
            Machine: 'machines',
            Division: 'divisions',
            Unit: 'units',
            Category: 'categories',
            Currency: 'currencies',
            Vat: 'vats',
            Budget: 'budgets',
            ThreadSpecification : 'thread-specifications',
            UsterClassification: 'uster-classifications',
            LotMachine: 'lot-machines',
            YarnEquivalentConversion: 'yarn-equivalent-conversions',
            Uster: 'usters',
            LampStandard : 'lamp-standards',
            AccountBank : 'account-banks',
            Instruction : 'instructions',
            MonitoringEventType : 'monitoring-event-types',
            OrderType : 'order-types',
            ProcessType : 'process-types',
            ColorType : 'color-types',
            Step : 'steps',
            MachineSpesificationStandard : 'machine-spesification-standards'
        }
    },
    purchasing: {
        type: {
            PurchaseOrder: 'purchase-order',
            DeliveryOrder: 'delivery-order',
            PurchaseRequest: 'purchase-request',
            UnitPaymentOrder:'unit-payment-order',
        },
        collection: {
            PurchaseOrder: 'purchase-orders',
            PurchaseOrderExternal: 'purchase-order-externals',
            DeliveryOrder: 'delivery-orders',
            UnitReceiptNote: 'unit-receipt-notes',
            PurchaseRequest: 'purchase-requests',
            UnitPaymentCorrectionNote:'unit-payment-correction-notes',
            UnitPaymentOrder:'unit-payment-orders'
        }
    },
    production:{
        spinning : {
            winding : {
                type:{
                    WindingQualitySampling : 'winding-quality-sampling',
                    WindingProductionOutput : 'winding-production-output'
                },
                collection:{
                    WindingQualitySampling : 'winding-quality-samplings',
                    WindingProductionOutput : 'winding-production-outputs'
                }
            },
            type : {
                DailySpinningProductionReport : 'daily-spinning-production-report'
            },
            collection: {
                DailySpinningProductionReport : 'daily-spinning-production-report'
            }
        },
        finishingPrinting : {
            type:{
                DailyOperation : 'daily-operation',
                MonitoringEvent : 'monitoring-event'
            },
            collection:{
                MonitoringEvent : 'monitoring-events',
                DailyOperation : 'daily-operations'
            },
        }
    },
    sales:{
        type:{
            SalesContract : 'sales-contract'
        },
        collection:{
            SalesContract:'sales-contracts'
        }
    }
}
