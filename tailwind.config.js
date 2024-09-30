// tailwind.config.js

module.exports = {
  // **1. Content Paths**
  // Specify the paths to all of your template files so Tailwind can tree-shake unused styles in production
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths if your files are located elsewhere
    './public/index.html',
  ],

  // **2. Dark Mode Configuration**
  // Enable dark mode support. You can toggle dark mode using a class (preferred) or media queries.
  darkMode: 'class', // Options: 'media' or 'class'

  // **3. Theme Customization**
  // Extend Tailwind's default theme to include custom colors, fonts, spacing, etc.
  theme: {
    extend: {
      // **a. Custom Colors**
      colors: {
        primary: {
          light: '#5a67d8', // Light shade of primary color
          DEFAULT: '#4c51bf', // Default primary color
          dark: '#434190', // Dark shade of primary color
        },
        secondary: {
          light: '#68d391', // Light shade of secondary color
          DEFAULT: '#48bb78', // Default secondary color
          dark: '#38a169', // Dark shade of secondary color
        },
        // Add more custom colors as needed
      },

      // **b. Custom Spacing**
      spacing: {
        128: '32rem',
        144: '36rem',
        // Add more custom spacing values as needed
      },

      // **c. Custom Fonts**
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom sans-serif font
        serif: ['Merriweather', 'serif'], // Custom serif font
        mono: ['Fira Code', 'monospace'], // Custom monospace font
      },

      // **d. Custom Breakpoints**
      screens: {
        xs: '475px', // Extra small screens
        // Add more custom breakpoints as needed
      },

      // **e. Custom Border Radius**
      borderRadius: {
        '4xl': '2rem',
        // Add more custom border radius values as needed
      },

      // **f. Custom Box Shadows**
      boxShadow: {
        'outline-indigo': '0 0 0 3px rgba(76, 81, 191, 0.5)',
        // Add more custom box-shadow values as needed
      },

      // **g. Custom Animations**
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        // Add more custom animations as needed
      },

      // **h. Container Configuration**
      container: {
        center: true, // Centers the container
        padding: '1rem', // Adds horizontal padding
        screens: {
          xs: '475px', // Applies the xs breakpoint to the container
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },

  // **4. Plugins**
  // Integrate Tailwind CSS plugins to extend functionality and streamline styling.
  plugins: [
    require('@tailwindcss/forms'), // Re-added as per best practices for form styling
    require('@tailwindcss/typography'), // Re-added for enhanced typography control
    require('@tailwindcss/aspect-ratio'), // Re-added to control aspect ratios
    // Add more plugins as needed without causing issues
  ],
};
