# GitHub Copilot Instructions for Enchanted Web Components

## Project Overview
This is the Enchanted Web Components library - a UI library providing Lit-based web components developed by HCL Software. The components follow the Enchanted design system and are built with TypeScript.

**Package**: `@hcl-software/enchanted-web-components` (v1.2.1)
**Repository**: https://github.com/HCL-TECH-SOFTWARE/enchanted-web-components
**License**: Apache-2.0
**Node Version**: >=20.X

> **Note on Version Numbers**: The versions listed in this document (package version, Lit, TypeScript, etc.) are maintained manually and may become outdated. **Always verify current versions in `package.json`** before making assumptions. When updating major dependencies, please also update the version numbers in this file to keep the documentation accurate.

## Key Technologies
- **Framework**: Lit (Web Components) v3.3.0
- **Language**: TypeScript 5.8.3
- **Styling**: SCSS/SASS v1.93.2
- **Testing**: WebdriverIO v9.20.0 with Mocha framework
- **Storybook**: v9.1.16 for component documentation and development
- **Build**: TypeScript compiler (tsc) with ES2022 target
- **Icons**: @hcl-software/enchanted-icons-web-component
- **Date Handling**: dayjs v1.11.13
- **Utilities**: lodash v4.17.21

## Code Style & Conventions

### Component Structure
- All components extend `EnchantedAcBaseElement` base class
- Use `@customElement` decorator for component registration
- Component names follow the pattern `enchanted-[component-name]`
- File names match component names (e.g., `enchanted-button.ts`)
- Components are located in `src/components/ac/` directory

### TypeScript Guidelines
- Use decorators: `@customElement`, `@property`, `@state`, `@query`
- Define explicit types for all properties and methods
- Use `TemplateResult` from `lit` for HTML templates
- Import types from `src/types/` directory when available

### File Headers
All source files must include the Apache License 2.0 header with the current year:
```typescript
/* ======================================================================== *
 * Copyright YYYY HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */
```

**Important**: Replace `YYYY` with the current year when creating new files. GitHub Copilot will automatically use the current year when suggesting this header.

### Import Organization
Organize imports in this order:
1. External imports (from npm packages)
2. Component imports (from local components)
3. Helper/utility imports (types, constants, utilities)

### Properties
- Use `@property()` for public properties with attributes
- Use `@state()` for internal reactive state
- Use `@query()` for querying shadow DOM elements
- Set `reflect: true` for properties that should reflect to attributes
- Define property types explicitly

### Naming Conventions
- Use camelCase for properties and methods
- Use SCREAMING_SNAKE_CASE for constants
- Component names use kebab-case with `enchanted-` prefix
- CSS classes follow BEM-like patterns defined in types

### Localization
- Use `getCurrentDirection()` for RTL/LTR support
- Import locale constants from `src/components/constants.ts`
- Support internationalization where text is displayed

### Styling
- Component styles are in `src/styles/enchanted/`
- Use `exportparts` attribute for CSS parts exposure
- Define part names in `src/types/cssClassEnums.ts`
- Run `npm run compile-enchanted-css` after SCSS changes

## Commit Message Guidelines

### Format
Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Types
- **feat**: New feature or component
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring without changing functionality
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **build**: Build system or dependency changes
- **ci**: CI/CD configuration changes
- **chore**: Other changes that don't modify src or test files

### Scope
Use component names or affected areas:
- Component names: `enchanted-button`, `enchanted-input`, `enchanted-datepicker`
- Areas: `storybook`, `tests`, `build`, `styles`, `types`

### Examples
- `feat(enchanted-button): add ripple effect on click`
- `fix(enchanted-datepicker): correct timezone handling in Safari`
- `docs(readme): update installation instructions`
- `test(enchanted-input): add unit tests for validation`
- `refactor(enchanted-menu): simplify event handling logic`
- `style(enchanted-chip): format code according to ESLint rules`

### Best Practices
- Use present tense ("add feature" not "added feature")
- Use imperative mood ("move cursor to..." not "moves cursor to...")
- Don't capitalize first letter of subject
- No period at the end of subject line
- Subject line max 72 characters
- Reference issue numbers in footer when applicable (e.g., `Fixes #123`)

