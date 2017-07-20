'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Buyer = require('../master/buyer');
var PurchaseOrderItem = require('./purchase-order-item');
var map = require('../map');

module.exports = class PurchaseOrder extends BaseModel {
    constructor(source, type) {
        super(type || map.purchasing.type.PurchaseOrder, '1.0.0');

        // Define properties
        this.iso = 'FM-6.00-06-005';

        this.no = '';
        this.refNo = '';
        this.roNo='';

        this.buyerId = {};
        this.buyer = new Buyer();
        this.artikel = '';

        this.purchaseRequestId = {};
        this.purchaseRequest = {};

        this.sourcePurchaseOrderId = null;
        this.sourcePurchaseOrder = null;

        this.unitId = {};
        this.unit = {};

        this.date = new Date();
        this.expectedDeliveryDate = new Date();
        this.actualDeliveryDate = new Date();
        this.shipmentDate = new Date();
        
        this.isPosted = false;
        this.isClosed = false;

        this.remark = '';
        this.items = [];

        this.status = {};

        this.copy(source);

        this.items = (this.items || []).map(item => new PurchaseOrderItem(item));
    }
};
