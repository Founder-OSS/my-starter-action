# my-starter-action
A simple GitHub Action that greets a user and outputs the time. A starter tool for any workflow.
# My Starter Action

![GitHub Action](https://img.shields.io/badge/GitHub_Action-v1.0-blue?style=for-the-badge&logo=githubactions)

A simple, lightweight GitHub Action that greets a specified user and outputs the timestamp of the greeting. This is a starter template for building more complex custom actions.

## 🚀 How to Use

You can use this action in any of your CI/CD workflows.

In your workflow `.yml` file, add this as a step:

```yaml
name: 'Example Workflow'
on: [push]

jobs:
  greet-job:
    runs-on: ubuntu-latest
    steps:
      # Step 1: Check out your repository's code
      - name: 'Checkout code'
        uses: actions/checkout@v4

      # Step 2: Run the Starter Action
      - name: 'Run my Starter Action'
        id: greet  # Give it an ID to access outputs
        uses: YOUR-USERNAME/my-starter-action@v1 # <-- IMPORTANT
        with:
          who-to-greet: 'Mona Lisa'

      # Step 3: Use the output from the action
      - name: 'Check the output'
        run: |
          echo "The greeting was at: ${{ steps.greet.outputs.greeting-time }}"
