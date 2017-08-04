'use strict';
var BaseModel = require('model-toolkit').BaseModel;
module.exports = class DurationEstimationArea extends BaseModel{
    constructor(source){
        super('fp-duration-estimation-area', '1.0.0');

        this.name='';
        this.duration=0;//days
        
        this.copy(source);
    }
};