var validate = require('../src/validator').core;

it("#08. Unit should valid", function(){
    var Unit = require('../src/core/unit');
    
    validate.unit(new Unit());
})