'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var MachineType = require("../../master/machine-type");
var map = require('../../map');


module.exports = class MonitoringSpecificationMachine extends BaseModel {
    constructor(source,type) {
        super(type || map.production.finishingPrinting.type.MonitoringSpecificationMachine, '1.0.0');

        // Define properties.
        this.code = "";
        this.date = new Date();

        this.time = "";

        this.machineTypeId = {};
        this.machineType = new MachineType();

        this.copy(source);
    }
};
