'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Supplier = require('../master/supplier');
var Currency= require('../master/currency');
var DeliveryOrder= require('../purchasing/delivery-order'); 

module.exports = class Customs extends BaseModel {
    constructor(source) {
        super('customs', '1.0.0');

        //Define Properties
        this.no = '';
        this.customsDate = new Date(); 
        this.validateDate = new Date(); 
        this.supplierId = {};
        this.supplier = new Supplier(); 
        this.amountOfPackaging=0;
        this.packaging = '';
        this.bruto = 0;
        this.netto = 0;
        this.currencyId = {};
        this.currency = new Currency();
        this.customsOrigin = '';
        this.customsType = '';
        this.deliveryOrders = [];
        this.copy(source);

        this.deliveryOrders = (this.deliveryOrders || []).map(item => new DeliveryOrder(item)); 
    }
};