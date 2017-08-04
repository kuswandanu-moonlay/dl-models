'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class DealTrackingActivity extends BaseModel {
    constructor(source) {
        super('deal-tracking-activity', '1.0.0'); 

        this.code = '';
        this.dealId = {};
        this.type = '';
        this.field = {};

        this.copy(source);
    }
};