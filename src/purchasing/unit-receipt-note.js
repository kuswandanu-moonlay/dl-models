'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Supplier = require('../master/supplier');
var Unit = require('../master/unit');
var UnitReceiptNoteItem= require('./unit-receipt-note-item'); 
var DeliveryOrder = require('../purchasing/delivery-order');

module.exports = class UnitReceiptNote extends BaseModel {
    constructor(source) {
        super('unit-receipt-note', '1.0.0');

        //Define Properties
        this.no = '';
        this.unitId = {};
        this.unit = new Unit();
        this.date = new Date();  
        this.supplierId = {};
        this.supplier = new Supplier();
        this.deliveryOrderId = {};
        this.deliveryOrder = new DeliveryOrder();
        this.remark = '';
        this.items = [];
        this.isPaid = false;
        this.storageId={};
        this.storageName='';
        this.storageCode='';
        this.isInventory=false;

        this.copy(source);

        this.items = (this.items || []).map(item => new UnitReceiptNoteItem(item)); 
    }
};