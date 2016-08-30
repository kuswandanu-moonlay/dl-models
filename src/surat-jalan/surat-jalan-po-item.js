'use strict'
var SuratJalanProductItem = require('../surat-jalan/surat-jalan-product-item');

module.exports = class SuratJalanPOItem {
    constructor(source) {
        this.PRNo = '';
        this.PONo = '';
        this.RONo = '';
        this.article = '';
        this.konveksi = '';
        this.currency = '';
        this.dueDate = new Date();
        this.items = [];
        var _items = [];
        for (var item of this.items) {
            _items.push(new SuratJalanProductItem(item));
        }
        this.items = _items;
    }
}