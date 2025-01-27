<!-- markdownlint-disable MD014 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD029 -->

<div align="center">

<h1 style="font-size: 2.5rem; font-weight: bold;">Profile Module Template</h1>

  <p>
    <strong>A customizable profile module for easy integration with module federation</strong>
  </p>

</div>

<details>
  <summary>Table of Contents</summary>

- [Getting Started](#getting-started)
  - [Cloning the Repository](#cloning-the-repository)
  - [Installing Dependencies](#installing-dependencies)
  - [Running the Development Server](#running-the-development-server)
  - [Customizing Your Profile](#customizing-your-profile)
- [Module Federation Configuration](#module-federation-configuration)
- [Theming and Styling](#theming-and-styling)
- [API Integration](#api-integration)
- [Building for Production](#building-for-production)
- [Running Tests](#running-tests)
- [Contributing](#contributing)

</details>

## Getting Started

### Cloning the Repository

To get started with your own profile module, clone this repository:

```bash
git clone https://github.com/your-username/profile-module-template.git
cd profile-module-template
```

### Installing Dependencies

This project uses Bun as the package manager. Install the dependencies with:

```bash
bun install
```

### Running the Development Server

Start the development server on `localhost:5170`:

```bash
bun run dev
```

The development server is configured with hot module replacement for a smooth development experience.

### Customizing Your Profile

1. Open `src/components/Profile.tsx` to modify the main profile component.
2. Update styles in `src/index.css` or use Tailwind classes directly in your components.
3. Adjust the theme in `tailwind.config.js` to match your desired look and feel.

## TypeScript Support

This project is set up with TypeScript for improved type safety and developer experience:

- The main Profile component is written in TypeScript (`src/components/Profile.tsx`).
- Type definitions for the profile data structure are included in the component file.
- The `rsbuild.config.ts` file is configured to work with TypeScript files.

## Module Federation Configuration

This template is set up for module federation. The configuration can be found in `rsbuild.config.ts`. Key points:

- The profile module is exposed as `"./Profile"`.
- The exposed component is now a TypeScript file: `./src/components/Profile.tsx`.
- Shared dependencies are configured to avoid version conflicts.

## Theming and Styling

- This project uses Tailwind CSS for styling.
- Customize the theme in `tailwind.config.js`.
- Use CSS variables for easy theming across your application.

## API Integration

To integrate with different data sources:

1. Create an API service in `src/services/api.ts`.
2. Use React hooks to fetch and manage data in your components.
3. Ensure to define proper TypeScript interfaces for your API responses.

## Building for Production

To create a production build:

```bash
bun run build
```

This will generate optimized files in the `dist` directory.

## Running Tests

Execute the test suite with:

```bash
bun run test
```

For more details on testing, see the [testing guide](./playwright-tests/README.md).

## Contributing

We welcome contributions! Please read our [contribution guide](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

<div align="right">
<a href="https://nearbuilders.org" target="_blank">
<img
  src="https://builders.mypinata.cloud/ipfs/QmWt1Nm47rypXFEamgeuadkvZendaUvAkcgJ3vtYf1rBFj"
  alt="Near Builders"
  height="40"
/>
</a>
</div>
