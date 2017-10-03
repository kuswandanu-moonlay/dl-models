'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var GarmentInventoryDocumentItem = require('./garment-inventory-document-item');

module.exports = class GarmentInventoryDocument extends BaseModel {
    constructor(source) {
        super('garment-inventory-document', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();

        this.referenceNo = '';
        this.referenceType = '';
        
        this.type = ''; // IN, OUT, RET-IN, RET-OUT

        this.storageId = {};
        this.storageCode = "";
        this.storageName = "";

        this.items = [];
        this.remark = '';

        this.copy(source);

        var _items = [];
        for (var item of this.items) {
            _items.push(new GarmentInventoryDocumentItem(item));
        }
        this.items = _items;
    }
};
