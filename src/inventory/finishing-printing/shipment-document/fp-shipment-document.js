'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var ShipmentDocumentDetail = require("./fp-shipment-document-detail");


module.exports = class FinishingPrintingShipmentDocument extends BaseModel {
    constructor(source) {
        super('fp-shipment-document', '1.0.0');

        //Shipment details
        this.code = "";
        this.deliveryDate = new Date();
        this.deliveryNo = "";

        //User defined
        this.productIdentity = "";

        //Buyer details
        this.buyerId = {};
        this.buyerCode = "";
        this.buyerName = "";
        this.buyerAddress = "";
        this.buyerType = "";

        //Production Order list
        this.details = [];

        this.copy(source);

        this.details = (this.details || []).map((detail) => new ShipmentDocumentDetail(detail));
    }
};