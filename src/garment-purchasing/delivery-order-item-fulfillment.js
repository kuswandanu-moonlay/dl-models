'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var uom = require('../master/uom');
var Currency = require('../master/currency');
module.exports = class DeliveryOrderItemFulfillment extends BaseModel {
    constructor(source) {
        super('delivery-order-item-fulfillment', '1.0.0');

        //Define Properties 
        this.purchaseOrderId = {};
        this.purchaseOrderNo = '';
        this.purchaseRequestId = {};
        this.purchaseRequestNo = '';
        this.purchaseRequestRefNo = '';
        this.productId = {};
        this.product = {};
        this.purchaseOrderQuantity = 0;
        this.purchaseOrderUom = new uom();
        this.deliveredQuantity = 0;
        this.realizationQuantity = [];
        this.remainsQuantity = 0;
        this.pricePerDealUnit = 0;
        this.quantityConversion = 0;
        this.uomConversion = new uom();
        this.conversion = 1;
        this.currency = new Currency();
        this.remark = '';
        this.corrections = [];

        this.copy(source);
    }
};