'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var PurchaseOrderExternal = require('../purchasing/purchase-order-external');
var DeliveryOrderItemFulfillment = require('../purchasing/delivery-order-item-fulfillment');

module.exports = class DeliveryOrderItem extends BaseModel {
    constructor(source) {
        super('delivery-order-item', '1.0.0');

        //Define Properties 
        this.purchaseOrderExternalId = {};
        this.purchaseOrderExternalNo = '';
        this.isClosed = false;

        this.fulfillments = [];
        this.copy(source);
        this.fulfillments = (this.fulfillments || []).map(fulfillment => new DeliveryOrderItemFulfillment(fulfillment));
    }
};