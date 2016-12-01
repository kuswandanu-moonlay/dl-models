'use strict'

var BaseModel = require('capital-models').BaseModel;
var Classification = require('./uster-classification');
var Product = require('./product');

module.exports = class Uster extends BaseModel {
    constructor(source) {
        super('uster', '1.0.0');

        // Define properties
        this.code = '';
        this.productId = {};
        this.product = new Product();
        this.classifications = [];
        this.copy(source);

        this.classifications = (this.classifications || []).map(classification => new Classification(classification)); 
    }
}