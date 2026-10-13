import assert from "node:assert/strict";
import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import type { Locator } from "playwright";
import { AutomationPracticePage } from "../../pages/automation-practice.page";
import { PlaywrightWorld } from "../support/world";

function practicePage(world: PlaywrightWorld): AutomationPracticePage {
  return new AutomationPracticePage(world.page);
}

async function selectedSkillLabels(locator: Locator): Promise<string[]> {
  return locator.locator("option:checked").allTextContents();
}

Given("I open the automation practice page", async function (this: PlaywrightWorld) {
  await practicePage(this).open(this.baseUrl);
});

Then(
  "the page title should contain {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.ok((await this.page.title()).includes(expected));
  }
);

Then(
  "I should see the {string} section",
  async function (this: PlaywrightWorld, heading: string) {
    await this.page
      .getByRole("heading", { name: heading, exact: true })
      .waitFor({ state: "visible" });
  }
);

When(
  "I enter {string} in the username field",
  async function (this: PlaywrightWorld, value: string) {
    await practicePage(this).field("username").fill(value);
  }
);

When(
  "I enter {string} in the password field",
  async function (this: PlaywrightWorld, value: string) {
    await practicePage(this).field("password").fill(value);
  }
);

Then(
  "the username field should contain {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(await practicePage(this).field("username").inputValue(), expected);
  }
);

Then(
  "the password field should contain {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(await practicePage(this).field("password").inputValue(), expected);
  }
);

Then("the password field should be masked", async function (this: PlaywrightWorld) {
  assert.equal(await practicePage(this).field("password").getAttribute("type"), "password");
});

When(
  "I enter the following address:",
  async function (this: PlaywrightWorld, value: string) {
    await practicePage(this).field("address").fill(value);
  }
);

Then(
  "the address field should contain:",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(await practicePage(this).field("address").inputValue(), expected);
  }
);

When("I clear the address field", async function (this: PlaywrightWorld) {
  await practicePage(this).field("address").clear();
});

Then("the address field should be empty", async function (this: PlaywrightWorld) {
  assert.equal(await practicePage(this).field("address").inputValue(), "");
});

When(
  "I select the {string} gender option",
  async function (this: PlaywrightWorld, gender: string) {
    await practicePage(this).gender(gender).check();
  }
);

Then(
  "the {string} gender option should be selected",
  async function (this: PlaywrightWorld, gender: string) {
    assert.equal(await practicePage(this).gender(gender).isChecked(), true);
  }
);

Then(
  "exactly one gender option should be selected",
  async function (this: PlaywrightWorld) {
    const ids = ["male", "female", "other"];
    let checkedCount = 0;
    for (const id of ids) {
      if (await practicePage(this).field(id).isChecked()) {
        checkedCount += 1;
      }
    }
    assert.equal(checkedCount, 1);
  }
);

When(
  "I select the {string} language checkbox",
  async function (this: PlaywrightWorld, language: string) {
    await practicePage(this).language(language).check();
  }
);

When(
  "I deselect the {string} language checkbox",
  async function (this: PlaywrightWorld, language: string) {
    await practicePage(this).language(language).uncheck();
  }
);

Then(
  "the {string} language checkbox should be selected",
  async function (this: PlaywrightWorld, language: string) {
    assert.equal(await practicePage(this).language(language).isChecked(), true);
  }
);

Then(
  "the {string} language checkbox should not be selected",
  async function (this: PlaywrightWorld, language: string) {
    assert.equal(await practicePage(this).language(language).isChecked(), false);
  }
);

When(
  "I select the {string} country",
  async function (this: PlaywrightWorld, country: string) {
    await practicePage(this).field("country").selectOption({ label: country });
  }
);

Then(
  "the selected country should be {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(
      (await practicePage(this).field("country").locator("option:checked").textContent())?.trim(),
      expected
    );
  }
);

When(
  "I select the {string} and {string} skills",
  async function (this: PlaywrightWorld, first: string, second: string) {
    await practicePage(this)
      .skills()
      .selectOption([{ label: first }, { label: second }]);
  }
);

When(
  "I select the {string} skill",
  async function (this: PlaywrightWorld, skill: string) {
    const locator = practicePage(this).skills();
    const selected = await locator.locator("option:checked").evaluateAll((options) =>
      options.map((option) => (option as HTMLOptionElement).value)
    );
    const option = locator.getByRole("option", { name: skill, exact: true });
    const value = await option.getAttribute("value");
    await locator.selectOption([...selected, value ?? skill]);
  }
);

