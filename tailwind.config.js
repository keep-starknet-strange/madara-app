/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
    backgroundColor:{
      'navbar':"#151515",
      'active':'rgba(230, 38, 0, 0.08)'
    },
    height:{
      'navbar':"64rem"
    },
    width: {
      'navbar':"18.75rem"
    }
    },
    fontSize:{
      'xsmall':'1rem',
      'small':'1.25rem',
      'm-small':'1.5rem',
      'medium': '2rem'
    },
    lineHeight:{
      '7.5':'1.8rem',
      '8':'2.42rem'
    }
  },
  plugins: [],
}
