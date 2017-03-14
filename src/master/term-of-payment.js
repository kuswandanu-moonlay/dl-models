'use strict';
var BaseModel = require('model-toolkit').BaseModel;

module.exports = class TermOfPayment extends BaseModel {
    constructor(source) {
        super('term-of-payment', '1.0.0');
        
        // Define properties.
        this.code='';
        this.termOfPayment='';
        this.isExport=false;
        
        this.copy(source);
    }
};