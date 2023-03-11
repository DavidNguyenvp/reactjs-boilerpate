declare module '@mui/material/styles' {
    interface TypographyVariants {
        text72Medium90: React.CSSProperties
        text60Medium72: React.CSSProperties
        text48Medium60: React.CSSProperties
        text36Medium44: React.CSSProperties
        text30Medium38: React.CSSProperties
        text24Medium32: React.CSSProperties
        text24Regular32: React.CSSProperties
        text20Medium30: React.CSSProperties
        text20Regular30: React.CSSProperties
        text18Medium28: React.CSSProperties
        text18Regular28: React.CSSProperties
        text16Medium21: React.CSSProperties
        text16Regular21: React.CSSProperties
        text14Medium20: React.CSSProperties
        text14Regular20: React.CSSProperties
        text12Medium16: React.CSSProperties
        text12Regular16: React.CSSProperties
        text11Medium16: React.CSSProperties
        text11Regular16: React.CSSProperties
        text10Medium16: React.CSSProperties
        text10Regular16: React.CSSProperties
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        text72Medium90?: React.CSSProperties
        text60Medium72?: React.CSSProperties
        text48Medium60?: React.CSSProperties
        text36Medium44?: React.CSSProperties
        text30Medium38?: React.CSSProperties
        text24Medium32?: React.CSSProperties
        text24Regular32?: React.CSSProperties
        text20Medium30?: React.CSSProperties
        text20Regular30?: React.CSSProperties
        text18Medium28?: React.CSSProperties
        text18Regular28?: React.CSSProperties
        text16Medium21?: React.CSSProperties
        text16Regular21?: React.CSSProperties
        text14Medium20?: React.CSSProperties
        text14Regular20?: React.CSSProperties
        text12Medium16?: React.CSSProperties
        text12Regular16?: React.CSSProperties
        text11Medium16?: React.CSSProperties
        text11Regular16?: React.CSSProperties
        text10Medium16?: React.CSSProperties
        text10Regular16?: React.CSSProperties
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        text72Medium90: true
        text60Medium72: true
        text48Medium60: true
        text36Medium44: true
        text30Medium38: true
        text24Medium32: true
        text24Regular32: true
        text20Medium30: true
        text20Regular30: true
        text18Medium28: true
        text18Regular28: true
        text16Medium21: true
        text16Regular21: true
        text14Medium20: true
        text14Regular20: true
        text12Medium16: true
        text12Regular16: true
        text11Medium16: true
        text11Regular16: true
        text10Medium16: true
        text10Regular16: true
    }
}
const FONT_REGULAR = 400
const FONT_MEDIUM = 500

const typography = {
    // eslint-disable-next-line quotes
    fontFamily: "'SVN-Rubik'",
    //font-size font-weight line-height
    text72Meidum90: {
        fontSize: '72px',
        fontWeight: FONT_MEDIUM,
        lineHeight: '90px',
    },
    text60Medium72: {
        fontSize: '60px',
        fontWeight: FONT_MEDIUM,
        lineHeight: '72px',
    },
    text48Medium60: {
        fontSize: '48px',
        fontWeight: FONT_MEDIUM,
        lineHeight: '60px',
    },
    text36Medium44: {
        fontSize: '36px',
        fontWeight: FONT_MEDIUM,
        lineHeight: '44px',
    },
    text30Medium38: {
        fontSize: '30px',
        fontWeight: FONT_MEDIUM,
        lineHeight: '38px',
    },
    text24Medium32: {
        fontSize: '24px',
        fontWeight: FONT_MEDIUM,
        lineHeight: '32px',
    },
    text24Regular32: {
        fontSize: '24px',
        fontWeight: FONT_REGULAR,
        lineHeight: '32px',
    },
    text20Medium30: {
        fontSize: '20px',
        fontWeight: FONT_MEDIUM,
        lineHeight: '30px',
    },
    text20Regular30: {
        fontSize: '20px',
        fontWeight: FONT_REGULAR,
        lineHeight: '30px',
    },
    text18Medium28: {
        fontSize: '18px',
        fontWeight: FONT_MEDIUM,
        lineHeight: '28px',
    },
    text18Regular28: {
        fontSize: '18px',
        fontWeight: FONT_REGULAR,
        lineHeight: '28px',
    },
    text16Medium21: {
        fontSize: '16px',
        fontWeight: FONT_MEDIUM,
        lineHeight: '21px',
    },
    text16Regular21: {
        fontSize: '16px',
        fontWeight: FONT_REGULAR,
        lineHeight: '21px',
    },
    text14Medium20: {
        fontSize: '14px',
        fontWeight: FONT_MEDIUM,
        lineHeight: '20px',
    },
    text14Regular20: {
        fontSize: '14px',
        fontWeight: FONT_REGULAR,
        lineHeight: '20px',
    },
    text12Medium16: {
        fontSize: '12px',
        fontWeight: FONT_MEDIUM,
        lineHeight: '16px',
    },
    text12Regular16: {
        fontSize: '12px',
        fontWeight: FONT_REGULAR,
        lineHeight: '16px',
    },
    text11Medium16: {
        fontSize: '11px',
        fontWeight: FONT_MEDIUM,
        lineHeight: '16px',
    },
    text11Regular16: {
        fontSize: '11px',
        fontWeight: FONT_REGULAR,
        lineHeight: '16px',
    },
    text10Medium16: {
        fontSize: '10px',
        fontWeight: FONT_MEDIUM,
        lineHeight: '16px',
    },
    text10Regular16: {
        fontSize: '10px',
        fontWeight: FONT_REGULAR,
        lineHeight: '16px',
    },
}

export default typography
