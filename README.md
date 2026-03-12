# QAPracticeORisk

A lightweight Playwright test automation sandbox for QA practice.

## 🔧 Project Overview

- **Framework**: Playwright (TypeScript)
- **Purpose**: end-to-end login flow validation
- **Location**: `tests/login.spec.ts`, `pages/LoginPO.ts`
- **Test data**: `Data/loginData.json`

## 🚀 Prerequisites

- Node.js 18+ (or compatible)
- npm (bundled with Node)

## 🛠️ Install dependencies

```bash
npm install
```

## ▶️ Run tests

```bash
npm test
```

(or)

```bash
npm run test:ci
```

## 📝 Generate report

```bash
npm run report:html
```

## 📁 Project structure

- `pages/` - Page object model layer
- `tests/` - Playwright spec files
- `Data/` - JSON test data
- `playwright.config.ts` - Playwright settings

## ⭐ Notes

- Edit `Data/loginData.json` to change credentials
- Update `tests/login.spec.ts` and `pages/LoginPO.ts` to add scenarios
