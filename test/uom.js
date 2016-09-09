var validate = require('../src/validator').core;

it("#04. uom should valid", function () {
    var uom = require('../src/core/uom');
    
    validate.uom(new uom());
})
 