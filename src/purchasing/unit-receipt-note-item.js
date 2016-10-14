'use strict'
var BaseModel = require('capital-models').BaseModel;
var Product = require('../master/product');
var uom = require('../master/uom');

module.exports = class UnitReceiptNoteItem extends BaseModel {
    constructor(source) {
        super('unit-receipt-note', '1.0.0');
        this.product = new Product();
        this.deliveredQuantity = 0;
        this.deliveredUom = new uom();
        this.purchaseOrderQuantity = 0;
        this.PrNo='';
        this.remark = '';
        this.copy(source);
    }
}