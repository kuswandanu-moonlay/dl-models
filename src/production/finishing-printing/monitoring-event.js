'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Machine = require('../../master/machine');
var ProductionOrder = require('./production-order');
var MonitoringEventItem = require('./monitoring-event-item');

module.exports = class MonitoringEvent extends BaseModel {
    constructor(source) {
        super('monitoring-event', '1.0.0');

        // Define properties.
        this.date = new Date();
        this.timeInMillis = 0;
        this.machineId = {}; 
        this.machine = new Machine();
        this.productionOrderNumber = '';
        this.productionOrder = new ProductionOrder();
        this.items = [];

        this.copy(source);

        this.items = (this.items || []).map(item => new MonitoringEventItem(item));
    }
};