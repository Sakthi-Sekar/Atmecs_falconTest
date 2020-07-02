"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../Feature_files/scenario_dashboard.feature'],
    cucumberOpts: {
        // tags:['@sanity, @regression'],
        // require step definitions
        require: [
            './StepDefinitions_files/steps_dashboard.js' // accepts a glob
        ],
        format: 'json:report/cucumber_report.json'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFVyxRQUFBLE1BQU0sR0FBVTtJQUN2Qiw0Q0FBNEM7SUFDNUMsbURBQW1EO0lBQ25ELGFBQWEsRUFBQyxJQUFJO0lBQ2xCLFNBQVMsRUFBQyxRQUFRO0lBQ2xCLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9ELHVEQUF1RDtJQUN2RCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUVELHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLEtBQUssRUFBRSxDQUFDLDZDQUE2QyxDQUFDO0lBQ3RELFlBQVksRUFBRTtRQUNaLGlDQUFpQztRQUMvQiwyQkFBMkI7UUFDM0IsT0FBTyxFQUFFO1lBQ1AsNENBQTRDLENBQUMsaUJBQWlCO1NBQy9EO1FBQ0QsTUFBTSxFQUFFLGtDQUFrQztLQUMzQztDQUVKLENBQUMifQ==