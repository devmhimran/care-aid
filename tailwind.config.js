module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    careAid: {
      white: '#ffffff',
    }
  },
  screens: {
    'phone' : '450px',
    
    'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
  },
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
    plugins: [require("daisyui")],
}
