'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Supplier = require('../master/supplier');
var Currency = require('../master/currency');
var InvoiceNote = require('./invoice-note');

module.exports = class InternNote extends BaseModel {
    constructor(source) {
        super('intern-note', '1.0.0');

        //Define Properties
        this.no = '';
        this.date = new Date();
        this.dueDate = new Date();
        this.supplierId = {};
        this.supplier = new Supplier();
        this.currency = new Currency();
        this.paymentMethod = '';
        this.remark = '';
        this.items = [];
        this.copy(source);

        this.items = (this.items || []).map(item => new InvoiceNote(item));
    }
};