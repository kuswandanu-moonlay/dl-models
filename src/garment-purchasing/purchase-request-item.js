'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Product = require('../master/product');
var uom = require('../master/uom');

module.exports = class PurchaseRequestItem extends BaseModel {
    constructor(source, type) {
        super(type || 'purchase-request-item', '1.0.0');

        this.refNo=''; //Nopo
        this.productId = {};
        this.product = new Product();
        this.quantity = 0;
        this.budgetPrice = 0;
        this.uom = new uom();
        
        this.categoryId = {};
        this.category = {};

        this.deliveryOrderNos = [];
        this.purchaseOrderIds = []; //simpan Id purchase-order yang memuat pr-item ini;
        this.isUsed = false;
        this.remark = '';
        this.colors = [];
        this.id_po = '';

        this.copy(source);
    }
};