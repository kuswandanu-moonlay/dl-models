'use strict'
var BaseModel = require('capital-models').BaseModel;
var Supplier = require('../master/supplier');
var PurchaseOrder = require('../purchasing/purchase-order');
var QualityStandard = require('./quality-standard');

module.exports = class PurchaseOrderExternal extends BaseModel {
    constructor(source, type) {
        type = type || 'purchase-order-external';

        super(type, '1.0.0');

        //Define properties
        this.no = '';
        this.supplierId = {};
        this.supplier = new Supplier();
        

        this.freightCostBy = '';
        this.currency = '';
        this.currencyRate = 1;

        this.paymentMethod = '';
        this.paymentDueDays = 30;

        this.useVat = false;
        this.vatRate = 0;
        this.useIncomeTax = false;
         
        this.date = new Date();
        this.expectedDeliveryDate = new Date();
        this.actualDeliveryDate = new Date();
        this.isPosted = false;
        this.remark = ''; 
        this.items = [];

        this.copy(source);
        
        this.items = (this.items || []).map(item => new PurchaseOrder(item));

    }
}
