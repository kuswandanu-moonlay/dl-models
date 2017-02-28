'use strict';

var BaseModel = require('model-toolkit').BaseModel;


module.exports = class MonitoringSpecificationMachineItem extends BaseModel {
    constructor(source,type) {
        super(type || "monitoring-specification-machine-item", '1.0.0');

        // Define properties.

        this.indicator = '';
        this.dataType = '';
        this.defaultValue='';
        this.value = '';
        this.copy(source);
        
    }
};
