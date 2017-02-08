'use strict';
var BaseModel = require('model-toolkit').BaseModel; 
var LampStandard = require('../master/lamp-standard');

module.exports = class ProductionOrderLampStandard extends BaseModel {
    constructor(source) {
        super('production-order-lamp-standard', '1.0.0');
        //Define Properties
        this.lampStandardId= {};
        this.lampStandard= new LampStandard();  
        this.copy(source); 
    }
};