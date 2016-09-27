module.exports = {
    auth: {
        Account: require('./src/auth/account'),
        Profile: require('./src/auth/profile'),
        Role: require('./src/auth/role')
    },
    master: {
        Product: require('./src/master/product'),
        Buyer: require('./src/master/buyer'),
        Supplier: require('./src/master/supplier'),
        Uom: require('./src/master/uom'),
        Unit: require('./src/master/unit'),
        Category: require('./src/master/category'),
    },
    purchasing: {
        PurchaseOrderItem: require('./src/purchasing/purchase-order-item'),
        PurchaseOrder: require('./src/purchasing/purchase-order'),
        PurchaseOrderExternal: require('./src/purchasing/purchase-order-external'),
        QualityStandard: require('./src/purchasing/quality-standard'),
        DeliveryOrder: require('./src/purchasing/delivery-order')
    },
    map: require('./src/map'),
    validator: require('./src/validator')
}
