'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var uom = require('../master/uom');
var Product = require('../master/product');
var InvoiceNoteDeliveryOrderItem= require('./invoice-note-delivery-order-item'); 

module.exports = class InvoiceNoteItem extends BaseModel {
    constructor(source) {
        super('invoice-note-item', '1.0.0');

        this.deliveryOrderId = {};
        this.deliveryOrderNo = '';
        this.deliveryOrderDate = new Date();
        this.deliveryOrderSupplierDoDate = new Date();
        
        this.items = [];
        this.copy(source);

        this.items = (this.items || []).map(item => new InvoiceNoteDeliveryOrderItem(item)); 
    }
};