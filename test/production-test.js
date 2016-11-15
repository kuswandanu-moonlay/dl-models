var validate = require('../src/validator').production;

it("#01. Quality Hasil Produksi Spinning should valid", function () {
    var WindingQualitySampling = require('../src/production/spinning/winding/winding-quality-sampling');
    validate.spinning.winding.windingQualitySampling(new WindingQualitySampling());
})