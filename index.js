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
        Currency: require('./src/master/currency'),
        Vat: require('./src/master/vat')
    },
    // costCalculation:{
    //     CostCalculation: require("./src/cost-calculation/cost-calculation")
    // },
    // po: {
    //     PurchaseOrderItem: require('./src/po/purchase-order-item'),
    //     PurchaseOrder: require('./src/po/purchase-order'),
    //     PurchaseOrderGroup: require('./src/po/purchase-order-group'),
    //     POGarmentGeneral: require('./src/po/purchase-order-garment-general'),
    //     POGarmentSparepart: require('./src/po/purchase-order-garment-sparepart'),
    //     POTextileJobOrder: require('./src/po/purchase-order-textile-job-order-external'),
    //     POTextileSparepart: require('./src/po/purchase-order-textile-sparepart'),
    //     POGarmentAccessories: require('./src/po/purchase-order-garment-accessories'),
    //     POGarmentFabric: require('./src/po/purchase-order-garment-fabric'),
    //     StandardQualityTestPercentage: require('./src/po/standard-quality-test-percentage'),
    //     POTextileGeneralATK: require('./src/po/purchase-order-textile-general-atk'),
    //     POGarmentJobOrderAccessories: require('./src/po/purchase-order-garment-job-order-accessories'),
    //     POTekstilGeneralOtherATK: require('./src/po/purchase-order-textile-general-other-atk'),
    //     POGarmentJobOrderFabric: require('./src/po/purchase-order-garment-job-order-fabric'),
    //     POTextile: require('./src/po/purchase-order-textile')

    // },
    // suratJalan: {
    //     SuratJalan: require("./src/surat-jalan/surat-jalan")
    // },
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
