var validate = require('../src/validator').garmentMasterPlan;

it("#01. weekly-plan should valid", function () {
    var WeeklyPlan = require('../src/garment-master-plan/weekly-plan');
    validate.weeklyPlan(new WeeklyPlan());
});

it("#02. Working Hours Standard should valid", function () {
    var WorkingHoursStandard = require('../src/garment-master-plan/working-hours-standard');
    validate.workingHoursStandard(new WorkingHoursStandard());
});

it("#03. Style should valid", function () {
    var Style = require('../src/garment-master-plan/style');
    validate.style(new Style());
});

it("#04. Standard Hour should valid", function () {
    var StandardHour = require('../src/garment-master-plan/standard-hour');
    validate.standardHour(new StandardHour());
});

it("#05. Booking Order should valid", function () {
    var BookingOrder = require('../src/garment-master-plan/booking-order');
    validate.bookingOrder(new BookingOrder());
});

it("#06. Master Plan Comodity should valid", function () {
    var MasterPlanComodity = require('../src/garment-master-plan/master-plan-comodity');
    validate.masterPlanComodity(new MasterPlanComodity());
});

it("#07. Master Plan should valid", function () {
    var MasterPlan = require('../src/garment-master-plan/master-plan');
    validate.masterPlan(new MasterPlan());
});

it("#08. Master Yarn Type should valid", function () {
    var MasterYarnType = require('../src/garment-master-plan/master-yarn-type');
    validate.masterYarnType(new MasterYarnType());
});