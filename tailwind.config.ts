const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'baby-pink': '#fef7f8',
      },
    },
  },
  plugins: [] as const,
};

export default config;
