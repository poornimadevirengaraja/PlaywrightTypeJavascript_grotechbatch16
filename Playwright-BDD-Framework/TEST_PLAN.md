# Automation Practice Page — Cucumber Test Plan

**Application:** [SQA Tools Automation Practice Page](https://sqatools.in/automation-practice-page/)
**Purpose:** Define an automated functional test suite using Cucumber, TypeScript, and Playwright.
**Test level:** Browser-based end-to-end / UI functional
**Status:** Planning baseline; verify the live page and confirm unspecified behaviors before treating them as product requirements.

## 1. Objectives

- Check that each practice widget is present, operable, and produces the expected browser or page state.
- Exercise standard and advanced Playwright automation patterns through readable Gherkin scenarios.
- Cover important positive, negative, boundary, and recovery paths without coupling tests to incidental page styling.
- Make test results repeatable, diagnosable, and suitable for local and CI runs.

## 2. Scope

### In scope

The page currently contains:

- Username, password, and address fields
- Gender radio buttons and Java/Python/Selenium checkboxes
- Country single-select and skills multi-select dropdowns
- Normal, Submit, and Reset buttons
- Simple, confirm, and prompt JavaScript alerts
- File upload and date, time, and date-time inputs
- External and in-page links
- Web table
- Iframe
- Hidden element
- Enabled and disabled fields
- Image, hover target, and bottom-of-page scroll target
- Google-style auto-suggestions
- AJAX success and simulated network failure
- Stale-element replacement
- Drag-and-drop
- Keyboard actions
- Nested shadow DOM input and button
- The page's “Leave a Comment” form (WordPress comment fields)

### Out of scope

- Testing Google, WordPress, advertising, analytics, or other third-party services beyond checking the page's own link/navigation behavior.
- Load, penetration, or broad accessibility certification. Basic accessibility observations can be recorded as exploratory findings.
- Verifying business rules that are not described or visibly exposed by the practice page.

## 3. Assumptions and items to confirm

The page is a public practice page, not a controlled application under test. It may change independently, depend on network services, or behave differently across browser versions.

Before enforcing assertions for the following, inspect the live behavior and agree on the expected result:

1. Whether Submit validates fields, displays a message, navigates, or submits externally.
2. What the Normal Button is intended to do and whether Reset restores all fields to their initial values.
3. Accepted file types and whether upload produces a visible confirmation.
4. Whether the multi-select permits arbitrary combinations and how selection is cleared.
5. The suggestion values, selection behavior, and result behavior for the AJAX success/failure controls.
6. Exact dialog text and confirm/prompt outcomes.
7. Iframe content, drag-and-drop target/result, hidden-element reveal mechanism, stale-element replacement result, and keyboard-action feedback.
8. Whether the comment form can submit to a remote service; avoid posting real or personal data.

Where behavior is unspecified, assert observable, stable facts (for example, a dialog opens, a button is actionable, or an input accepts a value) and record the actual result. Do not encode guessed copy, URLs, or success states as requirements.

## 4. Test approach

- Use Cucumber feature files for behavior and TypeScript step definitions for the automation.
- Use Playwright locators and browser APIs; use a fresh browser context/page per scenario unless a scenario explicitly tests state across actions.
- Prefer accessible role/name and associated labels. Use stable IDs exposed by the page when no accessible locator is practical (for example, `#username`, `#password`, `#address`, `#country`, `#skills`, `#fileUpload`, `#datePicker`, `#timePicker`, `#dateTimePicker`, `#enabledInput`, `#disabledInput`, and `#searchBox`).
- For shadow DOM, use Playwright's shadow-piercing locators where possible and verify the nested host path rather than relying on brittle CSS ancestry.
- For iframe content, locate the frame by a stable title/name or URL fragment confirmed at runtime; do not use positional frame indexes unless unavoidable.
- Use Playwright's native dialog event handling for alerts, confirms, and prompts. Register the handler before clicking the trigger.
- Wait for observable conditions (locator state, text, URL, network response where appropriate) rather than fixed sleeps.
- Keep tests independent. Reset or recreate the page/context between scenarios; do not depend on execution order.
- Capture trace, screenshot, and useful page/network diagnostics on failure. Do not fail the whole suite for known third-party advertisement or analytics requests unless they block a first-party feature.

## 5. Prioritization

- **P0 — Smoke:** page loads; core form controls; dropdowns; dialogs; reset; enabled/disabled; table.
- **P1 — Functional:** upload, date/time controls, links, iframe, hidden element, hover, suggestions, AJAX, stale element, drag-and-drop, keyboard, shadow DOM.
- **P2 — Extended:** boundary/value variants, browser matrix, repeatability, basic accessibility observations, comment form (only if its submission behavior is confirmed).

## 6. Scenario inventory

Each row is a candidate Cucumber scenario. “Expected result” is the assertion target; resolve the explicitly marked unknowns against the live page before implementation.

| ID | Priority | Feature | Scenario / test intent | Expected result |
|---|---|---|---|---|
| AP-001 | P0 | Page availability | Open the practice page | Page title and primary heading identify the Automation Practice Page; key sections are visible. |
| AP-002 | P0 | Text fields | Enter username and password | Values are accepted; password is masked; values remain until changed or reset. |
| AP-003 | P0 | Text fields | Enter, edit, and clear the address | Text area accepts multiline input and reflects the latest value. |
| AP-004 | P0 | Radio buttons | Select each gender option in turn | Exactly one option in the group is selected at a time. |
| AP-005 | P0 | Checkboxes | Select and deselect each language checkbox | Each checkbox toggles independently; simultaneous selections are retained. |
| AP-006 | P0 | Country dropdown | Select each available country | The selected value matches the chosen option and can be changed. |
| AP-007 | P0 | Country dropdown | Leave the placeholder selected | Placeholder remains selected; assert required-field behavior only if confirmed. |
| AP-008 | P0 | Skills multi-select | Select one and multiple skills | Selected options match the chosen set; no unrequested option is selected. |
| AP-009 | P0 | Skills multi-select | Change or clear the selected skills | Selection can be updated/cleared using supported native control behavior. |
| AP-010 | P0 | Buttons and reset | Activate Normal Button | Button is actionable; verify its intended observable effect after baseline behavior is confirmed. |
| AP-011 | P0 | Buttons and reset | Populate controls, then activate Reset | Resettable controls return to their initial state; document any controls that are intentionally unaffected. |
| AP-012 | P0 | Submit | Submit a valid and an empty form | Verify the confirmed validation, message, or navigation behavior; do not assume a result before baseline confirmation. |
| AP-013 | P0 | JavaScript alerts | Activate Simple Alert | A native alert opens and can be accepted; assert dialog text after confirming its stable value. |
| AP-014 | P0 | JavaScript alerts | Activate Confirm Alert and accept | Confirm dialog opens; acceptance produces the confirmed page state. |
| AP-015 | P0 | JavaScript alerts | Activate Confirm Alert and dismiss | Dismissal produces the confirmed page state and does not leave a dialog blocking the next action. |
| AP-016 | P1 | JavaScript alerts | Activate Prompt Alert and enter text | Prompt opens; entered text is handled as expected; test cancel/empty input after confirming behavior. |
| AP-017 | P1 | File upload | Upload a small valid fixture file | File input reports the selected filename; verify visible result if the page provides one. |
| AP-018 | P1 | File upload | Clear or replace the selected file | Selection updates or clears using supported browser control behavior. |
| AP-019 | P1 | Date and time | Set date, time, and date-time values | Each native input retains a valid value in its respective format. |
| AP-020 | P1 | Date and time | Try empty and boundary-valid values | Empty values and valid boundaries are handled by the native controls; enforce range rules only if defined by the page. |
| AP-021 | P1 | Links and scrolling | Follow “Go to Bottom” | Viewport reaches the bottom target; the bottom-of-page content is visible. |
| AP-022 | P1 | Links and scrolling | Activate “Open Google” | Link target is correct; if it opens a new tab, verify the new page URL without asserting third-party content. |
| AP-023 | P0 | Web table | Read headers and rows | Table exposes ID, Name, and Role columns and the three displayed records; row/cell mapping is correct. |
| AP-024 | P1 | Web table | Locate a row by a cell value | The matching row is identified and its other cell values are associated with that same row. |
| AP-025 | P1 | Iframe | Locate and inspect iframe content | Frame is present and its confirmed content is accessible through the correct frame context. |
| AP-026 | P1 | Hidden element | Check hidden content before/after its reveal action | Hidden content is not interactable while hidden and becomes visible/actionable only after the confirmed reveal action. |
| AP-027 | P0 | Enabled/disabled fields | Enter text in enabled field and inspect disabled field | Enabled field accepts input; disabled field is disabled and cannot be edited. |
| AP-028 | P1 | Image | Check the sample image | Image is present, loads successfully, and has non-empty alternative text where specified. |
| AP-029 | P1 | Mouse hover | Hover over “Hover Over Me” | Hover-specific state or behavior is verified after confirming the intended effect; pointer can leave cleanly. |
| AP-030 | P1 | Auto-suggestions | Type a matching query | Matching suggestions appear; selecting a suggestion updates the search field/result as confirmed. |
| AP-031 | P1 | Auto-suggestions | Type a non-matching or empty query | Suggestions are absent or cleared; no stale suggestion remains. |
| AP-032 | P1 | AJAX | Activate Load Success | Loading completes and the confirmed success content/state is shown. |
| AP-033 | P1 | AJAX | Activate Simulate Network Failure | Failure state is surfaced; test does not mistake it for success or hang indefinitely. |
| AP-034 | P1 | Stale element | Retain the button locator, trigger replacement, then act | Test reacquires the replacement element and verifies its confirmed post-replacement behavior without reusing a stale element handle. |
| AP-035 | P1 | Drag and drop | Drag the source to the target | Drop is accepted and the confirmed target/result state is visible. |
| AP-036 | P1 | Drag and drop | Attempt an invalid/non-target drop | No false success state is reported; assert unchanged state if the widget defines one. |
| AP-037 | P1 | Keyboard actions | Enter text and use supported keyboard keys | The widget responds to the confirmed key/action sequence; focus and resulting value/state are correct. |
| AP-038 | P1 | Nested shadow DOM | Enter text in the nested shadow input | Nested input is located, editable, and retains the supplied value. |
| AP-039 | P1 | Nested shadow DOM | Activate the nested shadow button | Button is actionable and produces the confirmed result. |
| AP-040 | P2 | Leave a Comment | Enter valid comment-form data without submitting | Name, email, website, and comment fields accept values; consent checkbox toggles independently. |
| AP-041 | P2 | Leave a Comment | Check required and malformed field handling | Browser/page validation matches the confirmed contract; do not post data to the live site. |
| AP-042 | P1 | Repeatability | Repeat representative interactions in a fresh context | No state leaks between scenarios; the same initial page state is observed. |
| AP-043 | P2 | Browser compatibility | Run P0/P1 scenarios in supported Chromium, Firefox, and WebKit versions | Supported interactions behave consistently; document native date/time UI differences rather than asserting browser-specific chrome. |

## 7. Example Gherkin

The following illustrates the intended style. Step wording should be shared only when the underlying behavior is genuinely reusable.

```gherkin
@smoke @forms
Feature: Basic form controls
  As an automation learner
  I want to operate the basic controls
  So that I can verify their state through the browser

  Background:
    Given I am on the Automation Practice Page

  Scenario: Select one gender option
    When I select the "Female" gender option
    Then the "Female" gender option should be selected
    And no other gender option should be selected

  Scenario: Select multiple independent languages
    When I select the "Java" checkbox
    And I select the "Python" checkbox
    Then the "Java" checkbox should be selected
    And the "Python" checkbox should be selected
    But the "Selenium" checkbox should not be selected

  Scenario: Reset form controls to their initial state
    When I enter "qa-user" in the username field
    And I select the "India" country
    And I activate the Reset button
    Then the username field should be empty
    And the country should be set to its initial value
```

```gherkin
@dialogs
Feature: JavaScript dialogs
  As an automation learner
  I want to handle browser dialogs
  So that dialog interactions do not block the scenario

  Background:
    Given I am on the Automation Practice Page

  Scenario: Accept a simple alert
    When I activate the Simple Alert button
    Then a JavaScript alert should be displayed
    When I accept the alert
    Then the page should remain usable
```

## 8. Suggested Cucumber project organization

Adapt names to the existing repository conventions if a framework already exists.

```text
features/
  page-availability.feature
  form-controls.feature
  dialogs.feature
  file-and-date-inputs.feature
  navigation-and-table.feature
  advanced-widgets.feature
  comment-form.feature
features/step-definitions/
  page.steps.ts
  forms.steps.ts
  dialogs.steps.ts
  widgets.steps.ts
features/support/
  world.ts
  hooks.ts
  browser.ts
pages/
  automation-practice.page.ts
test-data/
  upload-fixture.txt
```

Suggested tags:

- `@smoke`: AP-001 and selected P0 control checks.
- `@forms`, `@dialogs`, `@navigation`, `@widgets`, `@comment`: feature grouping.
- `@network`: AJAX and network-dependent scenarios.
- `@external`: scenarios that navigate to another origin.
- `@quarantined`: only for a documented, reproducible external instability; do not use to hide a failing first-party assertion.

## 9. Test data and environment

- Use deterministic, non-personal values (for example `qa-user`, `Test address line 1`, and an owned fixture file).
- Never enter real credentials, personal information, or submit real comments.
- Use a fixed valid date/time in tests, with values supported by the current date input range.
- Keep upload fixtures small and committed under the test data directory.
- Record browser name/version, operating system, page URL, and run timestamp with CI results.
- Avoid uncontrolled concurrency against the same browser page or shared remote state.

## 10. Entry, exit, and reporting criteria

### Entry

- Target URL is reachable from the test environment.
- Browser dependencies and test data are available.
- Unspecified behaviors listed in Section 3 have been baselined or their assertions are limited to observable behavior.

### Exit

- All tagged P0 scenarios pass in the primary supported browser.
- P1 scenarios pass or have a reproducible issue documented with evidence and owner.
- No scenario depends on execution order, arbitrary sleeps, or personal/external data.
- Failures include enough diagnostics to distinguish a first-party regression from an external network or browser limitation.

### Reporting

Report scenario ID/name, Cucumber status, browser/version, duration, failure reason, and attached trace/screenshot where applicable. Track flaky/network-dependent tests separately from deterministic functional failures.
