module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: { 
          bg: '#0F0F12', 
          card: '#1C1C1E', 
          border: '#2C2C2E', 
          input: '#2C2C2E' 
        },
        primary: { 
          DEFAULT: '#6A5AE0', 
          hover: '#7B6EE9', 
          active: '#4B3DB2' 
        },
        text: { 
          primary: '#FFFFFF', 
          secondary: '#F2F2F7', 
          muted: '#E5E5EA' 
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'monospace']
      }
    }
  },
  plugins: []
}
