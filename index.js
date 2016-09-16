
module.exports = { 
    master: {
        Product: require('./src/master/product'),
        Fabric: require('./src/master/fabric'),
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
        DeliveryOrder:require('./src/purchasing/delivery-order')
    },
    map: require('./src/map'),
    validator: require('./src/validator')
}
