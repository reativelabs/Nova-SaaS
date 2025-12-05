/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0056b3',
                    hover: '#004494',
                },
                secondary: '#e3f2fd',
                accent: '#0288d1',
                text: {
                    main: '#1a1a1a',
                    muted: '#666666',
                },
                bg: {
                    white: '#ffffff',
                    light: '#f8f9fa',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
            },
            spacing: {
                xs: '0.5rem',
                sm: '1rem',
                md: '2rem',
                lg: '4rem',
                xl: '8rem',
            },
            borderRadius: {
                sm: '4px',
                md: '8px',
                lg: '16px',
                full: '9999px',
            },
            boxShadow: {
                sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            }
        },
    },
    plugins: [],
}
