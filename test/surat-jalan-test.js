var validate = require('../src/validator').suratJalan;

it("#07. Surat Jalan should valid", function () {
    var SuratJalan = require('../src/surat-jalan/surat-jalan');
    validate.SuratJalan(new SuratJalan());
})

