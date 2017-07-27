'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Product = require('../master/product');
var uom = require('../master/uom');
var Currency = require('../master/currency');
var Supplier = require('../master/supplier');
var Vat = require('../master/vat');

module.exports = class PurchaseOrderItem extends BaseModel {
    constructor(source, type) {
        super(type || 'purchase-order-item', '1.0.0');

        this.refNo='';

        this.productId = {};
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

        this.categoryId = {};
        this.category = {};

        this.conversion = 1;
        this.isPosted = false;
        this.isClosed=false;

        this.purchaseOrderExternalId = {};
        this.purchaseOrderExternal = {};

        this.supplierId = {};
        this.supplier = new Supplier();

        this.freightCostBy = '';

        this.paymentMethod = '';
        this.paymentDueDays = 0;

        this.vat = new Vat();
        this.useVat = false;
        this.vatRate = 0;
        this.useIncomeTax = false;

        this.status = {};
        
        this.remark = '';

        this.fulfillments = [];
        
        this.copy(source);
    }
};
