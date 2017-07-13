'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var PurchaseRequestItem = require('./garment-purchase-request-item');
var map = require('../map');

module.exports = class PurchaseRequest extends BaseModel {
    constructor(source, type) { 
        super(type || map.garmentPurchasing.type.PurchaseRequest, '1.0.0');

        this.no=''; //auto generate
        this.refNo=''; //Nopo
        this.roNo=''; //Ro

        this.buyer = ''; //buyer
        this.artikel = ''; //artikel

        this.date = new Date(); //TgValid
        this.expectedDeliveryDate = new Date(); //set blank
        this.shipmentDate = new Date(); //Shipment
        
        this.unitId = {};
        this.unit = {};

        this.categoryId = {};
        this.category = {};

        this.isPosted = true;
        this.isUsed = false;
        this.remark = '';
        this.status = {};
        this.purchaseOrderIds = []; //simpan Id purchase-order yang memuat pr-item ini;
        
        this.items = [];
        this.items = (this.items || []).map(item => new PurchaseRequestItem(item));
        
        this.copy(source);
    }
};