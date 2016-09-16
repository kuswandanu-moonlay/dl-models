module.exports = {
    master: {
        type: { 
            Buyer: 'buyer',
            Supplier: 'supplier',
            uom: 'unit-of-measurement'
        },
        collection: {
            Buyer: 'buyers',
            Supplier: 'suppliers',
            uom: 'unit-of-measurements',
            Product: 'products',
            Unit:'unit',
            Category:'category'
        }
    },
    purchasing: {
        type: {
            PurchaseOrder: 'purchase-order',
            DeliveryOrder: 'delivery-order',
        },
        collection: {
            PurchaseOrder: 'purchase-orders',
            PurchaseOrderExternal: 'purchase-order-externals',
            DeliveryOrder: 'delivery-orders',
        }
    }
}
