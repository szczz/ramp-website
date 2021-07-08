module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.vue'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                teal: 'rgba(241,249,255,1)',
                'teal-dark': 'rgba(211,236,255,1)',
                'light-blue': 'rgba(188,224,253,1)',
                'light-blue-dark': 'rgba(159,211,253,1)',
                orange: '#ff9f43',
                'dark-blue': '#001a49',
                green: '#a8dea8'
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: '#000000',
                        h1: {
                            color: '#000000'
                        },
                        h2: {
                            color: '#000000'
                        },
                        h3: {
                            color: '#000000'
                        },
                        a: {
                            color: '#000000'
                        }
                    }
                }
            })
        }
    },
    variants: {
        extend: {}
    },
    plugins: [require('@tailwindcss/typography')]
};
