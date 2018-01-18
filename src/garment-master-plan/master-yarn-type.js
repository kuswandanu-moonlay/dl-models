'use strict';
var BaseModel = require('model-toolkit').BaseModel;

module.exports = class MasterYarnType extends BaseModel {
    constructor(source, type) {
        super(type || 'master-yarn-type', '1.0.0');
        this.code = '';
        this.name = '';
        this.createdDate = new Date();

        this.spinningYarnId = {};
        this.spinningYarnCode = '';
        this.spinningYarnName = '';

        this.remark = '';

        this.copy(source);
    }
};