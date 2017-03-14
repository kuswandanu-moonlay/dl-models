'use strict';

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class MaterialConstruction extends BaseModel{
    constructor(source){
        super('material-construction', '1.0.0');
        this.code = '';
        this.name = '';
        this.remark = '';
        this.copy(source);
    }
};