When("I clear the selected skills", async function (this: PlaywrightWorld) {
  await practicePage(this).skills().selectOption([]);
});

Then(
  "the selected skills should be",
  async function (this: PlaywrightWorld, table: DataTable) {
    const expected = table.hashes().map((row) => row.skill).sort();
    assert.deepEqual(
      (await selectedSkillLabels(practicePage(this).skills())).sort(),
      expected
    );
  }
);

Then("no skills should be selected", async function (this: PlaywrightWorld) {
  assert.deepEqual(await selectedSkillLabels(practicePage(this).skills()), []);
});

When(
  "I click the {string} button",
  async function (this: PlaywrightWorld, name: string) {
    await this.page.getByRole("button", { name, exact: true }).click();
  }
);

Then("the practice page should remain open", async function (this: PlaywrightWorld) {
  assert.ok(this.page.url().startsWith(this.baseUrl));
  await this.page
    .getByRole("heading", {
      name: "Automation Practice Page",
      exact: true
    })
    .first()
    .waitFor({ state: "visible" });
});

Then(
  "the username field should be empty",
  async function (this: PlaywrightWorld) {
    assert.equal(await practicePage(this).field("username").inputValue(), "");
  }
);

Then(
  "the web table should have headers",
  async function (this: PlaywrightWorld, table: DataTable) {
    const expected = table.raw().slice(1).map((row) => row[0]);
    const actual = await practicePage(this)
      .webTable()
      .locator("tr")
      .first()
      .locator("th, td")
      .allTextContents();
    assert.deepEqual(
      actual.map((header) => header.trim()),
      expected
    );
  }
);

Then(
  "the web table should contain the rows",
  async function (this: PlaywrightWorld, table: DataTable) {
    const rows = table.hashes();
    const tableRows = practicePage(this).webTable().locator("tr");
    for (const expected of rows) {
      const row = tableRows.filter({ hasText: expected.Name });
      assert.equal(await row.count(), 1, `Expected one table row for ${expected.Name}`);
      const cells = (await row.locator("th, td").allTextContents()).map((cell) =>
        cell.trim()
      );
      assert.deepEqual(cells, [expected.ID, expected.Name, expected.Role]);
    }
  }
);

Then(
  "the row containing {string} should also contain {string} and {string}",
  async function (
    this: PlaywrightWorld,
    name: string,
    id: string,
    role: string
  ) {
    const row = practicePage(this)
      .webTable()
      .getByRole("row")
      .filter({ hasText: name });
    assert.equal(await row.count(), 1);
    const cells = (await row.locator("th, td").allTextContents()).map((cell) =>
      cell.trim()
    );
    assert.ok(cells.includes(id));
    assert.ok(cells.includes(name));
    assert.ok(cells.includes(role));
  }
);

When(
  "I enter {string} in the enabled field",
  async function (this: PlaywrightWorld, value: string) {
    await practicePage(this).field("enabledInput").fill(value);
  }
);

Then(
  "the enabled field should contain {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(await practicePage(this).field("enabledInput").inputValue(), expected);
  }
);

Then("the disabled field should remain disabled", async function (this: PlaywrightWorld) {
  assert.equal(await practicePage(this).field("disabledInput").isDisabled(), true);
});

Then(
  "the disabled field should contain {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(await practicePage(this).field("disabledInput").inputValue(), expected);
  }
);

Then("the sample image should be loaded", async function (this: PlaywrightWorld) {
  const image = practicePage(this).section("Image").locator("img").first();
  await image.waitFor({ state: "visible" });
  assert.equal(
    await image.evaluate((element) => (element as HTMLImageElement).naturalWidth > 0),
    true
  );
});

Then(
  "the sample image should have alternative text",
  async function (this: PlaywrightWorld) {
    const alt = await practicePage(this)
      .section("Image")
      .locator("img")
      .first()
      .getAttribute("alt");
    assert.ok(alt?.trim(), "Expected the sample image to have non-empty alt text");
  }
);

