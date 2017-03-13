'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Unit = require('./unit');
var MachineType = require('./machine-type');
var ArrayStep = require('./array-step');
var MachineEvent = require('./machine-event');

module.exports = class Machine extends BaseModel {
    constructor(source) {
        super('machine', '1.0.0');

        // Define properties.  
        this.code = '';
        this.name = '';
        this.unitId = {};
        this.unit = new Unit();
        this.steps = [];
        this.process = '';
        this.manufacture = '';
        this.year = 1900;
        this.condition = '';
        this.machineTypeId = {};
        this.machineType = new MachineType();
        this.machineEvents = [];
        this.monthlyCapacity = 0;

        this.copy(source);
        this.unit = new Unit(this.unit);
        this.machineEvents = (this.machineEvents || []).map(machineEvent => new MachineEvent(machineEvent));
        this.steps = (this.steps || []).map(step => new ArrayStep(step));
    }
};