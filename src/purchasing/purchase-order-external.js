'use strict';
var BaseModel = require('capital-models').BaseModel;
var Supplier = require('../master/supplier');
var Currency = require('../master/currency');
var Vat = require('../master/vat');
var PurchaseOrder = require('../purchasing/purchase-order');
var QualityStandard = require('./quality-standard');

module.exports = class PurchaseOrderExternal extends BaseModel {
    constructor(source, type) {
        type = type || 'purchase-order-external';

        super(type, '1.0.0');

        //Define properties
        this.no = '';
        this.refNo = '';
        this.supplierId = {};
        this.supplier = new Supplier();
        

        this.freightCostBy = '';
        this.currency = new Currency();
        this.currencyRate = 1;

        this.paymentMethod = '';
        this.paymentDueDays = 0;

        this.vat = new Vat();
        this.useVat = false;
        this.vatRate = 0;
        this.useIncomeTax = false;
         
        this.date = new Date();
        this.expectedDeliveryDate = new Date();
        this.actualDeliveryDate = new Date();
        this.isPosted = false;
        this.isClosed=false;
        this.remark = ''; 
        this.items = [];

        this.copy(source);
        
        this.items = (this.items || []).map(item => new PurchaseOrder(item));

    }
};
