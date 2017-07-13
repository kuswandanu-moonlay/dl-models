'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Supplier = require('../master/supplier');
var Buyer = require('../master/buyer');
var Currency = require('../master/currency');
var PurchaseOrderItem = require('./purchase-order-item');
var map = require('../map');
var Vat = require('../master/vat');

module.exports = class PurchaseOrder extends BaseModel {
    constructor(source, type) {
        super(type || map.purchasing.type.PurchaseOrder, '1.0.0');

        // Define properties
        this.no = '';
        this.refNo = '';
        this.iso = 'FM-6.00-06-005';
        this.roNo=''; //Ro

        this.buyer = ''; //buyer
        this.artikel = ''; //artikel

        this.purchaseRequestId = {};
        this.purchaseRequest = {};
        // this.buyerId = {};
        // this.buyer = new Buyer();

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
        this.shipmentDate = new Date(); //Shipment
        
        this.isPosted = false;
        this.isClosed = false;
        this.remark = '';
        this.items = [];

        this.status = {};

        this.copy(source);

        this.items = (this.items || []).map(item => new PurchaseOrderItem(item));
    }
};
