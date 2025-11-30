// This is the "kitchen" (the tool's code)
// It uses the "core" library from GitHub Actions
const core = require('@actions/core');

try {
  // 1. Get the input (from the "menu" in action.yml)
  const nameToGreet = core.getInput('who-to-greet');
  
  // 2. Run the tool's logic
  console.log(`Hello, ${nameToGreet}!`);
  
  // 3. Get the output
  const time = (new Date()).toTimeString();
  
  // 4. Set the output (for other tools to use)
  core.setOutput("greeting-time", time);
  
} catch (error) {
  // If anything goes wrong, "fail" the action
  core.setFailed(error.message);
}
