'use strict'
var SuratJalanProductItem = require('../surat-jalan/surat-jalan-product-item');

module.exports = class SuratJalanPOItem {
    constructor(source) {
        this.planPO = '';
        this.poPembelian = '';
        this.article = '';
        this.totalPO = 0;
        this.totalSJ = 0;
        this.items = [];
        var _items = [];
        for (var item of this.items) {
            _items.push(new SuratJalanProductItem(item));
        }
        this.items = _items;
    }
}