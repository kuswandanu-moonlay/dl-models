'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var MachineType = require("../../master/machine-type");


module.exports = class MonitoringSpecificationMachine extends BaseModel {
    constructor(source) {
        super('kanban', '1.0.0');

        // Define properties.  
        this.date = new Date();

        this.time = "";

        this.machineTypeId = {};

        this.machineType = new MachineType();

        this.copy(source);
    }
};
