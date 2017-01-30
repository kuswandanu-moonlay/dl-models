'use strict';

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class YarnMaterial extends BaseModel{
    constructor(source){
        super('yarn-material', '1.0.0');
        this.code = '';
        this.name = '';
        this.remark = '';
        this.copy(source);
    }
};