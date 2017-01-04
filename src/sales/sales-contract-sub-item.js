'use strict';

var BaseModel = require("capital-models").BaseModel;
var Uom = require("../master/uom");

module.exports = class SalesContractSubItem extends BaseModel {
    constructor(source) {
        super('sales-contract-sub-item', '1.0.0'); // call MongoModel constructor

        this.code = ''; //kode
        this.colour = ''; //Warna yang diminta;
        this.design = ''; //acuan design/warna;
        this.quantity = 0; //Jumlah;
        this.uomId = {}; //_id satuan;
        this.uom = new Uom(); //satuan;
    }
};