## Storybook
- Story files are in `src/stories/`
- File naming: `enchanted-[component-name].stories.ts`
- Use Storybook for component development and documentation
- Run with `npm run storybook`

## Build Process
1. Compile SCSS: `npm run compile-enchanted-css`
2. Build TypeScript: `npm run build`
3. Prepare for publish: `npm run prepare-for-publish`

## Available Components
The library includes 30+ web components:
- **Layout**: `enchanted-header`, `enchanted-header-layout`, `enchanted-search-center-layout`, `enchanted-panel`
- **Navigation**: `enchanted-breadcrumbs`, `enchanted-breadcrumbs-item`, `enchanted-menu`, `enchanted-menu-item`
- **Input**: `enchanted-button`, `enchanted-icon-button`, `enchanted-toggle-button`, `enchanted-switch`, `enchanted-textfield`, `enchanted-select`, `enchanted-multiple-select-chip`, `enchanted-datepicker`
- **Display**: `enchanted-avatar`, `enchanted-badge`, `enchanted-chip`, `enchanted-tooltip`, `enchanted-preview`, `enchanted-svg-icon`, `enchanted-item-type-avatar`
- **Feedback**: `enchanted-alert`, `enchanted-snackbar`, `enchanted-dialog`, `enchanted-circular-progress`, `enchanted-popover`
- **Data**: `enchanted-list`, `enchanted-list-item`, `enchanted-data-grid`, `enchanted-data-grid-generic`, `enchanted-table-pagination`
- **Container**: `enchanted-accordion`, `enchanted-accordion-summary`
- **Utilities**: `enchanted-anchor`, `enchanted-theme-inspector`

## Development Workflow
1. **Initial Setup**: `npm ci` to install dependencies
2. **Development**: 
   - Run `npm run storybook` to start development environment (port 6006)
   - Use `npm run watch-enchanted-css` for live SCSS compilation
3. **Before Committing**:
   - Run `npm run lint` to check for issues
   - Use `npm run lint-fix` to auto-fix linting issues
   - Run `npm run test-unit` to ensure unit tests pass
   - Run `npm run test-snapshot` for visual regression tests
4. **Building**:
   - Run `npm run build` (compiles SCSS + TypeScript)
   - Run `npm run prepare-for-publish` to prepare distribution package
5. **Pull Requests**:
   - Ensure GitHub issue exists for bugs
   - Discuss enhancements via feature request issue first
   - Update documentation and CHANGELOG.md
   - Fork and submit PR for review

## CI/CD & Automation

### GitHub Actions Workflows
The project uses GitHub Actions for automated testing and deployment:

- **PR Build & Lint** (`.github/workflows/pr-build-lint.yaml`):
  - Triggers on pull requests and manual dispatch
  - Runs `npm ci`, `npm run build`, and `npm run lint`
  - Ensures code compiles and follows linting standards
  
- **PR Test** (`.github/workflows/pr-test.yaml`):
  - Triggers on pull requests and manual dispatch
  - Runs `npm ci` and `npm run test` (unit tests)
  - Validates component functionality
  
- **Publish** (`.github/workflows/publish.yaml`):
  - Automated package publishing workflow
  - Publishes to npm registry when releases are created
  
- **GitHub Pages** (`.github/workflows/gh-pages.yaml`):
  - Builds and deploys Storybook documentation
  - Makes component demos publicly accessible

### Pre-commit Checklist
Before committing code, ensure:
- [ ] Code builds without errors: `npm run build`
- [ ] Linting passes: `npm run lint` (auto-fix with `npm run lint-fix`)
- [ ] Unit tests pass: `npm run test-unit`
- [ ] Snapshot tests pass (if UI changes): `npm run test-snapshot`
- [ ] SCSS compiles: `npm run compile-enchanted-css`
- [ ] Storybook stories updated for new features
- [ ] CHANGELOG.md updated with changes

### Release Process
1. Update version in `package.json` following semantic versioning
2. Update CHANGELOG.md with release notes
3. Create and merge PR with version changes
4. Create GitHub release/tag to trigger publish workflow
5. Verify package published to npm: `@hcl-software/enchanted-web-components`

