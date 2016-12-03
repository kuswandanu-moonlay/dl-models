'use strict';

var BaseModel = require('capital-models').BaseModel;
var map = require('../map');

module.exports = class FabricDetail extends BaseModel {
    constructor(source) {
        super('fabric-detail', '1.0.0');
        this.width = 0;
        this.composition = '';
        this.construction = '';
        this.yarn = '';

        this.copy(source);
    }
};