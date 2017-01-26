require("should");
var validateMonitoringEventType = require('../../master/monitoring-event-type-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);
     
    data.should.have.property('monitoringEventTypeId');
    data.monitoringEventTypeId.should.instanceof(Object);

    data.should.have.property('monitoringEventType');
    data.monitoringEventType.should.instanceof(Object);
    validateMonitoringEventType(data.monitoringEventType);

    data.should.have.property('remark');
    data.remark.should.instanceOf(String);
    
};