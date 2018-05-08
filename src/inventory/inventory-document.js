'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var InventoryDocumentItem = require('./inventory-document-item');

module.exports = class InventoryDocument extends BaseModel {
    constructor(source) {
        super('inventory-document', '1.0.0');

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
            _items.push(new InventoryDocumentItem(InventoryDocumentItem.data));
        }
        this.items = _items;
    }
};
