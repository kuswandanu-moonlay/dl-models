'use strict';

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class SpinningYarn extends BaseModel{
    constructor(source){
        super('spinning-yarn', '1.0.0');
        
        this.code = '';
        this.name = '';
        this.ne= 0;
        this.copy(source);
    }
};