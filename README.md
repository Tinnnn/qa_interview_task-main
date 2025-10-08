# QA Interview Task
Welcome to the take-home task for the Quality Assurance Engineer role! This exercise is designed to give us a glimpse into your analytical skills, test case design approach, and automation capabilities.We believe in providing a clear and practical task that reflects the type of work you'll be doing with us, including both manual testing strategies and automated testing implementation.

## The Task
Your assignment consists of three key components:

1. Test Case Design: Identify and document no more than 10 test cases for the most critical user experience paths on https://www.saucedemo.com/
2. Test Automation: Convert 3 - 5 of these test cases into automated Cypress tests
3. Quality Analysis: Identify any bugs and areas of improvement you discover during your testing

We are particularly interested in your rationale for selecting these specific test paths, your automation implementation approach, and your insights into the website's overall quality and user experience.

## Deliverables 
Please prepare and submit the following materials at least 1 day prior to the Task Interview:

1. A comprehensive document (PDF or text file) containing:
    - Your documented test cases
    - Identified bugs and areas of improvement for the target website
2. Your Cypress automation test repository:
    - Either as an attached zip file, or
    - A link to access the repository (e.g., GitHub, GitLab)

Ensure all components are included in your submission for review.

## Task Interview
Our follow-up interview will be a collaborative session where we will implement additional documented test cases into the repository as automated tests. We'll also discuss the bugs and areas of improvement you identified during your testing. 

A link to book a slot for this follow-up session will be provided separately in an email.

We're looking forward to reviewing your work!

---
# Project Setup
This project contains E2E tests for [https://www.saucedemo.com/](https://www.saucedemo.com/) using Cypress and TypeScript.

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

Install dependencies:
```bash
npm install
```

## Running Tests

### Interactive Mode (Cypress Test Runner)
To open Cypress in interactive mode where you can see tests running in a browser:
```bash
npm run cypress:open
```
Then select E2E Testing and choose a browser to run the tests.

### Headless Mode (Command Line)
To run all tests in headless mode:
```bash
npm test
```
or
```bash
npm run cypress:run
```

### Run Specific Test File
To run a specific test file in headless mode:
```bash
npx cypress run --spec "cypress/e2e/login.spec.ts"
```

## Project Structure

```
qa_interview_task/
├── cypress/
│   ├── e2e/
│   │   └── login.spec.ts       # Login page test
│   └── fixtures/               # Test data files
├── cypress.config.ts           # Cypress configuration
├bash
├── package.json               # Project dependencies and scripts
└── README.md                  # This file
```

## Configuration

The Cypress configuration is located in `cypress.config.ts` with the following key settings:
- Base URL: https://www.saucedemo.com
- Viewport: 1280x720
- Default timeouts: 10 seconds
- Screenshots on failure: Enabled
- Video recording: Disabled

## Writing New Tests

To add new tests:
1. Create a new `.spec.ts` file in the `cypress/e2e/` directory
2. Follow the existing test structure using TypeScript
3. Use Cypress commands and assertions to interact with and verify page elements

Example:
```typescript
describe('Test Suite Name', () => {
  it('should do something', () => {
    cy.visit('/');
    cy.get('selector').should('be.visible');
  });
});
```