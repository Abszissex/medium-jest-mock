// Import method to call the external service
const {callExternalService} = require('./externalService');
// Method to test
const main = () => {
    // We only call the external service and return its response
    return callExternalService();
}
module.exports = {main};

