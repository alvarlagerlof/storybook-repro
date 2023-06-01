/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  // stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  stories: [
    {
      directory: "../../test1/**",
      titlePrefix: "test1",
      files: "*.@(mdx|stories.@(mdx|tsx|ts|jsx|js))",
    },
    {
      directory: "../../test2/**",
      titlePrefix: "test2",
      files: "*.@(mdx|stories.@(mdx|tsx|ts|jsx|js))",
    },
    {
      directory: "../stories/**",
      titlePrefix: "storybook",
      files: "*.@(mdx|stories.@(mdx|tsx|ts|jsx|js))",
    },
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
