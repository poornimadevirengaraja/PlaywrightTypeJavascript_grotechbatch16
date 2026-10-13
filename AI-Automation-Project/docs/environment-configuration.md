# Environment Configuration

The Playwright configuration selects `.env.test`, `.env.stage`, or `.env.production` using `TEST_ENV`. When `TEST_ENV` is omitted, it defaults to `test`. Local `.env.*` files are ignored by Git. The test example contains SauceDemo's documented demo credentials; stage and production examples are blank and must be populated with the correct environment values.

Create the local stage or production file from its example, then fill in `BASE_URL` and the username/password pair for each account used by the tests. Required values are checked before tests start, and a missing value reports its variable name.

PowerShell:

```powershell
Copy-Item .env.stage.example .env.stage
$env:TEST_ENV = 'stage'
npm test
Remove-Item Env:TEST_ENV
```

Use `production` and `.env.production` to select production configuration. In Bash, use `TEST_ENV=stage npm test` or `TEST_ENV=production npm test`.

The test environment uses `.env.test` when present and otherwise loads `.env.test.example`, so the documented SauceDemo account can run without local setup.