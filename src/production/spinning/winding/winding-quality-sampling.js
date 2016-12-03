'use strict';

var BaseModel = require('capital-models').BaseModel;
var Machine = require('../../../master/machine');
var Product = require('../../../master/product');
var Uster = require('../../../master/uster');
var Unit = require('../../../master/unit');

module.exports = class WindingQualitySampling extends BaseModel {
    constructor(source) {
        super('winding-quality-sampling', '1.0.0');

        // Define properties.
        this.unitId = {};
        this.spinning = new Unit();
        this.date = new Date();
        this.machineId = {}; 
        this.machine = new Machine();
        this.U = 0;
        this.thin = 0;
        this.thick = 0;
        this.neps = 0;
        this.ipi = 0;
        this.usterId = {};
        this.uster = new Uster();
        this.sys = 0;
        this.elongation = 0;
        this.grade = '';

        this.copy(source);
    }
};