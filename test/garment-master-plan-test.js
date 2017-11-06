var validate = require('../src/validator').garmentMasterPlan;

it("#01. weekly-plan should valid", function () {
    var WeeklyPlan = require('../src/garment-master-plan/weekly-plan');
    validate.weeklyPlan(new WeeklyPlan());
});