'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class MonitoringEventType extends BaseModel {
    constructor(source) {
        super('monitoring-event-type', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';

        this.copy(source);
    }
};