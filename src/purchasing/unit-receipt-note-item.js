'use strict'
var BaseModel = require('capital-models').BaseModel;
var Product = require('../master/product');
var uom = require('../master/uom');
var DeliveryOrder = require('../purchasing/delivery-order');

module.exports = class UnitReceiptNoteItem extends BaseModel {
    constructor(source) {
        super('unit-receipt-note', '1.0.0');
        this.deliveryOrderId = {};
        this.deliveryOrder = new DeliveryOrder();
        this.product = new Product();
        this.deliveredQuantity = 0;
        this.deliveredUom = new uom();
        this.copy(source);
    }
}