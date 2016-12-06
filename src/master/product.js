'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var uom = require('./uom');


module.exports = class Product extends BaseModel {
    constructor(source, type) {
        super(type || 'product', '1.0.0');

        //Define properties
        this.code = '';
        this.name = '';
        this.price = 0;
        this.description = '';
        this.uomId = {};
        this.uom = new uom();
        this.tags = '';
        this.properties = [];

        this.copy(source);
    }
};
