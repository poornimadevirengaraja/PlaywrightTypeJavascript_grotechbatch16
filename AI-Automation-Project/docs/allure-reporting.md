# Allure Reporting

Playwright runs write Allure result files to `allure-results` alongside the existing Playwright HTML report.

Run tests and generate the report:

```powershell
npm run test:allure:report
```

Generate a report from the latest results or open an existing report:

```powershell
npm run allure:generate
npm run allure:open
```

The generated `allure-results` and `allure-report` directories are local build outputs and are ignored by Git.