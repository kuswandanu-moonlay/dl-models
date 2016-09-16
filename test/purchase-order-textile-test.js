var validate = require('../src/validator').po;
var map = require('../src/map');
it("#08. Purchase Order Textile should valid", function () {
    var PurchaseOrderTextile = require('../src/po/purchase-order-textile');
    
    poTextile = new PurchaseOrderTextile();
    
    validate.PurchaseOrder(poTextile);
    poTextile.should.have.property('_type');
    poTextile._type.should.be.equal(map.po.type.POTextile);
})

