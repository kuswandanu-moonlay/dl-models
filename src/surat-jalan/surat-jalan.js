'use strict'

var BaseModel = require('capital-models').BaseModel;
var Supplier = require('../core/supplier');
var PurchaseOrder= require('../po/purchase-order');

module.exports = class SuratJalan extends BaseModel {
    constructor(source) {
        super('surat-jalan', '1.0.0');

        //Define Properties
        this.RefSJNo = '';
        this.SJNo = '';
        this.SJDate = new Date();
        this.arrivalDate = new Date();
        this.supplierId = {};
        this.supplier = new Supplier();
        this.deliveryType = '';
        this.deliveryNo = '';
        this.isPosted=false;
        this.items = [];
        this.description = '';
        this.copy(source);

        var _items = [];
        for (var item of this.items) {
            _items.push(new PurchaseOrder(item));
        }
        this.items = _items;
    }
}