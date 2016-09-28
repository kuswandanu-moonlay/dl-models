'use strict'
var BaseModel = require('capital-models').BaseModel;
var Supplier = require('../master/supplier');
var Buyer = require('../master/buyer');
var PurchaseOrderItem = require('./purchase-order-item');
var map = require('../map');

module.exports = class PurchaseOrder extends BaseModel {
    constructor(source, type) { 
        super(type || map.purchasing.type.PurchaseOrder, '1.0.0');

        // Define properties
        this.no = '';
        this.refNo = '';
        this.iso = 'FM-6.00-06-005';

        this.realizationOrderId = {};
        this.realizationOrder = {};
        this.purchaseRequestId = {};
        this.purchaseRequest = {};
        this.buyerId = {};
        this.buyer = new Buyer();
        this.purchaseOrderExternalId = {};
        this.purchaseOrderExternal = {};
        this.sourcePurchaseOrderId = null;
        this.sourcePurchaseOrder = null;
        this.supplierId = {};
        this.supplier = new Supplier();

        this.unitId = {};
        this.unit = {};
        
        this.categoryId = {};
        this.category = {};

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

        this.items = (this.items || []).map(item => new PurchaseOrderItem(item));
    }
}
