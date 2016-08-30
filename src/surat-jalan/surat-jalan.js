'use strict'

var BaseModel = require('capital-models').BaseModel;
var Supplier = require('../core/supplier');
var SuratJalanPOItem = require('../surat-jalan/surat-jalan-po-item');

module.exports = class SuratJalan extends BaseModel {
    constructor(source) {
        super('surat-jalan', '1.0.0');

        //Define Properties
        this.SJNo = '';
        this.SJDate = new Date();
        this.ProductArriveDate = new Date();
        this.supplierId = {};
        this.supplier = new Supplier();
        this.pps = false;
        this.deliveryType = '';
        this.deliveryNo = '';
        this.totalQty = 0;
        this.totalAmount = 0;
        this.items = [];
        this.copy(source);

        var _items = [];
        for (var item of this.items) {
            _items.push(new SuratJalanPOItem(item));
        }
        this.item = _items;
    }
}