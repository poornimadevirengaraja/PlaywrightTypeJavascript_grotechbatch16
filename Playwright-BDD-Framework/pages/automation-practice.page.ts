import type { Dialog, Locator, Page } from "playwright";
import type { DialogResult } from "../features/support/world";

const genderIds: Record<string, string> = {
  Male: "male",
  Female: "female",
  Other: "other"
};

const languageIds: Record<string, string> = {
  Java: "java",
  Python: "python",
  Selenium: "selenium"
};

export class AutomationPracticePage {
  constructor(readonly page: Page) {}

  async open(url: string): Promise<void> {
    await this.page.goto(url, { waitUntil: "domcontentloaded" });
    await this.page
      .getByRole("heading", {
        name: "Automation Practice Page",
        exact: true
      })
      .first()
      .waitFor({ state: "visible" });
  }

  section(name: string): Locator {
    return this.page
      .locator("section")
      .filter({ has: this.page.getByRole("heading", { name, exact: true }) });
  }

  field(id: string): Locator {
    return this.page.locator(`#${id}`);
  }

  gender(name: string): Locator {
    const id = genderIds[name];
    if (!id) {
      throw new Error(`Unknown gender option "${name}".`);
    }
    return this.field(id);
  }

  language(name: string): Locator {
    const id = languageIds[name];
    if (!id) {
      throw new Error(`Unknown language checkbox "${name}".`);
    }
    return this.field(id);
  }

  skills(): Locator {
    return this.field("skills");
  }

  webTable(): Locator {
    return this.page.getByRole("table").first();
  }

  hiddenField(): Locator {
    return this.field("hiddenField");
  }

  hoverTarget(): Locator {
    return this.field("hoverButton");
  }

  suggestions(): Locator {
    return this.page.locator("#suggestions > div");
  }

  suggestionBox(): Locator {
    return this.field("suggestions");
  }

  ajaxResult(): Locator {
    return this.field("loader");
  }

  draggableItem(): Locator {
    return this.field("drag1");
  }

  dropTarget(): Locator {
    return this.page.locator(".drop");
  }

  keyboardInput(): Locator {
    return this.page.locator('input[placeholder="Press any key"]');
  }

  shadowInput(): Locator {
    return this.page
      .locator("#shadow-host")
      .locator("#inner-host")
      .locator("#shadowInput");
  }

  shadowButton(): Locator {
    return this.page
      .locator("#shadow-host")
      .locator("#inner-host")
      .locator("#shadowBtn");
  }

  async handleDialog(
    buttonName: string,
    action: "accept" | "dismiss",
    promptText?: string
  ): Promise<DialogResult> {
    let result: DialogResult | undefined;
    const dialogEvent = this.page.waitForEvent("dialog", {
      timeout: 5_000
    });
    const handler = async (dialog: Dialog): Promise<void> => {
      result = {
        type: dialog.type(),
        message: dialog.message(),
        defaultValue: dialog.defaultValue()
      };
      if (action === "accept") {
        await dialog.accept(promptText);
      } else {
        await dialog.dismiss();
      }
    };
    this.page.once("dialog", handler);

    try {
      await this.page.getByRole("button", { name: buttonName, exact: true }).click();
      await dialogEvent;
    } catch (error) {
      this.page.removeListener("dialog", handler);
      throw error;
    }

    if (!result) {
      throw new Error(`The "${buttonName}" button did not open a dialog.`);
    }
    return result;
  }
}
