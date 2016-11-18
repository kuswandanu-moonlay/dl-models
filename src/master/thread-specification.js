'use strict'

var BaseModel = require("capital-models").BaseModel;
var Product = require('./product');

module.exports = class ThreadSpecification extends BaseModel {
    constructor(source) {
        super('thread-specification', '1.0.0'); 

        this.productId = {};
        this.product = new Product();
        this.threadName='';
        this.rpm=0;
        this.spindle=0;
        this.tpi=0;

        this.copy(source);
    }
}