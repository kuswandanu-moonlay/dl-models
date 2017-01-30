'use strict';

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class StandardTest extends BaseModel{
    constructor(source){
        super('standard-test', '1.0.0');
        this.code = '';
        this.name = '';
        this.remark = '';
        this.copy(source);
    }
};