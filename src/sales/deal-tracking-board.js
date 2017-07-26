'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Currency = require('../master/currency');

module.exports = class DealTrackingBoard extends BaseModel {
    constructor(source) {
        super('deal-tracking-board', '1.0.0'); 

        this.code = '';
        this.title = '';
        this.currencyId = {};
        this.currency = new Currency();

        this.copy(source);
    }
};