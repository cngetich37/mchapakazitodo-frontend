# Contributing to Mchapakazitodo Frontend

👋 Welcome to the mchapakazitodo Frontend! We're excited to have you here and appreciate your interest in contributing. This Contributing Guide will help you get started and ensure a smooth collaboration process.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development environment.
- A basic understanding of React, Tailwind CSS, and Axios.
- Familiarity with Git and GitHub.

### Installation

1. Fork the repository on GitHub.
2. Clone your forked repository locally using the following command:

   ```bash
   git clone https://github.com/cngetich37/mchapakazitodo-frontend.git
   ```

3. Navigate to the project directory:

   ```bash
   cd mchapakazitodo-frontend
   ```

4. Install the project dependencies:

   ```bash
   npm install
   ```

5. Create a `.env.local` file in the project root and set the API URL:

   ```env
   REACT_APP_API_URL=http://your-api-url-here
   ```

6. Start the development server:

   ```bash
   npm start
   ```

You should now have the mchapakazitodo Frontend running locally on your machine.

## Development Workflow

Here's how you can contribute to the project:

1. **Pick an issue**: Browse through the [GitHub Issues](https://github.com/mchapakazitodo/mchapakazitodo-frontend/issues) to find a task or bug to work on. If you have an idea for a new feature or bug fix, create a new issue first to discuss it with the maintainers and the community.

2. **Create a branch**: Create a new branch for your work with a descriptive name. For example:

   ```bash
   git checkout -b feature/add-new-feature
   ```

3. **Make your changes**: Write your code and follow the project's coding style and guidelines.

4. **Commit your changes**: Please write meaningful commit messages and follow the [conventional commit format](https://www.conventionalcommits.org/). This helps maintain a clean commit history.

5. **Push your changes**: Push your branch to your forked repository on GitHub:

   ```bash
   git push origin feature/add-new-feature
   ```

6. **Create a Pull Request (PR)**: Go to the [main project repository](https://github.com/mchapakazitodo/mchapakazitodo-frontend) and create a Pull Request from your branch. Fill in the PR template with details about your changes and what issues it addresses.

7. **Code Review**: The maintainers and the community will review your PR. Make sure to address any feedback and keep the discussion constructive.

8. **Merge**: Once your PR is approved, a maintainer will merge it into the main branch.

## Testing

Make sure to write tests for your code and ensure that all existing tests pass before submitting a Pull Request. You can run tests using:

```bash
npm test
```

## Submitting Changes

Please follow these guidelines when submitting changes:

- Make sure your code is well-documented and follows the project's coding standards.
- Squash your commits into a single coherent commit with a clear message.
- Update the README or documentation if your changes affect it.
- Include a reference to the relevant issue or PR in your commit message.

## Code of Conduct

Please review our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing. We want everyone involved in this project to feel welcome, respected, and safe.

## License

By contributing to this project, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

Thank you for contributing to mchapakazitodo Frontend! Your help is greatly appreciated, and together, we can build something awesome! If you have any questions or need assistance, feel free to reach out to us through the GitHub Issues or our community channels. Happy coding! 😄🚀