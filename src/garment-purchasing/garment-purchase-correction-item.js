'use strict';
var BaseModel = require('model-toolkit').BaseModel;

module.exports = class GarmentPurchaseCorrectionItem extends BaseModel {
    constructor(source) {
        super('garment-purchase-correction-item', '1.0.0');

        //Define Properties
        this.purchaseOrderExternalId = {};
        this.purchaseOrderExternalNo = "";
        this.purchaseOrderInternalId = {};
        this.purchaseOrderInternalNo = "";
        this.purchaseOrderInternal = {};
        this.purchaseRequestId = {};
        this.purchaseRequestNo = "";
        this.purchaseRequestRefNo = "";
        this.roNo = "";
        this.productId = {};
        this.product = {};
        this.quantity = 0;
        this.uomId = {};
        this.uom = {};
        this.pricePerUnit = 0;
        this.priceTotal = 0;
        this.currency = {};
        this.currencyRate = 1;
        this.copy(source);
    }
};