require("should");
var validateSuratJalanProductItem = require('./surat-jalan-product-item-validator');

module.exports = function (data) {
    data.should.have.property('planPO');
    data.planPO.should.instanceOf(String);
    
    data.should.have.property('poPembelian');
    data.poPembelian.should.instanceOf(String);
    
    data.should.have.property('article');
    data.article.should.instanceOf(String);
    
    data.should.have.property('totalPO');
    data.totalPO.should.instanceOf(Number);
    
    data.should.have.property('totalSJ');
    data.totalSJ.should.instanceOf(Number);
    
    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validateSuratJalanProductItem(item);
    }
}