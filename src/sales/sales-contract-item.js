'use strict';

var BaseModel = require("capital-models").BaseModel;
var Uom = require("../master/uom");
var SalesContractSubItem = require("./sales-contract-sub-item");

module.exports = class SalesContractItem extends BaseModel {
    constructor(source) {
        super('sales-contract-item', '1.0.0'); // call MongoModel constructor

        this.productionNo = ''; //Nomor Surat Produsi;
        this.design = '' //Design;
        this.sphere = 0; //jumlah sphere;
        this.uomId = {}; //_id satuan jumlah;
        this.uom = new uom(); //Satuan;
        this.subItems = []; //sub detail
        this.copy(source);

        this.subItems = (this.subItems || []).map(subItem => new SalesContractSubItem(subItem)); 
    }
};