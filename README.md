# Get TestCafe summary (Github action)

Read TestCafe summary from file created by [JSON reporter](https://www.npmjs.com/package/testcafe-reporter-json),

## Inputs

### `path`

Path to JSON file (relative to working directory)

Example: `./report.json`

## Outputs

### `summary`

Example: `✅ Passed 2/2 tests` or `⛔️ Failed 1/2 tests`;
