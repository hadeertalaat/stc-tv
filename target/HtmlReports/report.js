$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "STC TV packgaes",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "validate the labels of package table in \"Choose Your Plan\" section",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.openStcTv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Choose Your Plan\" title",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isTheTitleDisplayed(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Choose Your Plan\" section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isTheTitleDisplayed(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Switch plans or cancel anytime. Free trial for all packages.\" label in \"Choose Your Plan\" section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isTheLabelDisplayedInSection(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Monthly price after free trial\" label in \"Choose Your Plan\" section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isTheLabelDisplayedInSection(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"discovery\" label in \"Choose Your Plan\" section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isTheLabelDisplayedInSection(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Free trial\" label in \"Choose Your Plan\" section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isTheLabelDisplayedInSection(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Video quality\" label in \"Choose Your Plan\" section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isTheLabelDisplayedInSection(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Device access\" label in \"Choose Your Plan\" section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isTheLabelDisplayedInSection(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Rewind\" label in \"Choose Your Plan\" section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isTheLabelDisplayedInSection(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Watch offline\" label in \"Choose Your Plan\" section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isTheLabelDisplayedInSection(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Watch simultaneously\" label in \"Choose Your Plan\" section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isTheLabelDisplayedInSection(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Cast to tv\" label in \"Choose Your Plan\" section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isTheLabelDisplayedInSection(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see MOST POPULAR label for CLASSIC package",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isTheMostPopularLabelDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "validate the labels of package table in \"Available Add-Ons\" section",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.openStcTv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Available Add-Ons\" section",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isTheTitleDisplayed(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Add-ons available at an additional cost. Add them up after you sign up for STC TV\" label in \"Available Add-Ons\" section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isTheLabelDisplayedInSection(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"discovery\" label in \"Available Add-Ons\" section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isTheLabelDisplayedInSection(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"fight sport\" label in \"Available Add-Ons\" section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isTheLabelDisplayedInSection(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "validate all the avaliable packages in \"Choose Your Plan\" section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "When "
});
formatter.step({
  "name": "user should see the \u003cpackage_name\u003e package",
  "keyword": "Then "
});
formatter.step({
  "name": "user should see \"Start your trial\" value for \u003cpackage_name\u003e package",
  "keyword": "And "
});
formatter.step({
  "name": "user should see the \"Monthly price after free trial\" value for \u003cpackage_name\u003e plan package is \u003cmonthly_price\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user should see the \"discovery\" value for \u003cpackage_name\u003e plan package is \u003cdiscovery\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user should see the \"Free trial\" value for \u003cpackage_name\u003e plan package is \u003cfree_trial\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user should see the \"Video quality\" value for \u003cpackage_name\u003e plan package is \u003cvideo_quality\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user should see the \"Device access\" value for \u003cpackage_name\u003e plan package is \u003cdevice_access\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user should see the \"Rewind\" value for \u003cpackage_name\u003e plan package is \u003crewind\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user should see the \"Watch offline\" value for \u003cpackage_name\u003e plan package is \u003cwatch_offline\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user should see the \"Watch simultaneously\" value for \u003cpackage_name\u003e plan package is \u003cwatch_simultaneously\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user should see the \"Cast to tv\" value for \u003cpackage_name\u003e plan package is \u003ccast_to_tv\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "package_name",
        "monthly_price",
        "discovery",
        "free_trial",
        "video_quality",
        "device_access",
        "rewind",
        "watch_offline",
        "watch_simultaneously",
        "cast_to_tv"
      ]
    },
    {
      "cells": [
        "LITE",
        "15 SAR/month",
        "Included",
        "For 90 days",
        "HD",
        "4",
        "For 14 days",
        "close",
        "close",
        "close"
      ]
    },
    {
      "cells": [
        "CLASSIC",
        "25 SAR/month",
        "Included",
        "For 7 days",
        "Full HD",
        "4",
        "For 14 days",
        "check",
        "2 devices",
        "check"
      ]
    },
    {
      "cells": [
        "PREMIUM",
        "60 SAR/month",
        "Included",
        "For 7 days",
        "4K UHD",
        "8",
        "For 14 days",
        "check",
        "4 devices",
        "check"
      ]
    }
  ]
});
formatter.scenario({
  "name": "validate all the avaliable packages in \"Choose Your Plan\" section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.openStcTv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the LITE package",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageNameDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Start your trial\" value for LITE package",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightText(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Monthly price after free trial\" value for LITE plan package is 15 SAR/month",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"discovery\" value for LITE plan package is Included",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Free trial\" value for LITE plan package is For 90 days",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Video quality\" value for LITE plan package is HD",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Device access\" value for LITE plan package is 4",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Rewind\" value for LITE plan package is For 14 days",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Watch offline\" value for LITE plan package is close",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Watch simultaneously\" value for LITE plan package is close",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Cast to tv\" value for LITE plan package is close",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "validate all the avaliable packages in \"Choose Your Plan\" section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.openStcTv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the CLASSIC package",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageNameDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Start your trial\" value for CLASSIC package",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightText(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Monthly price after free trial\" value for CLASSIC plan package is 25 SAR/month",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"discovery\" value for CLASSIC plan package is Included",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Free trial\" value for CLASSIC plan package is For 7 days",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Video quality\" value for CLASSIC plan package is Full HD",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Device access\" value for CLASSIC plan package is 4",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Rewind\" value for CLASSIC plan package is For 14 days",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Watch offline\" value for CLASSIC plan package is check",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Watch simultaneously\" value for CLASSIC plan package is 2 devices",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Cast to tv\" value for CLASSIC plan package is check",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "validate all the avaliable packages in \"Choose Your Plan\" section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.openStcTv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the PREMIUM package",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageNameDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Start your trial\" value for PREMIUM package",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightText(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Monthly price after free trial\" value for PREMIUM plan package is 60 SAR/month",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"discovery\" value for PREMIUM plan package is Included",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Free trial\" value for PREMIUM plan package is For 7 days",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Video quality\" value for PREMIUM plan package is 4K UHD",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Device access\" value for PREMIUM plan package is 8",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Rewind\" value for PREMIUM plan package is For 14 days",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Watch offline\" value for PREMIUM plan package is check",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Watch simultaneously\" value for PREMIUM plan package is 4 devices",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Cast to tv\" value for PREMIUM plan package is check",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "validate all the avaliable packages in \"Available Add-Ons\" section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "Given "
});
formatter.step({
  "name": "user chooses \u003ccountry\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user should see the \"discovery\" value for \u003cpackage_name\u003e add-ons package is \u003cdiscovery\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "user should see the \"fight sport\" value for \u003cpackage_name\u003e add-ons package is \u003cfight_sport\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "country",
        "package_name",
        "discovery",
        "fight_sport"
      ]
    },
    {
      "cells": [
        "KSA",
        "LITE",
        "Included",
        "23 SAR/month"
      ]
    },
    {
      "cells": [
        "KSA",
        "CLASSIC",
        "Included",
        "23 SAR/month"
      ]
    },
    {
      "cells": [
        "KSA",
        "PREMIUM",
        "Included",
        "23 SAR/month"
      ]
    },
    {
      "cells": [
        "Bahrain",
        "LITE",
        "Included",
        "Аvailable"
      ]
    },
    {
      "cells": [
        "Bahrain",
        "CLASSIC",
        "Included",
        "Аvailable"
      ]
    },
    {
      "cells": [
        "Bahrain",
        "PREMIUM",
        "Included",
        "Аvailable"
      ]
    },
    {
      "cells": [
        "Kuwait",
        "LITE",
        "Included",
        "Аvailable"
      ]
    },
    {
      "cells": [
        "Kuwait",
        "CLASSIC",
        "Included",
        "Аvailable"
      ]
    },
    {
      "cells": [
        "Kuwait",
        "PREMIUM",
        "Included",
        "Аvailable"
      ]
    }
  ]
});
formatter.scenario({
  "name": "validate all the avaliable packages in \"Available Add-Ons\" section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.openStcTv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses KSA",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.selectCountry(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"discovery\" value for LITE add-ons package is Included",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"fight sport\" value for LITE add-ons package is 23 SAR/month",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "validate all the avaliable packages in \"Available Add-Ons\" section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.openStcTv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses KSA",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.selectCountry(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"discovery\" value for CLASSIC add-ons package is Included",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"fight sport\" value for CLASSIC add-ons package is 23 SAR/month",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "validate all the avaliable packages in \"Available Add-Ons\" section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.openStcTv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses KSA",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.selectCountry(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"discovery\" value for PREMIUM add-ons package is Included",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"fight sport\" value for PREMIUM add-ons package is 23 SAR/month",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "validate all the avaliable packages in \"Available Add-Ons\" section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.openStcTv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses Bahrain",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.selectCountry(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"discovery\" value for LITE add-ons package is Included",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"fight sport\" value for LITE add-ons package is Аvailable",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "validate all the avaliable packages in \"Available Add-Ons\" section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.openStcTv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses Bahrain",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.selectCountry(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"discovery\" value for CLASSIC add-ons package is Included",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"fight sport\" value for CLASSIC add-ons package is Аvailable",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "validate all the avaliable packages in \"Available Add-Ons\" section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.openStcTv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses Bahrain",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.selectCountry(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"discovery\" value for PREMIUM add-ons package is Included",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"fight sport\" value for PREMIUM add-ons package is Аvailable",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "validate all the avaliable packages in \"Available Add-Ons\" section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.openStcTv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses Kuwait",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.selectCountry(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"discovery\" value for LITE add-ons package is Included",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"fight sport\" value for LITE add-ons package is Аvailable",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "validate all the avaliable packages in \"Available Add-Ons\" section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.openStcTv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses Kuwait",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.selectCountry(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"discovery\" value for CLASSIC add-ons package is Included",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"fight sport\" value for CLASSIC add-ons package is Аvailable",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "validate all the avaliable packages in \"Available Add-Ons\" section",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.openStcTv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses Kuwait",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.selectCountry(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"discovery\" value for PREMIUM add-ons package is Included",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"fight sport\" value for PREMIUM add-ons package is Аvailable",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "validate the packages cost based on the currency of each country",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "Given "
});
formatter.step({
  "name": "user chooses \u003ccountry\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user should see the \"Monthly price after free trial\" value for LITE plan package is \u003cprice_for_lite\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "user should see the \"Monthly price after free trial\" value for CLASSIC plan package is \u003cprice_for_classic\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user should see the \"Monthly price after free trial\" value for PREMIUM plan package is \u003cprice_for_premium\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "country",
        "price_for_lite",
        "price_for_classic",
        "price_for_premium"
      ]
    },
    {
      "cells": [
        "KSA",
        "15 SAR/month",
        "25 SAR/month",
        "60 SAR/month"
      ]
    },
    {
      "cells": [
        "Bahrain",
        "2 BHD/month",
        "3 BHD/month",
        "6 BHD/month"
      ]
    },
    {
      "cells": [
        "Kuwait",
        "1.2 KWD/month",
        "2.5 KWD/month",
        "4.8 KWD/month"
      ]
    }
  ]
});
formatter.scenario({
  "name": "validate the packages cost based on the currency of each country",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.openStcTv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses KSA",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.selectCountry(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Monthly price after free trial\" value for LITE plan package is 15 SAR/month",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Monthly price after free trial\" value for CLASSIC plan package is 25 SAR/month",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Monthly price after free trial\" value for PREMIUM plan package is 60 SAR/month",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "validate the packages cost based on the currency of each country",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.openStcTv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses Bahrain",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.selectCountry(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Monthly price after free trial\" value for LITE plan package is 2 BHD/month",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Monthly price after free trial\" value for CLASSIC plan package is 3 BHD/month",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Monthly price after free trial\" value for PREMIUM plan package is 6 BHD/month",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "validate the packages cost based on the currency of each country",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens stc tv",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.openStcTv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses Kuwait",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.selectCountry(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Monthly price after free trial\" value for LITE plan package is 1.2 KWD/month",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Monthly price after free trial\" value for CLASSIC plan package is 2.5 KWD/month",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the \"Monthly price after free trial\" value for PREMIUM plan package is 4.8 KWD/month",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.isThePackageFeatureDisplayedWithTheRightValue(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});