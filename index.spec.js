const {main} = require('./index');
// Import the external call we want to
// return a custom value for
const {callExternalService} = require('./externalService');

// Mock the whole external services module
jest.mock('./externalService');

describe('index', () => {

    beforeEach(() => {
        // Resets the overwritten return values via
        // "callExternalService.mockReturnValue" in the test cases
        jest.resetAllMocks();
    });

    it('Should test success case', () => {
        // We test the case where the external service
        // returns "true"
        callExternalService.mockReturnValue(true)

        // Call the main() method and expect that it
        // return "true" after processing the mocked response
        // of our external service call
        const result = main();
        expect(result).toBe(true);
    });

    it('Should test failure case', () => {
        // We test the case where the external service
        // returns "false"
        callExternalService.mockReturnValue(false)
        // Call the main() method and expect that it
        // return "false" after processing the mocked response
        // of our external service call
        const result = main();
        expect(result).toBe(false);
    });

});