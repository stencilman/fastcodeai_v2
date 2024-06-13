/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

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
        'benz': "url('/potfolio/mbenz/img1.webp')",
        "vrups": "url('/our-work//vrups.jpg')",
        'learning': "url('/potfolio/fedLearning/img1-2.png')",
        'fitness': "url('/potfolio/fitness/img1-2.png')",
        "dataQuery": "url('/our-work/sqlwizard-logo1.png')",
        "lonelyAssist": "url('/our-work/lonely_llm.webp')",
        "fashion": "url('/our-work/fashion.png')",
        "bankMont": "url('/our-work/bankInsMo.png')",
        "rag": "url('/our-work/rag_weave.jpg')",
        "dermo": "url('/our-work/dermos.jpeg')",
        "automto": "url('/our-work/automto.png')",
        "gesrec": "url('/our-work/gesrec.png')",
        "bnk": "url('/our-work/bnk.png')",


        'blogHero': "url('/blogs/hero/img1-2.png')",
        'teamHero': "url('/team/img1-2.png')",


        'blog1': "url('/blogs/latest-blog/img1.png')",
        'blog2': "url('/blogs/latest-blog/img3.png')",
        'blog3': "url('/blogs/latest-blog/img4.png')",
        'blog4': "url('/blogs/latest-blog/img2.png')",
        'whyaiHero': "url('/blogs/why-ai/hero/img1-2.png')",
        'oilGasHero': "url('/blogs/oil-gas/oilGas-Hero.webp')",

        'arjun': "url('/members/arjun.png')",
        'dhaval': "url('/members/dhaval1.png')",
        'prabal': "url('/members/Prabal1.jpg')",
        'abdul': "url('/members/abdul1.png')",
        'parth': "url('/members/parth.png')",
        'eshwar': "url('/members/eshwar.png')",
        'naren': "url('/members/naren.png')",
        'sanjay': "url('/members/sanjay.png')",
        'shreyas': "url('/members/shreyas1.jpg')",
        'yash': "url('/members/yash.jpg')",
        'gautham': "url('/members/gautham.png')",
        'sughosh': "url('/members/sughosh.png')",
        'tirth': "url('/members/tirth.png')",
        'rishabh': "url('/members/rishabh2.png')",
        'darshan': "url('/members/darshan1.png')",
        'jadhav': "url('/members/jadhav.png')",



      },
      background: {
        cusgrad: "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",

      },
      fontFamily: {
        aeonik: ["var(--font-aeonik)"],
        bwmss01: ["var(--font-bwmss01)"],
      }
    },
  },
  plugins: [Myclass],
};