When(
  "I open a fresh browser context",
  async function (this: PlaywrightWorld) {
    const previousContext = this.context;
    this.context = await this.browser.newContext({ acceptDownloads: true });
    this.context.setDefaultTimeout(10_000);
    await this.context.tracing.start({
      screenshots: true,
      snapshots: true,
      sources: true
    });
    this.page = await this.context.newPage();
    await previousContext.close();
    await practicePage(this).open(this.baseUrl);
  }
);

When("I accept the simple alert", async function (this: PlaywrightWorld) {
  this.dialogResult = await practicePage(this).handleDialog("Simple Alert", "accept");
});

When("I accept the confirmation dialog", async function (this: PlaywrightWorld) {
  this.dialogResult = await practicePage(this).handleDialog("Confirm Alert", "accept");
});

When("I dismiss the confirmation dialog", async function (this: PlaywrightWorld) {
  this.dialogResult = await practicePage(this).handleDialog("Confirm Alert", "dismiss");
});

When(
  "I enter {string} in the prompt dialog",
  async function (this: PlaywrightWorld, value: string) {
    this.dialogResult = await practicePage(this).handleDialog(
      "Prompt Alert",
      "accept",
      value
    );
  }
);

When(
  "I dismiss the prompt dialog without entering a value",
  async function (this: PlaywrightWorld) {
    this.dialogResult = await practicePage(this).handleDialog(
      "Prompt Alert",
      "dismiss"
    );
  }
);

Then(
  "the dialog type should be {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(this.dialogResult?.type, expected);
  }
);

Then(
  "the dialog message should be {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(this.dialogResult?.message, expected);
  }
);

When("I upload the fixture file", async function (this: PlaywrightWorld) {
  await practicePage(this)
    .field("fileUpload")
    .setInputFiles("test-data/upload-fixture.txt");
});

When(
  "I replace the upload with a second fixture file",
  async function (this: PlaywrightWorld) {
    await practicePage(this)
      .field("fileUpload")
      .setInputFiles("test-data/upload-fixture-second.txt");
  }
);

When("I clear the uploaded file", async function (this: PlaywrightWorld) {
  await practicePage(this).field("fileUpload").setInputFiles([]);
});

Then(
  "the file input should contain the fixture file",
  async function (this: PlaywrightWorld) {
    assert.equal(
      await practicePage(this).field("fileUpload").evaluate((element) => {
        return (element as HTMLInputElement).files?.[0]?.name;
      }),
      "upload-fixture.txt"
    );
  }
);

Then(
  "the file input should contain the second fixture file",
  async function (this: PlaywrightWorld) {
    assert.equal(
      await practicePage(this).field("fileUpload").evaluate((element) => {
        return (element as HTMLInputElement).files?.[0]?.name;
      }),
      "upload-fixture-second.txt"
    );
  }
);

Then("the file input should be empty", async function (this: PlaywrightWorld) {
  assert.equal(
    await practicePage(this).field("fileUpload").evaluate((element) => {
      return (element as HTMLInputElement).files?.length;
    }),
    0
  );
});

When(
  "I set the date to {string}",
  async function (this: PlaywrightWorld, value: string) {
    await practicePage(this).field("datePicker").fill(value);
  }
);

When(
  "I set the time to {string}",
  async function (this: PlaywrightWorld, value: string) {
    await practicePage(this).field("timePicker").fill(value);
  }
);

When(
  "I set the date-time to {string}",
  async function (this: PlaywrightWorld, value: string) {
    await practicePage(this).field("dateTimePicker").fill(value);
  }
);

When("I clear the date and time fields", async function (this: PlaywrightWorld) {
  await practicePage(this).field("datePicker").clear();
  await practicePage(this).field("timePicker").clear();
  await practicePage(this).field("dateTimePicker").clear();
});

Then(
  "the date field should contain {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(await practicePage(this).field("datePicker").inputValue(), expected);
  }
);

Then(
  "the time field should contain {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(await practicePage(this).field("timePicker").inputValue(), expected);
  }
);

Then(
  "the date-time field should contain {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(
      await practicePage(this).field("dateTimePicker").inputValue(),
      expected
    );
  }
);

Then("the date field should be empty", async function (this: PlaywrightWorld) {
  assert.equal(await practicePage(this).field("datePicker").inputValue(), "");
});

Then("the time field should be empty", async function (this: PlaywrightWorld) {
  assert.equal(await practicePage(this).field("timePicker").inputValue(), "");
});

Then("the date-time field should be empty", async function (this: PlaywrightWorld) {
  assert.equal(await practicePage(this).field("dateTimePicker").inputValue(), "");
});

