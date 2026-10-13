@comment
Feature: Leave a Comment form validation
  As a visitor
  I want to enter comment details without posting to the live site
  So that I can verify field behavior safely

  Background:
    Given I open the automation practice page

  @AP-040
  Scenario: Comment fields accept non-personal sample values
    When I enter the sample comment form values
    Then the comment field should contain "Automation test comment"
    And the comment name should contain "QA Example"
    And the comment email should contain "qa@example.test"
    And the comment website should contain "https://example.test"
    When I toggle the comment consent checkbox
    Then the comment consent checkbox should be selected
    When I toggle the comment consent checkbox
    Then the comment consent checkbox should not be selected

  @AP-041
  Scenario: Required and malformed comment fields are rejected by native validation
    Then the empty comment form should be invalid
    When I enter malformed comment form values
    Then the comment form should be invalid
    And the comment email field should be invalid
