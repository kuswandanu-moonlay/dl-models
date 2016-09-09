'use strict'

var BaseModel = require('capital-models').BaseModel;
var Supplier = require('../core/supplier');
var PurchaseOrder= require('../po/purchase-order');

module.exports = class CostCalculation extends BaseModel {
    constructor(source) {
        super('intern-note', '1.0.0');

        this.NINo='';
        this.NIDate= new Date();
        this.InvoiceNo='';
        this.TaxNoteNo='';
        this.SJNo='';
        this.supplierId = {};
        this.supplier = new Supplier();
        this.Items=[];

        this.copy(source);

    }
}