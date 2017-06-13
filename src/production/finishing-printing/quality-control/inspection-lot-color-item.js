'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class InspectionLotColorItem extends BaseModel {
    constructor(source) {
        super('inspection-lot-color-item', '1.0.0');
        this.pcsNo = '';
        this.grade = '';
        this.lot = '';
        this.status = '';

        this.copy(source);
    }
};