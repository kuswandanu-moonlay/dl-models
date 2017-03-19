var validate = require('../src/validator').master;

it("#01. Buyer should valid", function () {
    var Buyer = require('../src/master/buyer');
    validate.buyer(new Buyer());
});

it("#02. Product should valid", function () {
    var Product = require('../src/master/product');
    validate.product(new Product());
});

it("#03. Suppliers should valid", function () {
    var Supplier = require('../src/master/supplier');
    validate.supplier(new Supplier());
});

it("#04. uom should valid", function () {
    var uom = require('../src/master/uom');
    validate.uom(new uom());
});

it("#05. Unit should valid", function () {
    var Unit = require('../src/master/unit');
    validate.unit(new Unit());
});

it("#06. Category should valid", function () {
    var Category = require('../src/master/category');
    validate.category(new Category());
});

it("#07. Currency should valid", function () {
    var Currency = require('../src/master/currency');
    validate.currency(new Currency());
});

it("#08. Vat should valid", function () {
    var Vat = require('../src/master/vat');
    validate.vat(new Vat());
});

it("#09. Machine should valid", function () {
    var Machine = require('../src/master/machine');
    validate.machine(new Machine());
});

it("#10. Uster Classification should valid", function () {
    var Uster = require('../src/master/uster');
    validate.uster(new Uster());
});

it("#11. Lamp Standard should valid", function () {
    var LampStandard = require('../src/master/lamp-standard');
    validate.lampStandard(new LampStandard());
});

it("#12. Account Bank should valid", function () {
    var AccountBank = require('../src/master/account-bank');
    validate.accountBank(new AccountBank());
});

it("#13. Step should valid", function () {
    var Step = require('../src/master/step');
    validate.step(new Step());
});

it("#14. Instruction should valid", function () {
    var Instruction = require('../src/master/instruction');
    validate.instruction(new Instruction());
});

it("#15. Order Type should valid", function () {
    var OrderType = require('../src/master/order-type');
    validate.orderType(new OrderType());
});

it("#16. Process Type should valid", function () {
    var ProcessType = require('../src/master/process-type');
    validate.processType(new ProcessType());
});

it("#17. Color Type should valid", function () {
    var ColorType = require('../src/master/color-type');
    validate.colorType(new ColorType());  
});

it("#18. Instruction should valid", function () {
    var Instruction = require('../src/master/instruction');
    validate.instruction(new Instruction());
});

it("#14. Order Type should valid", function () {
    var OrderType = require('../src/master/order-type');
    validate.orderType(new OrderType());
});

it("#15. Process Type should valid", function () {
    var ProcessType = require('../src/master/process-type');
    validate.processType(new ProcessType());
});

it("#16. Color Type should valid", function () {
    var ColorType = require('../src/master/color-type');
    validate.colorType(new ColorType());
});

it("#17. Step should valid", function () {
    var Step = require('../src/master/step');
    validate.step(new Step());
});

it("#18. Machine Type should valid", function () {
    var MachineType = require('../src/master/machine-type');
    validate.machineType(new MachineType());
});

it("#19. Machine Type Indicator should valid", function () {
    var MachineTypeIndicator = require('../src/master/machine-type-indicator');
    validate.machineTypeIndicator(new MachineTypeIndicator());
});

it("#20. Machine Spesification Standard should valid", function () {
    var MachineSpesificationStandard = require('../src/master/machine-spesification-standard');
    validate.machineSpesificationStandard(new MachineSpesificationStandard());
});

it("#21. Machine Event should valid", function () {
    var MachineEvent = require('../src/master/machine-event');
    validate.machineEvent(new MachineEvent());
});

it("#22. Material Contruction should valid", function () {
    var MaterialConstruction = require('../src/master/material-construction');
    validate.materialConstruction(new MaterialConstruction());
});

it("#23. Yarn Material should valid", function () {
    var YarnMaterial = require('../src/master/yarn-material');
    validate.yarnMaterial(new YarnMaterial());
});

it("#24. Finish Type should valid", function () {
    var FinishType = require('../src/master/finish-type');
    validate.finishType(new FinishType());
});

it("#25. Standard Test should valid", function () {
    var StandardTest = require('../src/master/standard-test');
    validate.standardTest(new StandardTest());
});

it("#26. Comodity should valid", function () {
    var Comodity = require('../src/master/comodity');
    validate.comodity(new Comodity());
});

it("#27. Quality should valid", function () {
    var Quality = require('../src/master/quality');
    validate.quality(new Quality());
});

it("#28. Array Step should valid", function () {
    var ArrayStep = require('../src/master/array-step');
    validate.arrayStep(new ArrayStep());
});

it("#29. Term of Payment should valid", function () {
    var TermOfPayment = require('../src/master/term-of-payment');
    validate.termOfPayment(new TermOfPayment());
});