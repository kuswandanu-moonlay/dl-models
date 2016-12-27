'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Unit = require('../../master/unit');

module.exports = class Kanban extends BaseModel {
    constructor(source) {
        super('kanban', '1.0.0');
        this.partitions = [];

        this.color = "";
        this.copy(source);
    }
};
