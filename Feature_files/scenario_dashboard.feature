
Feature: Main navigation
# @sanity
   Scenario: Dashboard
      Given User launch the chrome browser
      When  User opens URL "http://10.10.10.231:8082/#/app/dashboard" 
      And   Click REST API TEST RESULT Link in dashboard
      And   Select status as pass
      Then  Able to get pass test cases
      When  User click on toggle button
      Then  User can able to view total test run count
      Then  User can able to view pass test percentage
      Then  User can able to view fail test count
      Then  User can able to view skip test count

    #   @regression
      Scenario: Recent runs
      When Click on recent runs
      Then click on Rest API Test Result
      Then select Pass value from the drop down
      Then Select pass from the drop down
      Then get the filtered values
      
    