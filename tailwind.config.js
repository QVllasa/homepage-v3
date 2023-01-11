/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}", // path to vechaiui
    ],
    theme: {
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            fontFamily: {
                sans: ['"DM Sans"',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    '"Noto Sans"',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',
                ]
            },
        },
    },
    darkMode: "class", // or 'media' or 'class'
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require("@vechaiui/core"),
    ],
}
