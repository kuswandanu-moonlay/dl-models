'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Company = require('../master/company');
var Contact = require('../master/contact');
// var Product = require('../master/product');
var Uom = require('../master/uom');

module.exports = class DealTrackingDeal extends BaseModel {
    constructor(source) {
        super('deal-tracking-deal', '1.0.0'); 

        this.code = '';
        this.name = '';
        this.amount = 0;
        this.companyId = {};
        this.company = new Company();
        this.contactId = {};
        this.contact = new Contact();
        this.closeDate = new Date();
        // this.productId = {};
        // this.product = new Product();
        this.uomId = {};
        this.uom = new Uom();
        this.quantity = 0;
        this.description = '';
        this.reason = '';

        this.copy(source);
    }
};