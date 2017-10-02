'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var TextileInventoryDocumentItem = require('./textile-inventory-document-item');

module.exports = class TextileInventoryDocument extends BaseModel {
    constructor(source) {
        super('textile-inventory-document', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();

        this.referenceNo = '';
        this.referenceType = '';
        
        this.type = ''; 

        this.storageId = {};
        this.storageCode = "";
        this.storageName = "";

        this.items = [];
        this.remark = '';

        this.copy(source);

        var _items = [];
        for (var item of this.items) {
            _items.push(new TextileInventoryDocumentItem(item));
        }
        this.items = _items;
    }
};
