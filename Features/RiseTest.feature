@EndToEndAcceotanceTest
Feature: SwagLabs test scenarios for all provided user accounts

@AddmultipleItems
  Scenario Outline:4) Login with Performance glitch User to test performnace impact on multiple addition and removal
    Given I launch the browser
    When I open the URL "<url>"
    And  I enter Username as "<username>" 
    And  I enter Password as "<password>"
    And  I click the login button 
    Then I land into the homePage as "<title>"
    Then I add items to the cart
    Then I compare and find the minimum price
    Then I click on logout link
    Then I close the browser
    
    
     Examples: 
     | username                | password    |url                        | title   |
     | standard_user           |secret_sauce |https://www.saucedemo.com/ |Swag Labs|
     | performance_glitch_user |secret_sauce |https://www.saucedemo.com/ |Swag Labs| 

@LoginwithLockedoutUser 
  Scenario Outline:2) Login with locked out user
    Given I launch the browser
    When I open the URL "<url>"
    And  I enter Username as "<username>" 
    And  I enter Password as "<password>"
    And  I click the login button 
    Then Check User is locked out
    Then I close the browser

    Examples: 
     | username        | password    |url                        |
     | locked_out_user |secret_sauce |https://www.saucedemo.com/ |