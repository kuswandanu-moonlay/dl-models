'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var PurchaseRequestItem = require('./purchase-request-item');
var Budget= require('../master/budget');
var map = require('../map');

module.exports = class PurchaseRequest extends BaseModel {
    constructor(source, type) { 
        super(type || map.purchasing.type.PurchaseRequest, '1.0.0');

        this.no='';
        this.date = new Date();
        this.expectedDeliveryDate = '';
        
        this.budgetId = {};
        this.budget = new Budget();

        this.unitId = {};
        this.unit = {};

        this.categoryId = {};
        this.category = {};

        this.isPosted = false;
        this.isUsed = false;
        this.remark = '';

        this.items = [];
        this.internal = false;

        this.status = {};
        
        this.purchaseOrderIds = []; //simpan Id purchase-order yang memuat pr-item ini;
        // this.internal=false;
        
        this.copy(source);

        this.items = (this.items || []).map(item => new PurchaseRequestItem(item));
    }
};