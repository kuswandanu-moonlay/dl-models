'use strict';
var BaseModel = require('model-toolkit').BaseModel;
// var Style = require('./style');


module.exports = class StandardHour extends BaseModel {
    constructor(source, type) {
        super(type || 'standard-hour', '1.0.0');
        this.code = '';
        this.date = new Date();
        // this.styleId = {};
        // this.style = new Style();
        this.garmentBuyerId={};
        this.garmentBuyerName='';
        this.garmentBuyerCode='';
        this.masterplanComodityId = {};
        this.masterplanComodityName='';
        this.masterplanComodityCode='';
        this.shCutting = 0;
        this.shSewing = 0;
        this.shFinishing = 0;
        this.copy(source);
    }
};