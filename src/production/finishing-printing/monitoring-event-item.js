'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var MonitoringEventType = require('../../master/monitoring-event-type'); 

module.exports = class PurchaseRequestItem extends BaseModel {
    constructor(source, type) {
        super(type || 'monitoring-event-item', '1.0.0');

        this.monitoringEventTypeId = {}; 
        this.monitoringEventType = new MonitoringEventType();
        this.remark = '';

        this.copy(source);
    }
};