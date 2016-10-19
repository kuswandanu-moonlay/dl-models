module.exports = {

        auth: {
                account: require("./auth/account-validator"),
                profile: require("./auth/profile-validator"),
                role: require("./auth/role-validator")
        },
        master: {
                product: require("./master/product-validator"),
                buyer: require("./master/buyer-validator"),
                supplier: require("./master/supplier-validator"),
                uom: require("./master/uom-validator"),
                unit: require("./master/unit-validator"),
                category: require("./master/category-validator"),
                currency: require("./master/currency-validator"),
                vat: require("./master/vat-validator")
        },
        purchasing: {
                purchaseOrder: require("./purchasing/purchase-order-validator"),
                purchaseOrderItem: require("./purchasing/purchase-order-item-validator"),
                purchaseOrderExternal: require("./purchasing/purchase-order-external-validator"),
                deliveryOrder: require("./purchasing/delivery-order-validator"),
                unitReceiptNote: require("./purchasing/unit-receipt-note-validator"),
                UnitPaymentOrder: require("./purchasing/unit-payment-order-validator"),
                UnitPaymentOrderItem: require("./purchasing/unit-payment-order-item-validator"),
        }
};