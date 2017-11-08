'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var ShipmentDocumentPackingReceiptItem = require("./fp-shipment-document-packing-receipt-item");

module.exports = class ShipmentDocumentItem extends BaseModel {
    constructor(source) {
        super('shipment-document-item', '1.0.0');

        //Packing Receipt
        this.packingReceiptId = {};
        this.packingReceiptCode = "";

        this.storageId = {};
        this.storageCode = "";
        this.storageName = "";

        this.referenceNo = "";
        this.referenceType = "";
        
        this.packingReceiptItems = [];

        this.copy(source);

        this.packingReceiptItems = (this.packingReceiptItems || []).map((packingReceiptItem) => new ShipmentDocumentPackingReceiptItem(packingReceiptItem));
    }
};
