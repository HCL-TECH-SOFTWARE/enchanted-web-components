# @hcl-software/enchanted-web-components

## Usage

```sh
npm install @hcl-software/enchanted-web-components
```

```typescript
import '@hcl-software/enchanted-web-components/dist/components/atomic-component/enchanted-button';

...

render() {
  return html`
    <enchanted-button
      @click=${debounce(this.handleClick, DEFAULT_CLICK_DEBOUNCE_WAIT)}
      ?disabled="${this.disabled || nothing}"
      imgurl="${svgSearchUrl}"
      buttontext="${this.buttontext || getMessage(this.locale, 'header.enduser.search')}"
      exportparts="${Object.values(BUTTON_PARTS).join(',')}"
    >
    </enchanted-button>
  `;
}

```

## Development

### NPM targets

We provide the following utility development commands:

| task | command | description |
|--|--|--|
| `install` | `npm ci` | Initial installation of the project dependencies. Run this to get started. |
| `clean` | `rm -rf node_modules` and `rm -rf dist` | Removes all node_modules etc |
| `build lib` | `npm run build` and `npm run build-complete` | Builds the package |
| `lint` | `npm run lint` | Run the linting task |
| `styling` | `npm run compile-enchanted-css` and `npm run watch-enchanted-css` | Runs the styling tasks |
| `build storybook` | `npm run build-storybook` | Builds a storybook |
| `storybook` | `npm run storybook`  or scoped one `VITE_COMPONENT_PREFIX=prefix- npm run storybook` | Runs a storybook instance |
| `testing` | `npm run test-unit` or scoped one `VITE_COMPONENT_PREFIX=prefix- npm run test-unit` | Run unit tests |

## Accessibility (a11y) Testing

This library enforces WCAG 2.1 AA compliance through automated accessibility audits on every component variation, powered by **[`@storybook/addon-a11y`](https://storybook.js.org/docs/writing-tests/accessibility-testing)** (which uses `axe-core` under the hood) and **[Chromatic](https://www.chromatic.com/docs/accessibility-testing/)**.

### Running a11y checks locally

1. Start Storybook: `npm run storybook`
2. Open any story in the browser (http://localhost:6006)
3. Click the **Accessibility** tab in the addons panel at the bottom
4. The panel lists all violations, incomplete checks, and passes with direct links to the affected DOM elements

Rules are scoped to WCAG 2.0 A/AA and WCAG 2.1 AA (`wcag2a`, `wcag2aa`, `wcag21aa` axe tags). Checks run automatically — no manual trigger required.

### Chromatic a11y reports on PRs

Every pull request triggers a Chromatic build (`.github/workflows/pr-chromatic.yaml`) that:
1. Renders all stories that changed in the PR (`onlyChanged: true`)
2. Runs `axe-core` against the rendered DOM
3. Reports violations grouped by **impact level**: *Critical*, *Serious*, *Moderate*, *Minor*
4. Blocks the PR check if **Critical** or **Serious** violations are found

To view the full a11y report for a PR:
1. Click **Details** on the `chromatic` PR status check
2. In the Chromatic UI, open the build and select a story
3. Click the **Accessibility** tab to see all violations with element selectors and remediation guidance

### Resolving violations

**Fix in the component** (preferred):
- Add missing ARIA attributes (`aria-label`, `role`, `aria-describedby`, etc.)
- Ensure sufficient colour contrast (minimum 4.5:1 for normal text, 3:1 for large text)
- Provide keyboard navigation support for interactive elements

**Add a scoped story-level override** (only when the violation is a known, accepted exception):
```typescript
// in any .stories.ts
export const Default: StoryObj = {
  parameters: {
    a11y: {
      config: {
        rules: [
          // Must include a comment justifying the exception
          { id: 'color-contrast', enabled: false }, // Disabled: inverseColor variant requires dark background to achieve contrast
        ],
      },
    },
  },
};
```

**Do not** disable rules globally in `.storybook/preview.ts` without team review.

### Severity levels

| Impact | PR behaviour |
|--------|-------------|
| Critical | ❌ Blocks PR |
| Serious | ❌ Blocks PR |
| Moderate | ⚠️ Warning only |
| Minor | ⚠️ Warning only |

Threshold configuration is managed in **Chromatic → Project Settings → Accessibility**.