module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        spacing: {
            '-36': '-36px',
            '-32': '-32px',
            '-30': '-30px',
            '-2': '-2px',
            0: '0px',
            1: '1px',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
            6: '6px',
            7: '7px',
            8: '8px',
            10: '10px',
            12: '12px',
            14: '14px',
            15: '15px',
            16: '16px',
            18: '18px',
            20: '20px',
            24: '24px',
            25: '25px',
            26: '26px',
            28: '28px',
            30: '30px',
            32: '32px',
            36: '36px',
            38: '38px',
            40: '40px',
            44: '44px',
            48: '48px',
            56: '56px',
            64: '64px',
            75: '75px',
            80: '80px',
            100: '100px',
            116: '116px',
            180: '180px',
            192: '192px',
            256: '256px',
            275: '275px',
            350: '350px',
            500: '500px'
        },
        extend: {
            colors: {
                teal: 'rgba(241,249,255,1)',
                'light-blue': 'rgba(188,224,253,1)'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
