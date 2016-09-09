'use strict'

var BaseModel = require('capital-models').BaseModel;
var Buyer = require('../core/buyer');
var poItem=require('../po/purchase-order-item');


module.exports = class CostCalculation extends BaseModel {
    constructor(source) {
        super('cost-calculation', '1.0.0');

        //properties

        //header
        this.konfeksi='';
        this.RO='';
        this.CostCalcutationDate=new Date();
        this.section='';
        this.repeat=true;
        this.article='';
        this.description='';
        this.quantity=0;
        this.comodity='';
        this.fabricAllowance=0;
        this.accessoriesAllowance=0;
        this.sizeRange='';
        this.deliveryDate=new Date();
        this.confirmDate=new Date();
        this.SHCutting=0;
        this.SHSewing=0;
        this.SHFinnishing=0;
        this.SHTotal=0;
        this.efficiencyAllowance=0;
        this.pricePerSecond=0;
        this.confirmPrice=0;
        this.rateUSD=0;

        //footer
        this.Freight=0;
        this.insurance=0;
        this.productionCost=0;
        this.transportationCost=0;
        this.OTL1=0;
        this.OTL2=0;
        this.risk=0;
        this.commision=0;
        this.netPerFOB=0;
        this.netPerFOBAllowance=0;

        //body
        this.poAccessories=[];
        this.poFabric=[];

        this.item = _items;

        this.buyerId = {};
        this.buyer = new Buyer();
        
        //remarks and details
        this.remarks=[];
        this.details=[];

        this.copy(source);
    }

}