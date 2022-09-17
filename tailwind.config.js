module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'left-bg-color': 'rgba(87, 84, 236, 0.7)',
        'right-bg-color': 'rgba(43, 43, 43, 0.8)',
        'left-btn-hover-color': 'rgba(87, 84, 236, 1)',
        'right-btn-hover-color': 'rgba(28, 122, 28, 1)'
      },
      backgroundImage: {
        ps: "url('/src/assets/images/ps.jpeg')",
        xbox: "url('/src/assets/images/xbox.jpeg')"
      }
    }
  },
  plugins: []
}