When("I click the Go to Bottom link", async function (this: PlaywrightWorld) {
  await this.page.getByRole("link", { name: "Go to Bottom", exact: true }).click();
});

Then("the bottom-of-page message should be visible", async function (this: PlaywrightWorld) {
  await this.page
    .getByText("This is the bottom of the page for scrolling practice.", {
      exact: true
    })
    .waitFor({ state: "visible" });
});

Then(
  "the Open Google link should point to {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(
      await this.page
        .getByRole("link", { name: "Open Google", exact: true })
        .getAttribute("href"),
      expected
    );
  }
);

When("I scroll the sample iframe into view", async function (this: PlaywrightWorld) {
  await practicePage(this).field("sampleIframe").scrollIntoViewIfNeeded();
});

Then("the sample iframe should be present", async function (this: PlaywrightWorld) {
  const frame = practicePage(this).field("sampleIframe");
  await frame.waitFor({ state: "visible" });
  assert.equal(await frame.count(), 1);
  await this.page.frameLocator("#sampleIframe").locator("body").waitFor();
});

Then("the hidden field should not be visible", async function (this: PlaywrightWorld) {
  assert.equal(await practicePage(this).hiddenField().isVisible(), false);
});

Then(
  "the hidden field should not be enabled for interaction",
  async function (this: PlaywrightWorld) {
    const hiddenField = practicePage(this).hiddenField();
    assert.equal(await hiddenField.isVisible(), false);
    assert.equal(
      await hiddenField.evaluate((element) => getComputedStyle(element).display),
      "none"
    );
  }
);

When("I hover over the hover target", async function (this: PlaywrightWorld) {
  await practicePage(this).hoverTarget().hover();
});

Then(
  "the hover target title should be {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(await practicePage(this).hoverTarget().getAttribute("title"), expected);
  }
);

When(
  "I search suggestions for {string}",
  async function (this: PlaywrightWorld, query: string) {
    await practicePage(this).field("searchBox").fill(query);
    await practicePage(this).field("searchBox").press("End");
  }
);

Then(
  "a {string} suggestion should be displayed",
  async function (this: PlaywrightWorld, suggestion: string) {
    await practicePage(this)
      .suggestions()
      .filter({ hasText: suggestion })
      .first()
      .waitFor({ state: "visible" });
  }
);

When(
  "I select the {string} suggestion",
  async function (this: PlaywrightWorld, suggestion: string) {
    await practicePage(this)
      .suggestions()
      .filter({ hasText: suggestion })
      .click();
  }
);

Then(
  "the search field should contain {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(await practicePage(this).field("searchBox").inputValue(), expected);
  }
);

Then("no suggestions should be displayed", async function (this: PlaywrightWorld) {
  const suggestions = practicePage(this).suggestions();
  const total = await suggestions.count();
  let visibleCount = 0;
  for (let index = 0; index < total; index += 1) {
    if (await suggestions.nth(index).isVisible()) {
      visibleCount += 1;
    }
  }
  assert.equal(visibleCount, 0);
});

When("I load the AJAX success result", async function (this: PlaywrightWorld) {
  await this.page.getByRole("button", { name: "Load Success", exact: true }).click();
});

When("I simulate an AJAX network failure", async function (this: PlaywrightWorld) {
  await this.page
    .getByRole("button", { name: "Simulate Network Failure", exact: true })
    .click();
});

Then(
  "the AJAX result should be {string}",
  async function (this: PlaywrightWorld, expected: string) {
    await practicePage(this)
      .ajaxResult()
      .getByText(expected, { exact: true })
      .waitFor({ state: "visible", timeout: 8_000 });
  }
);

When("I click the button that replaces itself", async function (this: PlaywrightWorld) {
  await practicePage(this).field("staleBtn").click();
});

Then("the replacement button should be displayed", async function (this: PlaywrightWorld) {
  await this.page
    .getByRole("button", { name: "New Button (Old is Stale)", exact: true })
    .waitFor({ state: "visible" });
});

When("I click the replacement button", async function (this: PlaywrightWorld) {
  await this.page
    .getByRole("button", { name: "New Button (Old is Stale)", exact: true })
    .click();
});

Then(
  "the replacement button should remain displayed",
  async function (this: PlaywrightWorld) {
    await this.page
      .getByRole("button", { name: "New Button (Old is Stale)", exact: true })
      .waitFor({ state: "visible" });
  }
);

