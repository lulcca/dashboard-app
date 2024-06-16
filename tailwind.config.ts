import type { Config } from 'tailwindcss';

export default <Partial<Config>> {
  content: [],
  plugins: [],
  theme: {
    extend: {
      colors: {
        accent: '#26778C',
        primary: '#005F78',
      },
    },
  },
};
