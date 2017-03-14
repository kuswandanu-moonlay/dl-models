'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Machine = require('../../master/machine');
var ProductionOrder = require('../../sales/production-order');
var ProductionOrderDetail = require('../../sales/production-order-detail');
var MachineEvent = require('../../master/machine-event');

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
        this.productionOrderId = {};
        this.productionOrder = new ProductionOrder();
        this.selectedProductionOrderDetail = new ProductionOrderDetail();
        this.cartNumber = '';
        this.machineEvent = new MachineEvent();
        this.remark = '';

        this.copy(source);
        this.dateEnd = source ? source.dateEnd : null;
        this.timeInMillisEnd = source ? source.timeInMillisEnd : null;
    }
};