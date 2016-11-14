var validate = require('../src/validator').production;

it("#01. Quality Hasil Produksi Spinning should valid", function () {
    var QualityProductSpinning = require('../src/production/spinning/winding/spinning-product-quality');
    validate.spinning.winding.spinningProductQuality(new QualityProductSpinning());
})