@page
Feature: Automation practice page and basic controls
  As an automation learner
  I want to interact with the basic page controls
  So that I can verify their state in the browser

  Background:
    Given I open the automation practice page

  @AP-001 @smoke
  Scenario: The practice page loads with its primary sections
    Then the page title should contain "Automation Practice Page"
    And I should see the "Text Fields" section
    And I should see the "Web Table" section
    And I should see the "Ultimate Automation Practice Page" section

  @AP-002 @smoke
  Scenario: Username and password fields accept input
    When I enter "qa-user" in the username field
    And I enter "sample-secret" in the password field
    Then the username field should contain "qa-user"
    And the password field should contain "sample-secret"
    And the password field should be masked

  @AP-003
  Scenario: Address field accepts edited multiline text
    When I enter the following address:
      """
      First address line
      Second address line
      """
    Then the address field should contain:
      """
      First address line
      Second address line
      """
    When I clear the address field
    Then the address field should be empty

  @AP-004 @smoke
  Scenario Outline: Selecting a gender radio option deselects the other options
    When I select the "<gender>" gender option
    Then the "<gender>" gender option should be selected
    And exactly one gender option should be selected

    Examples:
      | gender |
      | Male   |
      | Female |
      | Other  |

  @AP-005 @smoke
  Scenario: Language checkboxes can be selected independently
    When I select the "Java" language checkbox
    And I select the "Python" language checkbox
    Then the "Java" language checkbox should be selected
    And the "Python" language checkbox should be selected
    And the "Selenium" language checkbox should not be selected
    When I deselect the "Java" language checkbox
    Then the "Java" language checkbox should not be selected
    And the "Python" language checkbox should be selected

  @AP-006 @smoke
  Scenario Outline: Each country can be selected
    When I select the "<country>" country
    Then the selected country should be "<country>"

    Examples:
      | country   |
      | India     |
      | USA       |
      | UK        |
      | Australia |

  @AP-007
  Scenario: Country dropdown starts with its placeholder
    Then the selected country should be "–Select Country–"

  @AP-008 @smoke
  Scenario: Skills multi-select retains multiple selected values
    When I select the "Python" and "Playwright" skills
    Then the selected skills should be
      | skill      |
      | Python     |
      | Playwright |

  @AP-009
  Scenario: Skills multi-select selection can be changed and cleared
    When I select the "Selenium" skill
    And I select the "API Testing" skill
    Then the selected skills should be
      | skill       |
      | Selenium    |
      | API Testing |
    When I clear the selected skills
    Then no skills should be selected

  @AP-010 @smoke
  Scenario: Normal Button is actionable without navigating away
    When I click the "Normal Button" button
    Then the practice page should remain open

  @AP-011 @smoke
  Scenario: Reset button restores the username to its initial value
    When I enter "reset-me" in the username field
    And I click the "Reset" button
    Then the username field should be empty

  @AP-012 @smoke
  Scenario: Submitting the demo controls does not navigate to another page
    When I click the "Submit" button
    Then the practice page should remain open

  @AP-023 @smoke
  Scenario: Web table displays the expected headers and records
    Then the web table should have headers
      | header |
      | ID     |
      | Name   |
      | Role   |
    And the web table should contain the rows
      | ID | Name    | Role      |
      | 1  | Deepesh | Trainer   |
      | 2  | Rahul   | Tester    |
      | 3  | Anita   | Developer |

  @AP-024
  Scenario: A table row can be located by a cell value
    Then the row containing "Rahul" should also contain "2" and "Tester"

  @AP-027 @smoke
  Scenario: Enabled and disabled fields expose their expected states
    When I enter "editable" in the enabled field
    Then the enabled field should contain "editable"
    And the disabled field should remain disabled
    And the disabled field should contain "Disabled"

  @AP-028
  Scenario: Sample image loads and has alternative text
    Then the sample image should be loaded
    And the sample image should have alternative text

  @AP-042
  Scenario: Page state does not leak into a fresh browser context
    When I enter "temporary" in the username field
    And I open a fresh browser context
    Then the username field should be empty

  @AP-043 @browser-matrix
  Scenario: Core radio control works in the configured browser
    When I select the "Female" gender option
    Then the "Female" gender option should be selected
