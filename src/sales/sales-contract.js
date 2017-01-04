'use strict';

var BaseModel = require("capital-models").BaseModel;
var Buyer = require("../master/buyer");
var Uom = require("../master/uom");
var Currency = require("../master/currency");
var AccountBank = require("../master/account-bank");
var LampStandard = require("../master/lamp-standard");
var SalesContractItem = require("./sales-contract-item");

module.exports = class SalesContract extends BaseModel {
    constructor(source) {
        super('sales-contract', '1.0.0'); // call MongoModel constructor

        this.no = ''; //nomor sales contrak;
        this.buyerId = {}; //_id Buyer;
        this.buyer = new Buyer(); //Buyer;
        this.buyerType = ''; //Jenis Buyer (Local, Export);
        this.orderNo = ''; //nomor order;
        this.processType=''; //Jenis proses (Finishing(F), Printing(P), Yard Dyed(YD));
        this.orderType = ''; //Jenis Order;
        this.construction=''; //Konstruksi;
        this.material=''; //Material;
        this.uomId={}; //_id Satuan Jumlah;
        this.uom = new Uom(); //Satuan Jumlah;
        this.toleranceOrder = 0; //Jumlah Toleransi Order;
        this.quality = ''; //Kualitas;
        this.currencyId = {}; //_id Mata uang;
        this.currency = new Currency(); //Mata Uang;
        this.price = 0; //Harga;
        this.ppn = ''; //PPn;
        this.paymentMethod = ''; //Metode bayar;
        this.termOfPayment = ''; //Syarat pembayaran;
        this.accountBankId = {}; //_id Tujuan Pembayaran;
        this.accountBank = new AccountBank();// Tujuan Pembayaran / Rekining yg digunakan untuk pembayaran;
        this.freight = ''; //Ongkos Angkut;
        this.sendTo = ''; //Tujuan Pengiriman;
        this.packing = ''; //packing;
        this.agentId = {}; //_id agent dari _id Buyer;
        this.agent = (new Buyer() || {}); //agent diambil dari master Buyer;
        this.commission = 0; //Komisi;
        this.deliverySchedule = ''; //Jadwal Pengiriman;
        this.condition = ''; //Kondisi;
        this.originGreigeFabric = '' //Asal kain greige;
        this.width = ''; //Lebar finish;
        this.standardHandling = ''; //Standard Handling;
        this.run = ''; //Run (Tanpa RUN, 1 RUN, 2 RUN);
        this.standardShringkage = ''; //standar Srhingkage;
        this.longRolls = ''; //Panjang roll;
        this.lampStandardId = {}; //_id standard Lampu;
        this.lampStandard = new LampStandard(); //standar Lampu;
        this.sample = ''; //Sample;
        this.deliveryDate = new Date(); //Tanggal Delivery;
        this.description = ''; //Keterangan;
        this.items = [];
        this.copy(source);

        this.items = (this.items || []).map(item => new SalesContractItem(item)); 
    }
};