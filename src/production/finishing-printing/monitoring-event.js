'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Machine = require('../../master/machine');
var MonitoringEventType = require('../../master/monitoring-event-type'); 
var SalesContract = require('./sales-contract');

module.exports = class MonitoringEvent extends BaseModel {
    constructor(source) {
        super('monitoring-event', '1.0.0');

        // Define properties.
        this.date = new Date();
        this.time = 0;
        this.machineId = {}; 
        this.machine = new Machine();
        this.productionOrderNumber = '';
        this.monitoringEventTypeId = {}; 
        this.monitoringEventType = new MonitoringEventType();
        // this.salesContractId = {};
        // this.salesContract = new SalesContract(); 
        // this.monitoringEventTypeId = {};
        // this.monitoringEventType = new MonitoringEventType();
        this.description = '';

        this.copy(source);
    }
};