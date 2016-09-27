module.exports = {
    auth: {
        type: { 
            Account: 'account',
            Profile: 'profile',
            Role: 'role'
        },
        collection: {
            Account: 'accounts',
            Role: 'roles'
        }
    },
    master: {
        type: { 
            Buyer: 'buyer',
            Supplier: 'supplier',
            uom: 'unit-of-measurement',
            Currency: 'currency'
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
