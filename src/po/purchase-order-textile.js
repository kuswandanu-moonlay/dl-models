'use strict'
var PurchaseOrder = require('./purchase-order');
var map = require('../map');

module.exports = class POTextile extends PurchaseOrder {
    constructor(source) {
        super(source, map.po.type.POTextile);
        this.iso = 'FM-600-06-005';
        this.unit = '';
        this.PRDate = new Date();
        this.category = '';
        this.requestDate = new Date();
        this.staffName = '';
        this.receivedDate = new Date();
    }
}