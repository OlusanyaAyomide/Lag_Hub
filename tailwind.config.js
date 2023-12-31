/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily:{
        inter:['Inter', 'sans-serif']
      },
      colors: {
        page:"var(--page)",
        light:"var(--light)",
        main:"var(--main)",
        shade:"var(--shade)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--background)",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "hsl(var(--popover-foreground)",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      }, 
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage:{
        heroD:"url(/hero1.jpg)",
        heroL:"url(/hero2.jpg)",
        "gradient-linearL":"linear-gradient(to bottom, #1977F2, white 140px, white 100%)",
        "gradient-linearD":"linear-gradient(to bottom, #1977F2, black 140px, black 100%)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        customBounce:{
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0)"
          },
          "40%": {
            transform: "translateY(-10px)"
          },
          "60%": {
            transform: "translateY(-5px)"
          },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        customspinner:{
          "0%":{
            "transform": "rotate(0deg)"              
          },
          "100%":{
            "transform": "rotate(360deg)"              
          },
        },
        spinleft:{
          "0%":{
            "transform": "rotate(0deg)"              
          },
          "100%":{
            "transform": "rotate(-360deg)"              
          },
        },
        fadedown:{
          "100%":{
            transform:"translateY(20px)",
            opacity:"0",
          }
        },
      leftspinner:{
        "0%":{
          "transform": "rotate(0deg)"              
        },
        "100%":{
          "transform": "rotate(-360deg)"              
        },
      },
      loader:{
        "0%, 100%":{
          transform: "translateX(-150px)"
        },
        "50%":{
          transform: "translateX(150px)"
        },
      }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spinner:"customspinner 20s linear infinite",
        rightspinner:"customspinner 60s linear infinite",
        leftspinner:"leftspinner 60s linear infinite",
        slowbounce:"customBounce 15s linear infinite",
        loader:"loader 2.8s linear infinite",
        herospin2:"leftspinner 20s linear infinite",
        arrowdown:"fadedown 1s linear infinite"
      },
      screens:{
        xs:"340px",
        ...defaultTheme.screens,
        sm:"580px",
        md:"810px",
        lg:"1060px",
        xl:"1200px",
      },
      
    },
  },
  plugins: [require("tailwindcss-animate")],
}