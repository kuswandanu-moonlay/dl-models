'use strict'
var BaseModel = require('capital-models').BaseModel;

module.exports = class DODetail extends BaseModel {
    constructor(source){
        super('standard-quality-test-percentage', '1.0.0');
        this.SJNo = '';
        this.SJDate = new Date();
        this.realizationQuantity = 0;
    }
}