require("should");
var validateCurrency= require('../master/currency-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('color');
    data.color.should.instanceof(String);

    data.should.have.property('price');
    data.price.should.instanceof(Number);

    data.should.have.property('useIncomeTax');
    data.useIncomeTax.should.instanceof(Boolean);
    
    data.should.have.property('currencyId');
    data.currencyId.should.instanceof(Object);

    data.should.have.property('currency');
    data.currency.should.instanceof(Object);
    validateCurrency(data.currency);

};