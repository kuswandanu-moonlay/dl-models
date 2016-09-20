'use strict'

var BaseModel = require('capital-models').BaseModel;
var Supplier = require('../master/supplier');
var PurchaseOrder= require('../purchasing/purchase-order');

module.exports = class DeliveryOrder extends BaseModel {
    constructor(source) {
        super('delivery-order', '1.0.0');

        //Define Properties
        this.no = '';
        this.refNo = '';
        this.date = new Date(); 
        this.supplierId = {};
        this.supplier = new Supplier(); 
        this.isPosted=false;
        this.remark = '';
        this.items = [];
        this.copy(source);

        this.items = (this.items || []).map(item => new PurchaseOrder(item)); 
    }
}