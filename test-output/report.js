$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "SwagLabs test scenarios for all provided user accounts",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@EndToEndLoginRun"
    }
  ]
});
formatter.scenarioOutline({
  "name": "1) Successful login with standard user and relogin with performance glitch user to check perf effect",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginWithStandardandperfglitchuser"
    }
  ]
});
formatter.step({
  "name": "I launch the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "I open the URL \"\u003curl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter Username as \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "I land into the homePage as \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I add item to the cart",
  "keyword": "Then "
});
formatter.step({
  "name": "I place the order",
  "keyword": "When "
});
formatter.step({
  "name": "I enter Customer Firstname as \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Customer lastname as \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter postalcode as \"\u003cpostalCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I proceed to checkout",
  "keyword": "Then "
});
formatter.step({
  "name": "I check the order completion and back to home",
  "keyword": "And "
});
formatter.step({
  "name": "I click on logout link",
  "keyword": "Then "
});
formatter.step({
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "title",
        "url",
        "firstName",
        "lastName",
        "postalCode"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "Swag Labs",
        "https://qa-challenge.codesubmit.io",
        "Dillon",
        "Becker",
        "290854"
      ]
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce",
        "Swag Labs",
        "https://qa-challenge.codesubmit.io",
        "David",
        "Roy",
        "24857"
      ]
    }
  ]
});
formatter.scenario({
  "name": "1) Successful login with standard user and relogin with performance glitch user to check perf effect",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EndToEndLoginRun"
    },
    {
      "name": "@LoginWithStandardandperfglitchuser"
    }
  ]
});
formatter.step({
  "name": "I launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open the URL \"https://qa-challenge.codesubmit.io\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opwn_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Username as \"standard_user\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I land into the homePage as \"Swag Labs\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Page_title_shouldbe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add item to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.add_item_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I place the order",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.place_the_order()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Customer Firstname as \"Dillon\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Customer lastname as \"Becker\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter postalcode as \"290854\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_postalcode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I proceed to checkout",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.proceed_to_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check the order completion and back to home",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.validate_checkout_complete()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on logout link",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Click_on_logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "1) Successful login with standard user and relogin with performance glitch user to check perf effect",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EndToEndLoginRun"
    },
    {
      "name": "@LoginWithStandardandperfglitchuser"
    }
  ]
});
formatter.step({
  "name": "I launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open the URL \"https://qa-challenge.codesubmit.io\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opwn_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Username as \"performance_glitch_user\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I land into the homePage as \"Swag Labs\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Page_title_shouldbe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add item to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.add_item_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I place the order",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.place_the_order()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Customer Firstname as \"David\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Customer lastname as \"Roy\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter postalcode as \"24857\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_postalcode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I proceed to checkout",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.proceed_to_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check the order completion and back to home",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.validate_checkout_complete()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on logout link",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Click_on_logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "2) Login with locked out user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginwithLockedoutUser"
    }
  ]
});
formatter.step({
  "name": "I launch the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "I open the URL \"\u003curl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter Username as \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "Check User is locked out",
  "keyword": "Then "
});
formatter.step({
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "url"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "https://qa-challenge.codesubmit.io"
      ]
    }
  ]
});
formatter.scenario({
  "name": "2) Login with locked out user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EndToEndLoginRun"
    },
    {
      "name": "@LoginwithLockedoutUser"
    }
  ]
});
formatter.step({
  "name": "I launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open the URL \"https://qa-challenge.codesubmit.io\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opwn_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Username as \"locked_out_user\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check User is locked out",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.validate_locked_out_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "3) Login with Problem User",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginwithproblemUser"
    }
  ]
});
formatter.step({
  "name": "I launch the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "I open the URL \"\u003curl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter Username as \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify whether image is loading",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on logout link",
  "keyword": "Then "
});
formatter.step({
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "url"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce",
        "https://qa-challenge.codesubmit.io"
      ]
    }
  ]
});
formatter.scenario({
  "name": "3) Login with Problem User",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EndToEndLoginRun"
    },
    {
      "name": "@LoginwithproblemUser"
    }
  ]
});
formatter.step({
  "name": "I launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open the URL \"https://qa-challenge.codesubmit.io\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opwn_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Username as \"problem_user\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify whether image is loading",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.validate_image_with_problemuser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on logout link",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Click_on_logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "4) Login with Performance glitch User to test performnace impact on multiple addition and removal",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PerformanceglitchUsertotestremovalandadditiontocart"
    }
  ]
});
formatter.step({
  "name": "I launch the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "I open the URL \"\u003curl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter Username as \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "I land into the homePage as \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I add items to the cart",
  "keyword": "Then "
});
formatter.step({
  "name": "I remove item from the cart",
  "keyword": "Then "
});
formatter.step({
  "name": "I place the order",
  "keyword": "When "
});
formatter.step({
  "name": "I enter Customer Firstname as \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Customer lastname as \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter postalcode as \"\u003cpostalCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I proceed to checkout",
  "keyword": "Then "
});
formatter.step({
  "name": "I check the order completion and back to home",
  "keyword": "And "
});
formatter.step({
  "name": "I click on logout link",
  "keyword": "Then "
});
formatter.step({
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "url",
        "firstName",
        "lastName",
        "postalCode",
        "title"
      ]
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce",
        "https://qa-challenge.codesubmit.io",
        "Hurley",
        "Jones",
        "B178905",
        "Swag Labs"
      ]
    }
  ]
});
formatter.scenario({
  "name": "4) Login with Performance glitch User to test performnace impact on multiple addition and removal",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EndToEndLoginRun"
    },
    {
      "name": "@PerformanceglitchUsertotestremovalandadditiontocart"
    }
  ]
});
formatter.step({
  "name": "I launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open the URL \"https://qa-challenge.codesubmit.io\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opwn_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Username as \"performance_glitch_user\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I land into the homePage as \"Swag Labs\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Page_title_shouldbe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add items to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.add_items_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I remove item from the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.remove_from_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I place the order",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.place_the_order()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Customer Firstname as \"Hurley\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Customer lastname as \"Jones\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter postalcode as \"B178905\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.set_postalcode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I proceed to checkout",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.proceed_to_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check the order completion and back to home",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.validate_checkout_complete()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on logout link",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Click_on_logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
});