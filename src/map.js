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
            Step: 'step',
            MachineType: 'machine-types',
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
            ThreadSpecification: 'thread-specifications',
            UsterClassification: 'uster-classifications',
            LotMachine: 'lot-machines',
            YarnEquivalentConversion: 'yarn-equivalent-conversions',
            Uster: 'usters',
            LampStandard: 'lamp-standards',
            AccountBank: 'account-banks',
            Instruction: 'instructions',
            OrderType: 'order-types',
            ProcessType: 'process-types',
            ColorType: 'color-types',
            Step: 'steps',
            MachineSpesificationStandard: 'machine-spesification-standards',
            MaterialConstruction: 'material-constructions',
            YarnMaterial: 'yarn-materials',
            FinishType: 'finish-types',
            StandardTest: 'standard-tests',
            Comodity: 'comodities',
            Quality: 'qualities',
            TermOfPayment: 'term-of-payments',
            DesignMotive: 'design-motives'
        }
    },
    inventory:{
      finishingPrinting : {
          type:{
              FPInventorySummary:"fp-inventory-summary",
              FPInventoryMovement:"fp-inventory-movement",
          },
          collection:{
              FPInventorySummary:"fp-inventory-summaries",
              FPInventoryMovement:"fp-inventory-movements",
          }
      }  
    },
    purchasing: {
        type: {
            PurchaseOrder: 'purchase-order',
            DeliveryOrder: 'delivery-order',
            PurchaseRequest: 'purchase-request',
            UnitPaymentOrder: 'unit-payment-order',
        },
        collection: {
            PurchaseOrder: 'purchase-orders',
            PurchaseOrderExternal: 'purchase-order-externals',
            DeliveryOrder: 'delivery-orders',
            UnitReceiptNote: 'unit-receipt-notes',
            PurchaseRequest: 'purchase-requests',
            UnitPaymentCorrectionNote: 'unit-payment-correction-notes',
            UnitPaymentOrder: 'unit-payment-orders'
        }
    },
    production: {
        spinning: {
            winding: {
                type: {
                    WindingQualitySampling: 'winding-quality-sampling',
                    WindingProductionOutput: 'winding-production-output'
                },
                collection: {
                    WindingQualitySampling: 'winding-quality-samplings',
                    WindingProductionOutput: 'winding-production-outputs'
                }
            },
            type: {
                DailySpinningProductionReport: 'daily-spinning-production-report'
            },
            collection: {
                DailySpinningProductionReport: 'daily-spinning-production-report'
            }
        },
        finishingPrinting: {
            type: {
                DailyOperation: 'daily-operation',
                MonitoringSpecificationMachine: 'monitoring-specification-machines'
            },
            collection: {
                MonitoringEvent: 'monitoring-events',
                DailyOperation: 'daily-operations',
                Kanban: 'kanbans',
                MonitoringSpecificationMachine: 'monitoring-specification-machines'

            },
            qualityControl: {
                defect: {
                    type: {
                        FabricTestCriterion: "fabric-test-criterion",
                        FabricGradeTest: "fabric-grade-test",
                        FabricQualityControl: "fabric-quality-control"
                    },
                    collection: {
                        FabricQualityControl: "fabric-quality-controls"
                    }
                },

                type: {
                    Packing: "packing",
                    PackingItem: "packing-item"
                },
                collection: {
                    Packing: "packings",
                    PackingItem: "packing-items",
                }
            }

        },
    },
    sales: {
        type: {
            ProductionOrder: 'production-order',
            FinishingPrintingSalesContract: 'finishing-printing-sales-contract',
            WeavingSalesContract: 'weaving-sales-contract',
            SpinningSalesContract: 'spinning-sales-contract'
        },
        collection: {
            ProductionOrder: 'production-orders',
            FinishingPrintingSalesContract: 'finishing-printing-sales-contracts',
            WeavingSalesContract: 'weaving-sales-contracts',
            SpinningSalesContract: 'spinning-sales-contracts'
        }
    }
}
