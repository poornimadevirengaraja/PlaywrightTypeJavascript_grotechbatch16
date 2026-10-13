@dialogs
Feature: JavaScript alert, confirm, and prompt dialogs
  As an automation learner
  I want to handle browser dialogs
  So that native dialogs do not block my tests

  Background:
    Given I open the automation practice page

  @AP-013
  Scenario: Accept the simple alert
    When I accept the simple alert
    Then the dialog type should be "alert"
    And the dialog message should be "This is a simple alert!"
    And the practice page should remain open

  @AP-014
  Scenario: Accept the confirmation dialog
    When I accept the confirmation dialog
    Then the dialog type should be "confirm"
    And the dialog message should be "Do you want to continue?"
    And the practice page should remain open

  @AP-015
  Scenario: Dismiss the confirmation dialog
    When I dismiss the confirmation dialog
    Then the dialog type should be "confirm"
    And the dialog message should be "Do you want to continue?"
    And the practice page should remain open

  @AP-016
  Scenario: Enter a value in the prompt dialog
    When I enter "Test User" in the prompt dialog
    Then the dialog type should be "prompt"
    And the dialog message should be "Enter your name:"
    And the practice page should remain open

  @AP-016
  Scenario: Dismiss the prompt dialog without entering a value
    When I dismiss the prompt dialog without entering a value
    Then the dialog type should be "prompt"
    And the dialog message should be "Enter your name:"
    And the practice page should remain open
