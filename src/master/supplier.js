'use strict';

var BaseModel = require("model-toolkit").BaseModel;

module.exports = class Supplier extends BaseModel {
    constructor(source) {
        super('supplier', '1.0.0'); // call MongoModel constructor

        this.code = '';
        this.name = '';
        this.address = '';
        this.contact = '';
        this.PIC='';
        this.import = true;
        this.NPWP='';
        this.serialNumber='';

        this.copy(source);
    }
};
