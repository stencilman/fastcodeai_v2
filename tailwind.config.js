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
        'benz': "url('/potfolio/mbenz/img1-2.png')",
        'learning': "url('/potfolio/fedLearning/img1-2.png')",
        'fitness': "url('/potfolio/fitness/img1-2.png')",
        'blogHero': "url('/blogs/hero/img1-2.png')",
        'blog1': "url('/blogs/latest-blog/img1.png')",
        'blog2': "url('/blogs/latest-blog/img3.png')",
        'blog3': "url('/blogs/latest-blog/img4.png')",
        'blog4': "url('/blogs/latest-blog/img2.png')",

      },
      background: {
        cusgrad: "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box"
      },
      fontFamily: {
        aeonik: ["var(--font-aeonik)"],
        bwmss01: ["var(--font-bwmss01)"],
      }
    },
  },
  plugins: [],
};
