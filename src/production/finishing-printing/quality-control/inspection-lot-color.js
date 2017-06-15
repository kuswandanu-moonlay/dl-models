'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var InspectionLotColorItem = require("./inspection-lot-color-item");

module.exports = class InspectionLotColor extends BaseModel {
    constructor(source) {
        super('inspection-lot-color', '1.0.0');

        this.code = '';
        this.fabricQualityControlCode = "";
        this.fabricQualityControlId = {};
        this.productionOrderNo = "";
        this.productionOrderId = {};
        this.productionOrderType = "";
        this.cartNo = "";
        this.construction = "";
        this.color = "";
        this.orderQuantity = 0;
        this.uom = "";
        this.date = new Date();
        this.items = [];
        this.kanbanCode = "";
        this.kanbanId = {};

        this.copy(source);
        this.items = (this.items || []).map(item => new InspectionLotColorItem(item));
    }
};