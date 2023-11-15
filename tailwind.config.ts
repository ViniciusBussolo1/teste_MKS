import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'shadow-carrinho': '-5px 0px 6px 0px rgba(0, 0, 0, 0.13)',
        'shadow-item-carrinho': '-2px 2px 10px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
export default config
