
import { Given, When, Then } from 'cucumber'
import { browser, element, by } from 'protractor'
import { expect } from 'chai'
import { title } from 'process';

Given(/^User launch the chrome browser$/,{ timeout: 40000 }, async function (){
    console.log("Step 1: Browser opening")
    browser.waitForAngularEnabled(true);
    
});

When(/^User opens URL "([^"]*)"$/,{ timeout: 70000 }, async function (url) {
    await browser.get(url);
    browser.manage().window().maximize();
    browser.getTitle().then(function(title) {console.log(title),
        expect(title).to.be.equals('ATMECS - Falcon Test Repotrs')});
    
    // const title=await browser.getTitle();
    
    // console.log("website title :" + title)
    // expect(title).to.be.equal("ATMECS - Falcon Test Repotrs");
});


When(/^Click REST API TEST RESULT Link in dashboard$/, { timeout: 70000 }, async function () {
    
    await element(by.xpath("(//h4[@class='media-box-heading ng-binding'])[1]")).click();
   
});

When(/^Select status as pass$/,{ timeout: 70000 }, async function () {
    await  element(by.xpath("//select[@name='status']")).$("[value='PASS']").click();
});

Then(/^Able to get pass test cases$/,{ timeout: 70000 }, async function () {

    var status= await element(by.css("#view-report-filter > div.slimScrollDiv > scrollable > table")).getText();
    console.log(status)
});

When(/^User click on toggle button$/,{ timeout: 100000 }, async function () {
    await element(by.css("label.pull-right > span")).click();
    browser.sleep(10000)
});



Then(/^User can able to view total test run count$/,{ timeout: 100000 }, async function () {
    var test=   await element(by.xpath("//h4[.='10 TEST(S)']")).getText();
console.log("total test :"+test)
});

Then(/^User can able to view pass test percentage$/, { timeout: 100000 }, async function () {
    var pass=await element(by.xpath("//div[6]//div[@class='panel-body text-center']")).getText();
console.log("total test case Pass :"+pass)
});

Then(/^User can able to view fail test count$/, { timeout: 100000 }, async function () {
    var fail=await element(by.xpath("//div[7]//div[@class='panel-body text-center']")).getText();
console.log("total test case Fail :"+fail)
});

Then(/^User can able to view skip test count$/, { timeout: 100000 }, async function () {
    var skip=await element(by.xpath("//div[8]//div[@class='panel-body text-center']")).getText();
    console.log("Total testcase skip: " + skip)
});

When(/^Click on recent runs$/, { timeout: 100000 }, async function ()  {
    //click on Recent runs
    await element(by.xpath("(//span[@class='ng-binding'])[2]")).click();
});
Then(/^click on Rest API Test Result$/, { timeout: 100000 }, async function () {
    //click on Rest API Test Result
    await element(by.xpath("(//td[@class='ng-binding'])[1]")).click();
});
Then(/^select Pass value from the drop down$/, { timeout: 100000 }, async function () {
    //select Pass value from the drop down
    await element(by.xpath("//select[@name='status']")).click();
});
Then(/^Select pass from the drop down$/, { timeout: 100000 }, async function () {
    //Select pass from the drop down
    await element(by.xpath("//select[@name='status']")).$("[value='PASS']").click();
});

Then(/^get the filtered values$/, { timeout: 100000 }, async function()  {
    var statusPassValues = await element(by.xpath("//*[@id='view-report-filter']/div[2]/scrollable")).getText();
	console.log(statusPassValues)
});
