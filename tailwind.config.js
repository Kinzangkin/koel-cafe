/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'coffee-dark': '#1A110B',
                'coffee-brown': '#2C1810',
                'coffee-light-brown': '#4A3B32',
                'coffee-beige': '#F5F0E6',
                'coffee-accent': '#C6A87C',
                'coffee-text': '#5A4A42',
            },
            fontFamily: {
                'serif': ['"Playfair Display"', 'serif'],
                'sans': ['"Lato"', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", // Dark beans background placeholder
            }
        },
    },
    plugins: [],
}
