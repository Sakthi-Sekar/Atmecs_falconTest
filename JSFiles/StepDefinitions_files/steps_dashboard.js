"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const chai_1 = require("chai");
cucumber_1.Given(/^User launch the chrome browser$/, { timeout: 40000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Step 1: Browser opening");
        protractor_1.browser.waitForAngularEnabled(true);
    });
});
cucumber_1.When(/^User opens URL "([^"]*)"$/, { timeout: 70000 }, function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(url);
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.getTitle().then(function (title) {
            console.log(title),
                chai_1.expect(title).to.be.equals('ATMECS - Falcon Test Repotrs');
        });
        // const title=await browser.getTitle();
        // console.log("website title :" + title)
        // expect(title).to.be.equal("ATMECS - Falcon Test Repotrs");
    });
});
cucumber_1.When(/^Click REST API TEST RESULT Link in dashboard$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath("(//h4[@class='media-box-heading ng-binding'])[1]")).click();
    });
});
cucumber_1.When(/^Select status as pass$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath("//select[@name='status']")).$("[value='PASS']").click();
    });
});
cucumber_1.Then(/^Able to get pass test cases$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        var status = yield protractor_1.element(protractor_1.by.css("#view-report-filter > div.slimScrollDiv > scrollable > table")).getText();
        console.log(status);
    });
});
cucumber_1.When(/^User click on toggle button$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.css("label.pull-right > span")).click();
        protractor_1.browser.sleep(10000);
    });
});
cucumber_1.Then(/^User can able to view total test run count$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        var test = yield protractor_1.element(protractor_1.by.xpath("//h4[.='10 TEST(S)']")).getText();
        console.log("total test :" + test);
    });
});
cucumber_1.Then(/^User can able to view pass test percentage$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        var pass = yield protractor_1.element(protractor_1.by.xpath("//div[6]//div[@class='panel-body text-center']")).getText();
        console.log("total test case Pass :" + pass);
    });
});
cucumber_1.Then(/^User can able to view fail test count$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        var fail = yield protractor_1.element(protractor_1.by.xpath("//div[7]//div[@class='panel-body text-center']")).getText();
        console.log("total test case Fail :" + fail);
    });
});
cucumber_1.Then(/^User can able to view skip test count$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        var skip = yield protractor_1.element(protractor_1.by.xpath("//div[8]//div[@class='panel-body text-center']")).getText();
        console.log("Total testcase skip: " + skip);
    });
});
cucumber_1.When(/^Click on recent runs$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        //click on Recent runs
        yield protractor_1.element(protractor_1.by.xpath("(//span[@class='ng-binding'])[2]")).click();
    });
});
cucumber_1.Then(/^click on Rest API Test Result$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        //click on Rest API Test Result
        yield protractor_1.element(protractor_1.by.xpath("(//td[@class='ng-binding'])[1]")).click();
    });
});
cucumber_1.Then(/^select Pass value from the drop down$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        //select Pass value from the drop down
        yield protractor_1.element(protractor_1.by.xpath("//select[@name='status']")).click();
    });
});
cucumber_1.Then(/^Select pass from the drop down$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        //Select pass from the drop down
        yield protractor_1.element(protractor_1.by.xpath("//select[@name='status']")).$("[value='PASS']").click();
    });
});
cucumber_1.Then(/^get the filtered values$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        var statusPassValues = yield protractor_1.element(protractor_1.by.xpath("//*[@id='view-report-filter']/div[2]/scrollable")).getText();
        console.log(statusPassValues);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHNfZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcERlZmluaXRpb25zX2ZpbGVzL3N0ZXBzX2Rhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHVDQUE0QztBQUM1QywyQ0FBaUQ7QUFDakQsK0JBQTZCO0FBRzdCLGdCQUFLLENBQUMsa0NBQWtDLEVBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7O1FBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtRQUN0QyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXhDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNEJBQTRCLEVBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsVUFBZ0IsR0FBRzs7UUFDckUsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztZQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUN2RCxhQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQTtRQUFBLENBQUMsQ0FBQyxDQUFDO1FBRWpFLHdDQUF3QztRQUV4Qyx5Q0FBeUM7UUFDekMsNkRBQTZEO0lBQ2pFLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsZ0RBQWdELEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7O1FBRXZFLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtEQUFrRCxD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