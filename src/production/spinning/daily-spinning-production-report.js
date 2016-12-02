'use strict'

var BaseModel = require('capital-models').BaseModel;
var Unit = require('../../master/unit');

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

        this.copy(source);
    }

    calculate(_date) {

        for(var entry of this.entries) {

            var hour = ((_date-this.date) / 1000 / 3600) > 24 ? 24 : ((_date-this.date) / 1000 / 3600); 

            var output = entry.outputs.map(item => {
                var copy = Object.assign({}, item);
                copy.goodConeInBale = copy.goodCone / (181.44 / copy.threadWeight);
                copy.avg = copy.lotMachine.ne * copy.goodConeInBale;
                copy.usedMachine = copy.goodConeInBale / ((copy.threadSpecification.rpm * hour * 60 * copy.threadSpecification.spindle) / (840 * 36 * copy.threadSpecification.tpi * copy.lotMachine.ne * 400));
                return copy;
            }).reduce((prev, curr) => {
                return {goodConeInBale : prev.goodConeInBale + curr.goodConeInBale, avg: prev.avg + curr.avg, usedMachine: prev.usedMachine + curr.usedMachine };
            }, {goodConeInBale:0, avg:0, usedMachine:0});

            entry.threadCountInBale = output.goodConeInBale;
            entry.avgCount = output.avg;
            entry.usedMachineCount = output.usedMachine;
        }    

        this.threadCountInBale = this.entries.map(entry => entry.threadCountInBale).reduce((prev, curr) => {
            return prev + curr;
        }, 0);   

        this.averageCount = this.entries.map(entry => entry.avgCount).reduce((prev, curr) => {
            return prev + curr;
        }, 0);   

        this.averageCount = this.averageCount / this.threadCountInBale;

        this.usedMachineCount = this.entries.map(entry => entry.usedMachineCount).reduce((prev, curr) => {
            return prev + curr;
        }, 0);   
    }
}