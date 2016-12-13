'use strict';

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class instruction extends BaseModel{
    constructor(source){
        super('instruction', '1.0.0');
        this.material = '';
        this.construction = '';
        this.processType = '';
        this.steps=[];
        
        this.copy(source);
    }
};
