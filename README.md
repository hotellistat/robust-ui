<p>
  <a href="https://hotellistat.com/#gh-light-mode-only" target="_blank">
    <img src="assets/logo.png" width="200">
  </a>

  <a href="https://hotellistat.com/#gh-dark-mode-only" target="_blank">
    <img src="assets/logo-dark.png" width="200">
  </a>
</p>

# Robust-UI

[![npm (scoped)](https://img.shields.io/npm/v/@hotellistat/robust-ui)](https://www.npmjs.com/package/@hotellistat/robust-ui)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@hotellistat/robust-ui)](https://bundlephobia.com/result?p=@hotellistat/robust-ui@latest)
[![NPM](https://img.shields.io/npm/l/@hotellistat/robust-ui)](https://github.com/hotellistat/robust-ui/blob/main/LICENSE)

A lightweight Vue 3 component library.

When you are starting a new prototype you want to be able to develop features fast. We created this component library as a way for us to build products quickly without having to deal with complicated packages and a huge bundle sizes.

## Usage

First install the library using your prefered package manager

```bash
yarn add @hotellistat/robust-ui
```

then you can import the available components like so

```vue
import { HsButton } from '@hotellistat/robust-ui'
```

## Development

To develop new components for robust-ui, you should create new feature branches
that hold the code of a specific components. As soon as you are finished with working on, and
testing the components, you can create a PR to merge it into the main branch.

## Publishing a new version

To publish a new version you will need to follow these simple steps:

1. Create a PR to merge your feature branch into the main branch
2. As soon as the PR was merged, a automated pipeline takes care of bumping the
   next patch version and publishing the package to npm

## Available commands

Here is a list of all available npm commands.

**Starting the dev environment**
We use Vue Press to hold our component documentation and examples

```bash
yarn dev
```

**Building the documentation**

```bash
yarn build
```

**Serving the documentation**

```bash
yarn serve
```

**Building the library bundles**

```bash
yarn build:library
```

**Analyzing bundle sizes with [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer)**

```bash
yarn analyze
```

**Lint all files**

```bash
yarn lint
```

**Format all files**

```bash
yarn format
```
