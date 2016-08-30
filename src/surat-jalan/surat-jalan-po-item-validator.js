require("should");
var validateSuratJalanProductItem = require('./surat-jalan-product-item-validator');

module.exports = function (data) {
    data.should.have.property('PRNo');
    data.PRNo.should.instanceOf(String);
    
    data.should.have.property('PONo');
    data.PONo.should.instanceOf(String);
    
    data.should.have.property('RONo');
    data.RONo.should.instanceOf(String);
    
    data.should.have.property('article');
    data.article.should.instanceOf(String);
    
    data.should.have.property('konveksi');
    data.konveksi.should.instanceOf(String);
    
    data.should.have.property('currency');
    data.currency.should.instanceOf(String);
    
    data.should.have.property('dueDate');
    data.dueDate.should.instanceOf(Date);
    
    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validateSuratJalanProductItem(item);
    }
}