'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var ProcessType = require('./process-type');
var Area = require('./fp-duration-estimation-area');

module.exports = class DurationEstimation extends BaseModel{
    constructor(source){
        super('fp-duration-estimation', '1.0.0');

        this.processTypeId={};
        this.processType=new ProcessType();
        this.areas = (this.areas || []).map(area => new Area(area));
        
        this.copy(source);
    }
};