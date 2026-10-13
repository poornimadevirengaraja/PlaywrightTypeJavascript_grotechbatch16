const { spawnSync } = require("node:child_process");

const browsers = ["chromium", "firefox", "webkit"];
let failed = false;

for (const browser of browsers) {
  console.log(`\nRunning Cucumber scenarios in ${browser}...`);
  const result = spawnSync(
    process.execPath,
    ["node_modules/@cucumber/cucumber/bin/cucumber.js"],
    {
      stdio: "inherit",
      env: { ...process.env, BROWSER: browser }
    }
  );

  if (result.error) {
    console.error(`Unable to start Cucumber for ${browser}:`, result.error);
    failed = true;
    continue;
  }
  if (result.status !== 0) {
    failed = true;
  }
}

process.exitCode = failed ? 1 : 0;
