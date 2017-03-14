'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Kanban = require("./kanban");
var Step = require("../../master/step");
var Machine = require("../../master/machine");

module.exports = class DailyOperation extends BaseModel {
    constructor(source) {
        super('daily-operation', '1.0.0');

        this.kanbanId = {};
        this.kanban = new Kanban();
        this.stepId = {};
        this.step = new Step();
        this.machineId = {};
        this.machine = new Machine();
        this.shift = '';
        this.dateInput = new Date();
        this.timeInput = 0;
        this.input = 0;
        this.dateOutput = null;
        this.timeOutput = null;
        this.goodOutput = null;
        this.badOutput = null;
        this.badOutputDescription = null;

        this.copy(source);
    }
};