## Common Patterns

### Component Property Definition
```typescript
@property({ type: Boolean, reflect: true })
disabled = false;

@property()
buttontext: string | undefined;
```

### Render Method
```typescript
render() {
  return html`
    <button
      ?disabled=${this.disabled}
      @click=${this.handleClick}
    >
      ${this.buttontext}
    </button>
  `;
}
```

### Event Handling
- Use `@click`, `@change`, etc. for event binding
- Implement handler methods as class methods
- Consider debouncing for user interactions

## Important Paths
- Components: `src/components/ac/`
- Types: `src/types/`
- Utilities: `src/utils/`
- Styles: `src/styles/enchanted/`
- Stories: `src/stories/`
- Tests: `src/_tests_/`

## Testing Guidelines
- **Unit Tests**: Located in `src/_tests_/unit/`
  - Use WebdriverIO with @testing-library/webdriverio
  - Run with `npm run test-unit`
  - Tests use Mocha framework
- **Snapshot Tests**: Located in `src/_tests_/snapshot/`
  - Visual regression tests using @wdio/visual-service
  - Run with `npm run test-snapshot`
  - Generates visual diffs for component changes
- **Test Structure**:
  - Test helpers in `src/_tests_/helpers.ts`
  - Constants in `src/_tests_/constants.ts`
  - Fixtures in `src/_tests_/unit/fixture/`
  - Test utilities in `src/_tests_/unit/utils/`

## Storybook Development
- **Stories Location**: `src/stories/*.stories.ts`
- **File Naming**: `enchanted-[component-name].stories.ts`
- **Story Structure**:
  ```typescript
  import type { Meta, StoryObj } from '@storybook/web-components-vite';
  import { html } from 'lit';
  import '../components/ac/enchanted-[component-name]';
  
  const meta: Meta = {
    title: 'Category/enchanted-[component-name]',
    component: 'enchanted-[component-name]',
    tags: ['autodocs'],
    argTypes: { /* ... */ }
  };
  ```
