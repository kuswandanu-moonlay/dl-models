'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Product = require('../master/product');
var uom = require('../master/uom');
var Currency = require('../master/currency');

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
        this.priceBeforeTax = 0;
        this.budgetPrice = 0;
        
        this.currency = new Currency();
        this.currencyRate = 1;
        
        this.conversion = 1;
        this.isClosed=false;
        this.useIncomeTax = false;
        this.remark = '';
        
        this.fulfillments = [];
        
        this.copy(source);
    }
};
