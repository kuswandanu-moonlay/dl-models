'use strict'
var BaseModel = require('capital-models').BaseModel;
var Product = require('../core/product');
var uom = require('../core/uom');

module.exports = class PurchaseOrderItem extends BaseModel {
    constructor(source, type) {
        super(type || 'purchase-order-item', '1.0.0');

        this.price = 0;
        this.description = '';
        this.dealQuantity = 0;
        this.dealMeasurement = new uom();
        this.defaultQuantity = 0;
        this.defaultMeasurement = new uom();
        this.realizationQuantity = 0;
        this.product = new Product();
        
        this.copy(source);
    }
}