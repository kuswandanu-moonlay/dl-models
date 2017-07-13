'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var ShipmentDocumentItem = require("./fp-shipment-document-item-validator")

module.exports = class ShipmentDocumentDetail extends BaseModel {
    constructor(source) {
        super('shipment-document-detail', '1.0.0');

        //Production Order detail
        this.productionOrderId = {};
        this.productionOrderNo = "";
        this.productionOrderType = "";

        this.designCode = "";
        this.designNumber = "";
        this.colorType = "";

        this.items = [];

        this.copy(source);

        this.items = (this.items || []).map((item) => new ShipmentDocumentItem(item));
    }
};
