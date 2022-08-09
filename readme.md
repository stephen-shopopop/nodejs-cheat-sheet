[![Minimal node version](https://img.shields.io/static/v1?label=node&message=%3E=16.15&logo=node.js&color)](https://nodejs.org/about/releases/)
[![Minimal npm version](https://img.shields.io/static/v1?label=npm&message=%3E=8.5.5&logo=npm&color)](https://github.com/npm/cli/releases)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/stephen-shopopop/nodejs-cheat-sheet/graphs/commit-activity)
[![Linux](https://svgshare.com/i/Zhy.svg)](https://svgshare.com/i/Zhy.svg)
[![macOS](https://svgshare.com/i/ZjP.svg)](https://svgshare.com/i/ZjP.svg)
[![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/)

# Nodejs cheat sheet

## Description

Cheat sheet for nodejs (typescript)

## Installation nodejs via nvm (node version manager)

- [macos/linux](https://github.com/nvm-sh/nvm) or use Makefile command: ```make nvm```
- [windows](https://github.com/coreybutler/nvm-windows)

## Docs

### Summary

----

## Contributing

Run package project:

```shell
npm run compile -w=@stephen-shopopop/hello
npm run start -w=@stephen-shopopop/hello

// or run with ts-node
npm run dev -w=@stephen-shopopop/hello
```

Add package in workspace:

```shell
npm init --scope=@stephen-shopopop -y -w ./packages/hello
```

Add dependencies in package:

```shell
npm install abbrev -w @stephen-shopopop/hello

// uninstall
npm uninstall abbrev -w @stephen-shopopop/hello
```

Run test only in package:

```shell
npm test --packages/hello
```

Extra:

```shell
// Start all projets
npm run start -ws

// Start all projets in dev mode
npm run dev -ws
```

1. npm run test -  Run tests.
2. npm run build - Build each packages
3. npm run lint - Run lint
4. npm run release - Tag release

### Package maintenance

A modern cli tool that keeps your deps fresh

```bash
npx taze -r

// major
npx taze major -r
```
