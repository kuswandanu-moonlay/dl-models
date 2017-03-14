'use strict';

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class FinishType extends BaseModel{
    constructor(source){
        super('finishi-test', '1.0.0');
        this.code = '';
        this.name = '';
        this.remark = '';
        this.copy(source);
    }
};