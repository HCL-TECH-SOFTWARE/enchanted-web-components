import '../src/styles/enchanted/atomic-component.scss';
import '../src/styles/enchanted/common.scss';
import type { Preview } from '@storybook/web-components-vite';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // axe-core configuration applied globally to every story
      config: {
        rules: [
          // Add global rule overrides here, e.g.:
          // { id: 'color-contrast', enabled: false },
        ],
      },
      options: {
        // Only run WCAG 2.0 A/AA and WCAG 2.1 AA rules
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21aa'],
        },
      },
      // Run automatically — do not require a manual trigger in the UI
      manual: false,
    },
  },
};

export default preview;
