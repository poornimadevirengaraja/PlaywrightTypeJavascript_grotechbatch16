@widgets
Feature: Advanced practice page widgets
  As an automation learner
  I want to interact with advanced browser widgets
  So that I can practice frame, hover, asynchronous, and shadow-DOM automation

  Background:
    Given I open the automation practice page

  @AP-025
  Scenario: Sample iframe is addressable through its frame locator
    When I scroll the sample iframe into view
    Then the sample iframe should be present

  @AP-026
  Scenario: Hidden field is not visible or interactable
    Then the hidden field should not be visible
    And the hidden field should not be enabled for interaction

  @AP-029
  Scenario: Hover target exposes its hover text
    When I hover over the hover target
    Then the hover target title should be "Hover text"

  @AP-030
  Scenario: Matching auto-suggestion can be selected
    When I search suggestions for "Playwright"
    Then a "Playwright" suggestion should be displayed
    When I select the "Playwright" suggestion
    Then the search field should contain "Playwright"
    And no suggestions should be displayed

  @AP-031
  Scenario: No-match and empty auto-suggestion queries show no stale choices
    When I search suggestions for "no-such-practice-suggestion"
    Then no suggestions should be displayed
    When I search suggestions for ""
    Then no suggestions should be displayed

  @AP-032 @network
  Scenario: AJAX success message is displayed
    When I load the AJAX success result
    Then the AJAX result should be "Data loaded successfully!"

  @AP-033 @network
  Scenario: Simulated AJAX network failure is surfaced
    When I simulate an AJAX network failure
    Then the AJAX result should be "Network Error (500)"

  @AP-034
  Scenario: Reacquire the replacement stale-element button
    When I click the button that replaces itself
    Then the replacement button should be displayed
    When I click the replacement button
    Then the replacement button should remain displayed

  @AP-035
  Scenario: Drag source into the drop target
    When I drag the draggable item to the drop target
    Then the drop target should contain the draggable item

  @AP-036
  Scenario: Drag source outside the drop target
    When I drag the draggable item outside the drop target
    Then the drop target should not contain the draggable item

  @AP-037
  Scenario: Keyboard actions report the pressed key
    When I press "A" in the keyboard input
    Then the keyboard result should be "A"

  @AP-038
  Scenario: Enter text in the nested shadow-DOM input
    When I enter "shadow-value" in the nested shadow input
    Then the nested shadow input should contain "shadow-value"

  @AP-039
  Scenario: Click the nested shadow-DOM button
    When I click the nested shadow button
    Then the nested shadow button should remain displayed
