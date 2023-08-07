/** @type { import('@storybook/react').Preview } */
import { ThemeProvider } from 'styled-components';
import '../src/styles/index.css';
import theme from '../src/theme';
import '../src/i18n';

export default {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ background: '#071323', padding: "200px" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
