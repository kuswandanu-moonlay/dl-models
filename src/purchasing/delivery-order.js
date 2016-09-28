'use strict'

var BaseModel = require('capital-models').BaseModel;
var Supplier = require('../master/supplier');
var DeliveryOrderItem= require('./delivery-order-item'); 

module.exports = class DeliveryOrder extends BaseModel {
    constructor(source) {
        super('delivery-order', '1.0.0');

        //Define Properties
        this.no = '';
        this.refNo = '';
        this.date = new Date(); 
        this.supplierDoDate = new Date(); 
        this.supplierId = {};
        this.supplier = new Supplier(); 
        this.isPosted=false;
        this.remark = '';
        this.items = [];
        this.copy(source);

        this.items = (this.items || []).map(item => new DeliveryOrderItem(item)); 
    }
}