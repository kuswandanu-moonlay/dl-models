'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class DealTrackingReason extends BaseModel {
    constructor(source) {
        super('deal-tracking-reasons', '1.0.0');

        // Define properties.  
        this.code = '';
        this.reason = '';
        this.copy(source);
    }
};
