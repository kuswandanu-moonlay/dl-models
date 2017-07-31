require("should");
var validateCurrency = require('../master/currency-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('title');
    data.title.should.instanceOf(String);

    data.should.have.property('currencyId');
    data.currencyId.should.instanceof(Object);

    data.should.have.property('currency');
    data.currency.should.instanceOf(Object);

    validateCurrency(data.currency);
};