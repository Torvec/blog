/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        accent: "hsl(var(--accent))"
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: "hsl(var(--foreground))",
            a: {
              color: "hsl(var(--accent))",
              textDecoration: "none",
              "&:hover": {
                color: "hsl(var(--accent))",
                textDecoration: "underline"
              }
            },
            h1: {
              color: "hsl(var(--accent))"
            },
            h2: {
              color: "hsl(var(--accent))"
            },
            h3: {
              color: "hsl(var(--accent))"
            },
            h4: {
              color: "hsl(var(--accent))"
            },
            h5: {
              color: "hsl(var(--accent))"
            },
            h6: {
              color: "hsl(var(--accent))"
            },
            code: {
              color: "hsl(var(--accent))",
              fontFamily: "var(--font-geist-mono)"
            },
            pre: {
              fontFamily: "var(--font-geist-mono)"
            }
          }
        }
      })
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
