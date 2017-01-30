'use strict';
var BaseModel = require('model-toolkit').BaseModel; 
var Vat = require('../master/vat');
var Category = require('../master/category');
var Currency = require('../master/currency');
var Supplier = require('../master/supplier');
var UnitPaymentOrderItem = require('./unit-payment-order-item');
module.exports = class UnitPaymentOrder extends BaseModel {
    constructor(source) {
        super('unit-payment-order', '1.0.0');
        //Define Properties
        this.no = '';
        this.divisionId = {};
        this.division = {};
        this.date = new Date();
        this.categoryId = {};
        this.category = new Category();
        this.currency = new Currency();
        this.vat = new Vat();
        this.paymentMethod = '';
        this.supplierId = {};
        this.supplier = new Supplier();
        this.invoceNo = '';
        this.invoceDate = new Date();
        this.incomeTaxNo = '';
        this.incomeTaxDate = new Date();
        this.useVat = false;
        this.useIncomeTax = false;
        this.vatNo = '';
        this.vatDate = new Date();
        this.dueDate = new Date();
        this.vatRate = 0;
        this.remark = '';
        this.items = [];
        this.copy(source);

        this.items = (this.items || []).map(item => new UnitPaymentOrderItem(item));
    }
};
