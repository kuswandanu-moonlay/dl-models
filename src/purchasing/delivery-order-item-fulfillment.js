'use strict'

var BaseModel = require('capital-models').BaseModel;
var uom = require('../master/uom');
module.exports = class DeliveryOrderItemFulfillment extends BaseModel {
    constructor(source) {
        super('delivery-order-item-fulfillment', '1.0.0');

        //Define Properties 
        this.purchaseOrderId = {};
        this.purchaseOrder = {};
        this.productId = {};
        this.product = {};
        this.purchaseOrderQuantity = 0;
        this.purchaseOrderUom = new uom();
        this.deliveredQuantity = 0;
        this.realizationQuantity = 0;
        this.remark = '';

        this.copy(source);
    }
}