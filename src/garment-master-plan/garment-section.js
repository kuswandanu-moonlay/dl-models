'use strict';
var BaseModel = require('model-toolkit').BaseModel;


module.exports = class GarmentSection extends BaseModel {
    constructor(source, type) {
        super(type || 'garment-section', '1.0.0');
        this.code = '';
        this.name = '';
        this.remark = '';
        
        this.copy(source);
    }
};