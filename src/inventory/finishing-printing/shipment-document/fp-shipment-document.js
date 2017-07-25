'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var ShipmentDocumentDetail = require("./fp-shipment-document-detail");


module.exports = class FinishingPrintingShipmentDocument extends BaseModel {
    constructor(source) {
        super('fp-shipment-document', '1.0.0');

        //Shipment details
        this.code = "";
        this.deliveryDate = new Date();
        this.deliveryCode = "";
        this.isVoid = false;
        this.deliveryReference = "";

        //User defined
        this.productIdentity = ""; //Kode Produk dari User

        //Buyer details
        this.buyerId = {};
        this.buyerCode = "";
        this.buyerName = "";
        this.buyerAddress = "";
        this.buyerType = "";

        //Production Order list
        this.details = [];

        this.storageId = {};
        this.storageName = "";
        this.storageReferenceType = "";
        this.storageType = "";

        this.copy(source);

        this.details = (this.details || []).map((detail) => new ShipmentDocumentDetail(detail));
    }
};