'use strict'

var BaseModel = require('capital-models').BaseModel;
var Unit = require('../../../master/unit');

module.exports = class DailySpinningProductionReport extends BaseModel {
    constructor(source) {
        super('daily-spinning-production-output', '1.0.0');

        this.unitId = {};
        this.unit = new Unit();

        this.date = new Date();

        this.entries = [];

        this.threadCountInBale = 0;
        this.mtdThreadCountInBale = 0;
        this.averageCount = 0;

        this.factorStandard30s = 0;
        this.productionStandard30s = 0;

        this.usedMachineCount = 0;
        this.mtdUsedMachineCount = 0;

        this.actualMachineCount = 0;
        this.mtdActualMachineCount = 0;
        
        this.spindleCount = 0;

        this.utilityPercentage = 0;
        this.mtdUtilityPercentage = 0;
    }
}