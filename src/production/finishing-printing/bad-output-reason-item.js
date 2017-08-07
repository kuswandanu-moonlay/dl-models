'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var BadOutputReason = require("../../master/bad-output-reason");

module.exports = class BadOutputReasonItem extends BaseModel {
    constructor(source) {
        super('bad-output-reason-item', '1.0.0');

        // Define properties.

        this.presentation = 0;
        this.description = '';
        this.badOutputReasonId = {};
        this.badOutputReason = new BadOutputReason();
        this.copy(source);
    }
};