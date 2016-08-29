'use strict'
var PurchaseOrder = require('./purchase-order');
var map = require('../map');

module.exports = class POGarmentFabric extends PurchaseOrder {
    constructor(source) {
        super(source, map.po.type.POGarmentFabric);
        this.iso = 'FM-00-PJ-02-004';
        this.otherTest = '';
        
        this.copy(source);
    }
}