require("should");
var validateColorType = require('../master/color-type-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('color');
    data.color.should.instanceof(String);

    data.should.have.property('price');
    data.price.should.instanceof(Number);

    data.should.have.property('useIncomeTax');
    data.useIncomeTax.should.instanceof(Boolean);

};