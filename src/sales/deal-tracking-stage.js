'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class DealTrackingStage extends BaseModel {
    constructor(source) {
        super('deal-tracking-stage', '1.0.0'); 

        this.code = '';
        this.boardId = {};
        this.name = '';
        this.deals = [];

        this.copy(source);
    }
};