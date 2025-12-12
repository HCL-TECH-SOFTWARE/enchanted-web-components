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
| `storybook` | `npm run storybook` | Runs a storybook instance |
| `testing` | `npm run test-unit` and `npm run test-snapshot` | Run unit and snapshot tests |