#Author: Hadeer Talaat
#Date: Jun 8th, 2023
#Description:
#test in arabic mode?
#validate the logo and the full ui?
Feature: STC TV packgaes

  Scenario: validate the labels of package table in "Choose Your Plan" section
    When user opens stc tv
    Then user should see the "Choose Your Plan" title
    And user should see the "Choose Your Plan" section
    And user should see the "Switch plans or cancel anytime. Free trial for all packages." label in "Choose Your Plan" section
    And user should see the "Monthly price after free trial" label in "Choose Your Plan" section
    And user should see the "discovery" label in "Choose Your Plan" section
    And user should see the "Free trial" label in "Choose Your Plan" section
    And user should see the "Video quality" label in "Choose Your Plan" section
    And user should see the "Device access" label in "Choose Your Plan" section
    And user should see the "Rewind" label in "Choose Your Plan" section
    And user should see the "Watch offline" label in "Choose Your Plan" section
    And user should see the "Watch simultaneously" label in "Choose Your Plan" section
    And user should see the "Cast to tv" label in "Choose Your Plan" section
    And user should see MOST POPULAR label for CLASSIC package

  Scenario: validate the labels of package table in "Available Add-Ons" section
    When user opens stc tv
    Then user should see the "Available Add-Ons" section
    And user should see the "Add-ons available at an additional cost. Add them up after you sign up for STC TV" label in "Available Add-Ons" section
    And user should see the "discovery" label in "Available Add-Ons" section
    And user should see the "fight sport" label in "Available Add-Ons" section

  Scenario Outline: validate all the avaliable packages in "Choose Your Plan" section
    When user opens stc tv
    Then user should see the <package_name> package
    And user should see "Start your trial" value for <package_name> package
    And user should see the "Monthly price after free trial" value for <package_name> plan package is <monthly_price>
    And user should see the "discovery" value for <package_name> plan package is <discovery>
    And user should see the "Free trial" value for <package_name> plan package is <free_trial>
    And user should see the "Video quality" value for <package_name> plan package is <video_quality>
    And user should see the "Device access" value for <package_name> plan package is <device_access>
    And user should see the "Rewind" value for <package_name> plan package is <rewind>
    And user should see the "Watch offline" value for <package_name> plan package is <watch_offline>
    And user should see the "Watch simultaneously" value for <package_name> plan package is <watch_simultaneously>
    And user should see the "Cast to tv" value for <package_name> plan package is <cast_to_tv>
    Examples:
      | package_name | monthly_price | discovery | free_trial  | video_quality | device_access | rewind      | watch_offline | watch_simultaneously | cast_to_tv |
      | LITE         | 15 SAR/month  | Included  | For 90 days | HD            | 4             | For 14 days | close         | close                | close      |
      | CLASSIC      | 25 SAR/month  | Included  | For 7 days  | Full HD       | 4             | For 14 days | check         | 2 devices            | check      |
      | PREMIUM      | 60 SAR/month  | Included  | For 7 days  | 4K UHD        | 8             | For 14 days | check         | 4 devices            | check      |

  Scenario Outline: validate all the avaliable packages in "Available Add-Ons" section
    Given user opens stc tv
    When user chooses <country>
    Then user should see the "discovery" value for <package_name> add-ons package is <discovery>
    And user should see the "fight sport" value for <package_name> add-ons package is <fight_sport>
    Examples:
      | country | package_name | discovery | fight_sport  |
      | KSA     | LITE         | Included  | 23 SAR/month |
      | KSA     | CLASSIC      | Included  | 23 SAR/month |
      | KSA     | PREMIUM      | Included  | 23 SAR/month |
      | Bahrain | LITE         | Included  | Аvailable    |
      | Bahrain | CLASSIC      | Included  | Аvailable    |
      | Bahrain | PREMIUM      | Included  | Аvailable    |
      | Kuwait  | LITE         | Included  | Аvailable    |
      | Kuwait  | CLASSIC      | Included  | Аvailable    |
      | Kuwait  | PREMIUM      | Included  | Аvailable    |

  Scenario Outline: validate the packages cost based on the currency of each country
    Given user opens stc tv
    When user chooses <country>
    Then user should see the "Monthly price after free trial" value for LITE plan package is <price_for_lite>
    And user should see the "Monthly price after free trial" value for CLASSIC plan package is <price_for_classic>
    And user should see the "Monthly price after free trial" value for PREMIUM plan package is <price_for_premium>
    Examples:
      | country | price_for_lite | price_for_classic | price_for_premium |
      | KSA     | 15 SAR/month   | 25 SAR/month      | 60 SAR/month      |
      | Bahrain | 2 BHD/month    | 3 BHD/month       | 6 BHD/month       |
      | Kuwait  | 1.2 KWD/month  | 2.5 KWD/month     | 4.8 KWD/month     |
