/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
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
                color: "hsl(var(--muted))",
                textDecoration: "underline"
              }
            },
            h1: {
              color: "hsl(var(--foreground))"
            },
            h2: {
              color: "hsl(var(--foreground))"
            },
            h3: {
              color: "hsl(var(--foreground))"
            },
            h4: {
              color: "hsl(var(--foreground))"
            },
            h5: {
              color: "hsl(var(--foreground))"
            },
            h6: {
              color: "hsl(var(--foreground))"
            },
            code: {
              color: "hsl(var(--background))",
              backgroundColor: "hsl(var(--muted))",
              fontFamily: "var(--font-geist-mono)",
              padding: "0.15em 0.3em",
              borderRadius: "0.5em"
            },
            pre: {
              fontFamily: "var(--font-geist-mono)"
            },
            blockquote: {
              color: "hsl(var(--foreground))"
            },
            kbd: {
              color: "hsl(var(--background))",
              backgroundColor: "hsl(var(--muted))"
            },
            th: {
              color: "hsl(var(--foreground))"
            },
            strong: {
              color: "hsl(var(--foreground))"
            }
          }
        }
      })
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
