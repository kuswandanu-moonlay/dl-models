'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Kanban = require("./kanban");
var Step = require("../../master/step");
var Machine = require("../../master/machine");

module.exports = class DailyOperation extends BaseModel {
    constructor(source) {
        super('daily-operation', '1.0.0');

        this.code = '';
        this.kanbanId = {};
        this.kanban = {};
        this.stepId = {};
        this.step = {};
        this.machineId = {};
        this.machine = {};
        this.shift = '';
        this.type = '';
        this.dateInput = null;
        this.timeInput = null;
        this.input = null;
        this.dateOutput = null;
        this.timeOutput = null;
        this.goodOutput = null;
        this.badOutput = null;
        // this.action = null;
        this.badOutputReasons = null;

        this.copy(source);
    }
};