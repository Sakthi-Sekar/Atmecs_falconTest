
import { Given, When, Then } from 'cucumber'
import { browser, element, by } from 'protractor'
import { expect } from 'chai'
import { title } from 'process';
import * as locator from 'D:/Atmecs_falconTest/locator/locators.json'

Given(/^User launch the chrome browser$/,{ timeout: 40000 }, async function (){
    console.log("Browser opened")
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
    console.log("Assertion for title passed")
});


When(/^Click REST API TEST RESULT Link in dashboard$/, { timeout: 70000 }, async function () {
    //click on Rest API Test Result
    await element(by.xpath((<any>locator).restAPI)).click();
   console.log("Clicked on Rest API")
});

When(/^Select status as pass$/,{ timeout: 70000 }, async function () {
    //Click Status and check PASS value   
    await element(by.xpath((<any>locator).dropDownClick)).$((<any>locator).dropDownPass).click();
    console.log("Pass value selected")   
});

Then(/^Able to get pass test cases$/,{ timeout: 70000 }, async function () {
//get the filtered values
    var status= await element(by.css((<any>locator).filteredValues)).getText();
    console.log(status)
});

When(/^User click on toggle button$/,{ timeout: 100000 }, async function () {
    await element(by.css((<any>locator).toggleSwitch)).click();
    browser.sleep(10000)
    console.log("Clicked on toggle")
});

Then(/^User can able to view total test run count$/,{ timeout: 100000 }, async function () {
    var test=   await element(by.xpath((<any>locator).totalTestCount)).getText();
console.log("Total test :"+test)
});

Then(/^User can able to view pass test percentage$/, { timeout: 100000 }, async function () {
    var pass=await element(by.xpath((<any>locator).testCountPassPercent)).getText();
console.log("Total test case Pass :"+pass)
});

Then(/^User can able to view fail test count$/, { timeout: 100000 }, async function () {
    var fail=await element(by.xpath((<any>locator).testCountFail)).getText();
console.log("Total test case Fail :"+fail)
});

Then(/^User can able to view skip test count$/, { timeout: 100000 }, async function () {
    var skip=await element(by.xpath((<any>locator).testSkipCount)).getText();
    console.log("Total testcase skip: " + skip)
    console.log("Pass")
});

When(/^Click on recent runs$/, { timeout: 100000 }, async function ()  {
    //click on Recent runs
    await element(by.xpath((<any>locator).clickRecentRuns)).click();
    console.log("Clicked on recent runs")
});
Then(/^click on Rest API Test Result$/, { timeout: 100000 }, async function () {
    //click on Rest API Test Result
    await element(by.xpath((<any>locator).clickAPITestResults)).click();
    console.log("Clicked on Rest API")
});
Then(/^select Pass value from the drop down$/, { timeout: 100000 }, async function () {
    //click on status filter
    await element(by.xpath((<any>locator).statusFilter)).click();
    console.log("Click on status filter")
});
//two locators
Then(/^Select pass from the drop down$/, { timeout: 100000 }, async function () {
    //Select pass from the drop down
    await element(by.xpath((<any>locator).dropDownClick)).$((<any>locator).dropDownPass).click();
    console.log("Pass value selected")
});

Then(/^get the filtered values$/, { timeout: 100000 }, async function()  {
    var statusPassValues = await element(by.xpath((<any>locator).passValues)).getText();
    // console.log(statusPassValues)
    console.log("Pass Values")
});

When(/^User click on view from the main navigation$/, { timeout: 100000 }, async function()  {
    //click on view 
    await element(by.xpath((<any>locator).clickView)).click();
});

Then(/^click on select customer and select Falcon$/, { timeout: 100000 }, async function()  {
    //select customer
    await element(by.xpath((<any>locator).clickCustomer)).click();
    // await element(by.xpath((<any>locator).selectFalcon)).click();
});


