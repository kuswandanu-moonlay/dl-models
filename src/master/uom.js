'use strict'

var BaseModel = require('capital-models').BaseModel; 

module.exports = class uom extends BaseModel{
    constructor(source){
        super('uom', '1.0.0');
        this.unit = '';
        this.copy(source);
    }
}
