'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Product = require('../master/product');
var uom = require('../master/uom');
var Currency = require('../master/currency');
var Supplier = require('../master/supplier');
var Vat = require('../master/vat');

module.exports = class PurchaseOrderItem extends BaseModel {
    constructor(source, type) {
        super(type || 'purchase-order-external-item', '1.0.0');

        this.poNo = '';
        this.poId = {};

        this.prNo = '';
        this.prId = {};
        this.prRefNo = '';
        this.roNo = '';

        this.productId = {};
        this.product = new Product();

        this.defaultQuantity = 0;
        this.defaultUom = new uom();

        this.dealQuantity = 0;
        this.dealUom = new uom();

        this.realizationQuantity = 0;

        this.pricePerDealUnit = 0;
        this.priceBeforeTax = 0;
        this.budgetPrice = 0;

        this.conversion = 1;
        this.isClosed = false;
        this.useIncomeTax = false;

        this.remark = '';
        this.copy(source);
    }
};
