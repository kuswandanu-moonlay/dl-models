require("should");
var validateDeliveryOrder = require('./delivery-order-validator');
var validateProduct = require('../master/product-validator');
var validateUom = require('../master/uom-validator');

module.exports = function (data) {
    
    data.should.have.property('deliveryOrderId');
    data.deliveryOrderId.should.instanceof(Object);

    data.should.have.property('deliveryOrder');
    data.deliveryOrder.should.instanceof(Object);
    validateDeliveryOrder(data.deliveryOrder);

    data.should.have.property('product');
    data.product.should.instanceof(Object);
    validateProduct(data.product);

    data.should.have.property('deliveredQuantity');
    data.deliveredQuantity.should.instanceOf(Number);

    data.should.have.property('deliveredUom');
    data.deliveredUom.should.instanceOf(Object);
    validateUom(data.deliveredUom);
}