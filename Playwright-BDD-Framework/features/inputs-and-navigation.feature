@inputs
Feature: File, date/time, and navigation controls
  As an automation learner
  I want to exercise browser input and navigation controls
  So that their values and destinations can be verified

  Background:
    Given I open the automation practice page

  @AP-017
  Scenario: Upload a fixture file
    When I upload the fixture file
    Then the file input should contain the fixture file

  @AP-018
  Scenario: Replace and clear the selected file
    When I upload the fixture file
    And I replace the upload with a second fixture file
    Then the file input should contain the second fixture file
    When I clear the uploaded file
    Then the file input should be empty

  @AP-019
  Scenario: Date, time, and date-time fields accept valid values
    When I set the date to "2025-12-31"
    And I set the time to "14:35"
    And I set the date-time to "2025-12-31T14:35"
    Then the date field should contain "2025-12-31"
    And the time field should contain "14:35"
    And the date-time field should contain "2025-12-31T14:35"

  @AP-020
  Scenario: Date and time fields accept empty values
    When I set the date to "2025-12-31"
    And I set the time to "14:35"
    And I clear the date and time fields
    Then the date field should be empty
    And the time field should be empty
    And the date-time field should be empty

  @AP-020
  Scenario Outline: Time input accepts values at day boundaries
    When I set the time to "<time>"
    Then the time field should contain "<time>"

    Examples:
      | time  |
      | 00:00 |
      | 23:59 |

  @AP-021
  Scenario: Go to Bottom link scrolls to the bottom content
    When I click the Go to Bottom link
    Then the bottom-of-page message should be visible

  @AP-022 @external
  Scenario: Open Google link points to Google
    Then the Open Google link should point to "https://www.google.com"
