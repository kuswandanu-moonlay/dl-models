'use strict'
var BaseModel = require('capital-models').BaseModel;
var Product = require('../master/product');
var uom = require('../master/uom');

module.exports = class PurchaseOrderItem extends BaseModel {
    constructor(source, type) {
        super(type || 'purchase-order-item', '1.0.0');

        this.product = new Product();
        
        this.defaultQuantity = 0;
        this.defaultUom = new uom();
        
        this.dealQuantity = 0;
        this.dealUom = new uom();
        
        this.realizationQuantity = 0;
        
        this.pricePerDealUnit = 0;
        this.conversion = '';
        this.remark = '';
        
        this.fulfillments = [];
        
        this.copy(source);
    }
}