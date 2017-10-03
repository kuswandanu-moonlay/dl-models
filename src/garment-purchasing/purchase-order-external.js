'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Supplier = require('../master/supplier');
var Currency = require('../master/currency');
var Vat = require('../master/vat');
var PurchaseOrderExternalItem = require('./purchase-order-external-item');
var QualityStandard = require('./purchase-order-external-quality-standard');

module.exports = class PurchaseOrderExternal extends BaseModel {
    constructor(source, type) {
        type = type || 'purchase-order-external';

        super(type, '1.0.0');

        //Define properties
        this.no = '';

        this.supplierId = {};
        this.supplier = new Supplier();

        this.freightCostBy = '';

        this.currency = new Currency();
        this.currencyRate = 1;

        this.paymentMethod = '';
        this.paymentType = '';
        this.paymentDueDays = 0;

        this.vat = new Vat();
        this.useVat = false;
        this.vatRate = 0;
        this.useIncomeTax = false;
        
        this.category = "";

        this.date = new Date();
        this.expectedDeliveryDate = new Date();

        this.isPosted = false;
        this.isClosed = false;
        this.remark = '';
        this.items = [];

        this.status = {};
        this.qualityStandard = new QualityStandard();

        this.copy(source);

        this.items = (this.items || []).map(item => new PurchaseOrderExternalItem(item));

    }
};
