'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Machine = require('../../master/machine');
var ProductionOrder = require('../../sales/production-order');
var MonitoringEventType = require('../../master/monitoring-event-type');

module.exports = class MonitoringEvent extends BaseModel {
    constructor(source) {
        super('monitoring-event', '1.0.0');

        // Define properties.
        this.code = '';
        this.dateStart = new Date();
        this.timeInMillisStart = 0;
        this.dateEnd = new Date();
        this.timeInMillisEnd = 0;
        this.machineId = {}; 
        this.machine = new Machine();
        this.productionOrder = new ProductionOrder();
        this.monitoringEventTypeId = {}; 
        this.monitoringEventType = new MonitoringEventType();
        this.remark = '';

        this.copy(source);
    }
};