/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        '480px': '480px',
      },
      borderRadius: {
        '2xl': '20px',
      },
      boxShadow: {
        'md': '0 0 10px #dcdfe6',
      },
      padding: {
        '20/50/20/50': '20px 50px 20px 50px',
      },
    },
    // colors: {
    //   color: {
    //     // primary: '#c4c8d0',
    //     // secondary: '#c4c8d0',
    //   }
    // },
  },
  plugins: [],
};
