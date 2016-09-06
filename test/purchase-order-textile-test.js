var validate = require('../src/validator').po;

it("#08. Purchase Order Textile should valid", function () {
    var PurchaseOrderTextile = require('../src/po/purchase-order-textile');
    validate.PurchaseOrderTextile(new PurchaseOrderTextile());
})