- **Commands**:
  - Development: `npm run storybook` (http://localhost:6006)
  - Build static: `npm run build-storybook`
  - Output directory: `storybook-static/`

## ESLint Configuration
- Uses ESLint 9.x with flat config format (`eslint.config.mjs`)
- **Plugins**:
  - `@typescript-eslint` - TypeScript-specific linting
  - `eslint-plugin-lit` - Lit web components linting
  - `eslint-plugin-wc` - Web Components standards
  - `eslint-plugin-storybook` - Storybook best practices
  - `eslint-plugin-why` - Code quality insights
- **Custom Rules**: Located in `src/eslint/custom-rules/`
  - `unsupported-property-name-rule.js` - Validates property naming conventions
- **Linting Scope**: All TypeScript files in `src/`
- **Strict Mode**: Enabled with TypeScript strict checks

## Build & Distribution
- **Build Process**:
  1. Compile SCSS: `sass src/styles/enchanted/enchanted.scss:enchanted.css`
  2. Compile TypeScript: `tsc` (outputs to `dist/`)
  3. Prepare package: Copies package.json, README.md, LICENSE.txt, enchanted.css, styles, and eslint to `dist/`
  4. Cleanup: Removes `_tests_` and `stories` from distribution
- **TypeScript Config**:
  - Target: ES2022
  - Module: ESNext
  - Decorators: Experimental decorators enabled
  - Strict mode: Enabled
  - Declaration files: Generated
- **Output Structure**: 
  - Main: `dist/index.js`
  - Types: `dist/index.d.ts`

## Usage Examples

### Using as a Consumer
When using the published package in your application:

```typescript
// Installation
npm install @hcl-software/enchanted-web-components

// Import component from the published package
import '@hcl-software/enchanted-web-components/dist/components/ac/enchanted-button';

// Use in Lit template
render() {
  return html`
    <enchanted-button
      @click=${debounce(this.handleClick, 300)}
      ?disabled="${this.disabled || nothing}"
      imgurl="${svgSearchUrl}"
      buttontext="${this.buttontext}"
      exportparts="${Object.values(BUTTON_PARTS).join(',')}"
    >
    </enchanted-button>
  `;
}
```

### Developing Components
When working on the library source code:

```typescript
// Import from local source files
import './src/components/ac/enchanted-button';
// or
import '../components/ac/enchanted-button';

// Import types and utilities from source
import { BUTTON_PARTS } from './src/types/cssClassEnums';
import { debounce } from 'lodash';

// Develop and test in Storybook
// Run: npm run storybook
```

## Contributor Roles
Open source contributions welcome in multiple areas:
- **Code Development**: New components and features
- **Documentation**: API docs, tutorials, guides
- **Testing**: Unit tests, visual regression tests
- **Automation**: Build pipelines, CI/CD improvements
- **Evangelism**: Blog posts, presentations, examples

## Best Practices
- Follow accessibility guidelines (ARIA attributes, keyboard navigation)
- Support both LTR and RTL directions using `getCurrentDirection()`
- Use shadow DOM with proper part exports via `exportparts`
- Keep components modular and reusable
- Document public APIs and properties with JSDoc comments
- Handle edge cases and error states gracefully
- Maintain backward compatibility across releases
- Test in multiple browsers and devices
- Follow the Enchanted design system specifications
- Use semantic versioning for releases

## Performance Guidelines
- **Minimize Re-renders**: Use `@state()` only when necessary; avoid for large objects
- **Event Handlers**: Debounce user input handlers to reduce processing overhead
  ```typescript
  import { debounce } from 'lodash';
  
  private debouncedHandler = debounce((value: string) => {
    // Handle input
  }, 300);
  ```
- **Lazy Loading**: Import components dynamically when not needed immediately
- **Shadow DOM**: Leverage shadow DOM for style encapsulation and performance
- **Efficient Selectors**: Use `@query()` decorator instead of repeated `querySelector` calls
- **Avoid Heavy Computations**: Move complex calculations outside render method or use memoization
- **List Rendering**: Use `repeat()` directive from Lit for efficient list updates
- **CSS Performance**: Keep selectors simple, avoid deep nesting in SCSS

## Key Contributors
- Hanjo Hagemeier (Author)
- Angelo Rick Asoy
- Ruby Ann Matias
- Felix Müller
- Mridul Shrivastava

## Common Issues & Troubleshooting

### Build Errors
- **SCSS compilation fails**: Ensure `sass` is installed correctly. Run `npm ci` to reinstall dependencies
- **TypeScript errors**: Check `tsconfig.json` settings and ensure all type declarations are up to date
- **Module resolution errors**: Verify import paths are correct and use absolute paths from `src/`

### Storybook Issues
- **Components not loading**: Ensure component is imported in story file: `import '../components/ac/enchanted-[component-name]'`
- **Storybook won't start**: Check port 6006 is not in use, or specify different port: `storybook dev -p 6007`
- **Stories not updating**: Clear Storybook cache: `rm -rf node_modules/.cache/storybook`

### Test Failures
- **WebdriverIO tests timing out**: Increase timeout in `wdio.*.conf.ts` files
- **Snapshot tests failing**: Review visual diffs, update baselines if changes are intentional
- **Unit tests failing after changes**: Ensure component properties and events are correctly mocked

### CSS/Styling Issues
- **Styles not applying**: Run `npm run compile-enchanted-css` after SCSS changes
- **CSS parts not exposing**: Check `exportparts` attribute is correctly defined
- **RTL/LTR issues**: Verify `getCurrentDirection()` is used for directional styles

### Development Environment
- **Node version mismatch**: Ensure Node.js >=20.X is installed
- **Dependencies out of sync**: Run `npm ci` instead of `npm install` for clean install
- **Git conflicts in package-lock.json**: Resolve by running `npm install` after merging

## Resources
- **Package**: `@hcl-software/enchanted-web-components`
- **Repository**: https://github.com/HCL-TECH-SOFTWARE/enchanted-web-components
- **Issues**: https://github.com/HCL-TECH-SOFTWARE/enchanted-web-components/issues
- **License**: Apache-2.0
- **Storybook**: Build locally with `npm run storybook`

