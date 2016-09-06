var validate = require('../src/validator').po;

it("#08. Purchase Order Texti;e should valid", function () {
    var PurchaseOrderTextile = require('../src/po/purchase-order-textile');
    validate.PurchaseOrderTextile(new PurchaseOrderTextile());
})

