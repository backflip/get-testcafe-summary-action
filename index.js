const core = require("@actions/core");

try {
  const path = core.getInput("path");
  const { total, passed } = require(path);
  const summary =
    total === passed
      ? `✅ Passed ${passed}/${total} tests`
      : `⛔️ Failed ${total - passed}/${total} tests`;

  console.log(summary);

  core.setOutput("summary", summary);
} catch (error) {
  core.setFailed(error.message);
}
