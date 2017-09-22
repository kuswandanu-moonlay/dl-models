'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Supplier = require('../master/supplier');
var Currency = require('../master/currency');
var Vat = require('../master/vat');

var InvoiceNoteItem= require('./invoice-note-item'); 

module.exports = class InvoiceNote extends BaseModel {
    constructor(source) {
        super('invoice-note', '1.0.0');

        //Define Properties
        this.no = '';
        this.refNo = '';
        this.date = new Date();  
        this.supplierId = {};
        this.supplier = new Supplier();
        this.currency = new Currency();
        
        this.incomeTaxNo = '';
        this.incomeTaxInvoiceNo = '';
        this.incomeTaxDate = new Date();
        this.useIncomeTax = false;

        this.vatNo = '';
        this.vatInvoiceNo = '';
        this.vatDate = new Date();
        this.useVat = false;
        this.vat = new Vat();

        this.isPayTax  = false;
        this.hasInternNote = false;
        this.remark = '';
        this.items = [];
        this.copy(source);

        this.items = (this.items || []).map(item => new InvoiceNoteItem(item)); 
    }
};