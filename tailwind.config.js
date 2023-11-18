module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'left-bg-color': 'rgba(87, 84, 236, 0.7)',
        'right-bg-color': 'rgba(43, 43, 43, 0.8)',
        'left-btn-hover-color': 'rgba(87, 84, 236, 1)',
        'right-btn-hover-color': 'rgba(28, 122, 28, 1)',
        steelblue: '#4682B4',
        'black-400': 'rgba(0, 0, 0, 0.4)',
        lightblue: '#ADD8E6',
        'sound-box-card-bg-color': 'rgba(90, 24, 154, 0.6)',
        primary: {
          2: 'rgba(8, 16, 58, 0.02)',
          5: 'rgba(8, 16, 58, 0.05)',
          10: 'rgba(8, 16, 58, 0.1)',
          15: 'rgba(8, 16, 58, 0.15)',
          20: 'rgba(8, 16, 58, 0.2)',
          30: 'rgba(8, 16, 58, 0.3)',
          40: 'rgba(8, 16, 58, 0.4)',
          50: 'rgba(8, 16, 58, 0.5)',
          60: 'rgba(8, 16, 58, 0.6)',
          70: 'rgba(8, 16, 58, 0.7)',
          80: 'rgba(8, 16, 58, 0.8)',
          90: 'rgba(8, 16, 58, 0.9)',
          100: 'rgba(8, 16, 58, 1)'
        }
      },
      backgroundImage: {
        ps: "url('/src/assets/images/ps.png')",
        xbox: "url('/src/assets/images/xbox.png')"
      },
      fontFamily: {
        muli: ['Muli', 'sans-serif']
      }
    }
  },
  plugins: []
}
