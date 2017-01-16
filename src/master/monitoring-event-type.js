'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Machine = require('../master/machine');
var Product = require('../master/product');
var Uster = require('../master//uster');
var Unit = require('../master//unit');

module.exports = class MonitoringEventType extends BaseModel {
    constructor(source) {
        super('monitoring-event-type', '1.0.0');

        // Define properties.
        this.code = '';
        this.description = '';

        this.copy(source);
    }
};