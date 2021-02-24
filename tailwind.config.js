const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: '1rem',   
        },
        extend: {
            fontFamily:{
                'genSenRounded': ['GenSenRounded', 'sans-serif']
            },
            colors: {
                primary: '#de051b',
            },
            translate: {
             '-1/7': '-14.2857143%',
             '-2/7': '-28.5714286%',
             '-3/7': '-42.8571429%',
             '-4/7': '-57.1428571%',
             '-5/7': '-71.4285714%',
             '-6/7': '-85.7142857%',
             '1/7': '14.2857143%',
             '2/7': '28.5714286%',
             '3/7': '42.8571429%',
             '4/7': '57.1428571%',
             '5/7': '71.4285714%',
             '6/7': '85.7142857%',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
