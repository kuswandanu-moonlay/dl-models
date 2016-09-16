module.exports = {
        core: {
                product: require("./core/product-validator"),
                buyer: require("./core/buyer-validator"),
                supplier: require("./core/supplier-validator"),
                uom: require("./core/uom-validator"), 
                unit: require("./core/unit-validator"), 
                category: require("./core/category-validator"), 
        },
        po: {
                PurchaseOrder: require("./po/purchase-order-validator"),
                PurchaseOrderItem: require("./po/purchase-order-item-validator"),
                PurchaseOrderGroup: require("./po/purchase-order-group-validator")
        },
        suratJalan: {
                SuratJalan: require("./surat-jalan/surat-jalan-validator")
        }
};