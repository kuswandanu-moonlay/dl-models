'use strict'

var BaseModel = require('capital-models').BaseModel; 
 
module.exports = class DeliveryOrderItemFulfillment extends BaseModel {
    constructor(source) {
        super('delivery-order-item-fulfillment', '1.0.0');

        //Define Properties 
        this.purchaseOrderId = {};
        this.productId = {};
        this.quantity = 0;
        this.remark = '';

        this.copy(source);
    }
}