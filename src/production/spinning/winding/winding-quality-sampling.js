'use strict'

var BaseModel = require('capital-models').BaseModel;
var Machine = require('../../../master/machine');
var Product = require('../../../master/product');
var UsterClassification = require('../../../master/uster-classification');

module.exports = class WindingQualitySampling extends BaseModel {
    constructor(source) {
        super('winding-quality-sampling', '1.0.0');

        // Define properties.
        this.spinning = '';
        this.date = new Date();
        this.machineId = {}; 
        this.machine = new Machine();
        this.threadName = '';
        this.U = 0;
        this.thin = 0;
        this.thick = 0;
        this.neps = 0;
        this.ipi = 0;
        this.usterId = {};
        this.uster = new UsterClassification();
        this.sys = 0;
        this.elongation = 0;

        this.copy(source);
    }
}