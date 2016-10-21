'use strict'
var BaseModel = require('capital-models').BaseModel; 
var UnitReceiptNote= require('./unit-receipt-note'); 
var Product = require('../master/product');
var uom = require('../master/uom');
module.exports = class UnitPaymentOrderItem extends BaseModel {
    constructor(source) {
        super('unit-payment-order-item', '1.0.0');
        //Define Properties
        this.unitReceiptNoteId= {};
        this.unitReceiptNote= new UnitReceiptNote();  
        this.copy(source); 
    }
}