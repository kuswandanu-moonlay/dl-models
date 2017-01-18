'use strict';

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class ColorType extends BaseModel{
    constructor(source){
        super('color-type', '1.0.0');
        
        this.code = '';
        this.name = '';
        this.remark = '';
        this.copy(source);
    }
};