When(
  "I drag the draggable item to the drop target",
  async function (this: PlaywrightWorld) {
    await practicePage(this).draggableItem().dragTo(practicePage(this).dropTarget());
  }
);

Then("the drop target should contain the draggable item", async function (this: PlaywrightWorld) {
  assert.equal(
    await practicePage(this).dropTarget().locator("#drag1").count(),
    1
  );
});

When(
  "I drag the draggable item outside the drop target",
  async function (this: PlaywrightWorld) {
    await practicePage(this)
      .draggableItem()
      .dragTo(this.page.getByRole("heading", { name: "Keyboard Actions" }));
  }
);

Then(
  "the drop target should not contain the draggable item",
  async function (this: PlaywrightWorld) {
    assert.equal(
      await practicePage(this).dropTarget().locator("#drag1").count(),
      0
    );
  }
);

When(
  "I press {string} in the keyboard input",
  async function (this: PlaywrightWorld, key: string) {
    await practicePage(this).keyboardInput().press(key);
  }
);

Then(
  "the keyboard result should be {string}",
  async function (this: PlaywrightWorld, key: string) {
    assert.equal(
      (await this.page.locator("#keyOutput").innerText()).trim(),
      `Key Pressed: ${key}`
    );
  }
);

When(
  "I enter {string} in the nested shadow input",
  async function (this: PlaywrightWorld, value: string) {
    await practicePage(this).shadowInput().fill(value);
  }
);

Then(
  "the nested shadow input should contain {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(await practicePage(this).shadowInput().inputValue(), expected);
  }
);

When("I click the nested shadow button", async function (this: PlaywrightWorld) {
  await practicePage(this).shadowButton().click();
});

Then(
  "the nested shadow button should remain displayed",
  async function (this: PlaywrightWorld) {
    assert.equal(await practicePage(this).shadowButton().isVisible(), true);
  }
);

When("I enter the sample comment form values", async function (this: PlaywrightWorld) {
  const page = practicePage(this);
  await page.field("comment").fill("Automation test comment");
  await page.field("author").fill("QA Example");
  await page.field("email").fill("qa@example.test");
  await page.field("url").fill("https://example.test");
});

Then(
  "the comment field should contain {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(await practicePage(this).field("comment").inputValue(), expected);
  }
);

Then(
  "the comment name should contain {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(await practicePage(this).field("author").inputValue(), expected);
  }
);

Then(
  "the comment email should contain {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(await practicePage(this).field("email").inputValue(), expected);
  }
);

Then(
  "the comment website should contain {string}",
  async function (this: PlaywrightWorld, expected: string) {
    assert.equal(await practicePage(this).field("url").inputValue(), expected);
  }
);

When("I toggle the comment consent checkbox", async function (this: PlaywrightWorld) {
  await practicePage(this).field("wp-comment-cookies-consent").click();
});

Then(
  "the comment consent checkbox should be selected",
  async function (this: PlaywrightWorld) {
    assert.equal(
      await practicePage(this).field("wp-comment-cookies-consent").isChecked(),
      true
    );
  }
);

Then(
  "the comment consent checkbox should not be selected",
  async function (this: PlaywrightWorld) {
    assert.equal(
      await practicePage(this).field("wp-comment-cookies-consent").isChecked(),
      false
    );
  }
);

Then("the empty comment form should be invalid", async function (this: PlaywrightWorld) {
  const form = this.page.locator("#commentform");
  assert.equal(await form.evaluate((element) => (element as HTMLFormElement).checkValidity()), false);
});

When(
  "I enter malformed comment form values",
  async function (this: PlaywrightWorld) {
    const page = practicePage(this);
    await page.field("comment").fill("Automation test comment");
    await page.field("author").fill("QA Example");
    await page.field("email").fill("not-an-email");
  }
);

Then("the comment form should be invalid", async function (this: PlaywrightWorld) {
  assert.equal(
    await this.page
      .locator("#commentform")
      .evaluate((element) => (element as HTMLFormElement).checkValidity()),
    false
  );
});

Then("the comment email field should be invalid", async function (this: PlaywrightWorld) {
  assert.equal(
    await practicePage(this).field("email").evaluate((element) => {
      return (element as HTMLInputElement).validity.typeMismatch;
    }),
    true
  );
});
