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
            Storage: 'storage',
            Company: 'company',
            Contact: 'contact'
        },
        collection: {
            Buyer: 'buyers',
            Supplier: 'suppliers',
            uom: 'unit-of-measurements',
            Product: 'products',
            GarmentProduct: 'garment-products',
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
            DesignMotive: 'design-motives',
            Storage: 'storages',
            Company: 'companies',
            Contact: 'contacts',
            BadOutputReason: 'bad-output-reasons',
            FinishingPrintingDurationEstimation: 'fp-duration-estimations'
        }
    },
    inventory: {
        finishingPrinting: {
            type: {
                FPInventorySummary: "fp-inventory-summary",
                FPInventoryMovement: "fp-inventory-movement",
                FPPackingReceipt: "fp-packing-receipt",
                FPReturToQCDoc:"fp-retur-to-qc-doc",
                FPPackingShipmentDocument: "fp-shipment-document",
                FPReturFromBuyerDoc:"fp-retur-fr-byr-docs"
            },
            collection: {
                FPInventorySummary: "fp-inventory-summaries",
                FPInventoryMovement: "fp-inventory-movements",
                FPPackingReceipt: "fp-packing-receipts",
                FPReturToQCDoc:"fp-retur-to-qc-docs",
                FPPackingShipmentDocument: "fp-shipment-documents",
                FPReturFromBuyerDoc:"fp-retur-fr-byr-docs"
            }
        },
        type: {
            InventorySummary: "inventory-summary",
            InventoryMovement: "inventory-movement",
            InventoryDocument: "inventory-document"
        },
        collection: {
            InventorySummary: "inventory-summaries",
            InventoryMovement: "inventory-movements",
            InventoryDocument: "inventory-documents"
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
    garmentPurchasing: {
        type: {
            PurchaseOrder: 'purchase-order',
            DeliveryOrder: 'delivery-order',
            PurchaseRequest: 'purchase-request',
            UnitPaymentOrder: 'unit-payment-order',
            GarmentPurchaseCorrection: 'garment-purchase-correction'
        },
        collection: {
            GarmentPurchaseRequest: 'garment-purchase-requests',
            GarmentPurchaseOrder: 'garment-purchase-orders',
            Customs : 'garment-customs',
            GarmentPurchaseOrderExternal: 'garment-purchase-order-externals',
            GarmentDeliveryOrder: 'garment-delivery-orders',
            GarmentInvoiceNote: 'garment-invoice-notes',
            GarmentPurchaseCorrection: 'garment-purchase-correction',
            GarmentUnitReceiptNote: 'garment-unit-receipt-notes',
            GarmentInternNote: 'garment-intern-notes',
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
                    PackingItem: "packing-item",
                    InspectionLotColor: "inspection-lot-color"
                },
                collection: {
                    Packing: "packings",
                    PackingItem: "packing-items",
                    InspectionLotColor: "inspection-lot-colors"
                }
            }

        },
    },
    sales: {
        type: {
            ProductionOrder: 'production-order',
            FinishingPrintingSalesContract: 'finishing-printing-sales-contract',
            WeavingSalesContract: 'weaving-sales-contract',
            SpinningSalesContract: 'spinning-sales-contract',
            DealTrackingBoard: 'deal-tracking-board',
            DealTrackingStage: 'deal-tracking-stage',
            DealTrackingDeal: 'deal-tracking-deal',
            DealTrackingActivity: 'deal-tracking-activity'
        },
        collection: {
            ProductionOrder: 'production-orders',
            FinishingPrintingSalesContract: 'finishing-printing-sales-contracts',
            WeavingSalesContract: 'weaving-sales-contracts',
            SpinningSalesContract: 'spinning-sales-contracts',
            DealTrackingBoard: 'deal-tracking-boards',
            DealTrackingStage: 'deal-tracking-stages',
            DealTrackingDeal: 'deal-tracking-deals',
            DealTrackingActivity: 'deal-tracking-activities'
        }
    }
}
