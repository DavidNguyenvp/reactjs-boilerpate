//CUSTOMIZE
declare module '@mui/material/styles' {
    //CUSTOMIZE COLOR NAME
    interface Palette {
        textColor: Palette['primary']
        constant: Palette['primary']
        functional: Palette['primary']
    }
    interface PaletteOptions {
        textColor: PaletteOptions['primary']
        constant: PaletteOptions['primary']
        functional: PaletteOptions['primary']
    }
    //CUSTOMIZE KEY OF COLOR NAME
    interface PaletteColor {
        // gray
        gray100?: string
        gray200?: string
        gray300?: string
        gray400?: string
        gray500?: string
        gray600?: string
        gray700?: string
        gray800?: string
        gray900?: string
        // green
        green100?: string
        green200?: string
        green300?: string
        green400?: string
        green600?: string
        green700?: string
        green800?: string
        green900?: string
        // blue
        blue100?: string
        blue200?: string
        blue300?: string
        blue400?: string
        blue500?: string
        blue600?: string
        blue700?: string
        blue800?: string
        blue900?: string
        // yellow
        yellow100?: string
        yellow200?: string
        yellow300?: string
        yellow400?: string
        yellow500?: string
        yellow600?: string
        yellow700?: string
        yellow800?: string
        yellow900?: string
        // red
        red100?: string
        red200?: string
        red300?: string
        red400?: string
        red500?: string
        red600?: string
        red700?: string
        red800?: string
        red900?: string
        // pagination
        paginationItemDisable?: string
        paginationItemBorder?: string
        paginationDisablePreNextIcon?: string
        // alert
        alertBackground?: string
        // effect shadow
        shadow1?: string
        shadow2?: string
    }
    interface SimplePaletteColorOptions {
        // gray
        gray100?: string
        gray200?: string
        gray300?: string
        gray400?: string
        gray500?: string
        gray600?: string
        gray700?: string
        gray800?: string
        gray900?: string
        // green
        green100?: string
        green200?: string
        green300?: string
        green400?: string
        green600?: string
        green700?: string
        green800?: string
        green900?: string
        // blue
        blue100?: string
        blue200?: string
        blue300?: string
        blue400?: string
        blue500?: string
        blue600?: string
        blue700?: string
        blue800?: string
        blue900?: string
        // yellow
        yellow100?: string
        yellow200?: string
        yellow300?: string
        yellow400?: string
        yellow500?: string
        yellow600?: string
        yellow700?: string
        yellow800?: string
        yellow900?: string
        // red
        red100?: string
        red200?: string
        red300?: string
        red400?: string
        red500?: string
        red600?: string
        red700?: string
        red800?: string
        red900?: string
        // pagination
        paginationItemDisable?: string
        paginationItemBorder?: string
        paginationDisablePreNextIcon?: string
        // alert
        alertBackground?: string
        // effect shadow
        shadow1?: string
        shadow2?: string
    }
}

//COLOR
//The colors that follow the brand identity.
const PRIMARY = {
    main: '#00A64F',
    dark: '#414042',
}
//Main text color, can be used in other elements such as border, disabled item, scrim, etc
const TEXT = {
    main: '#1C1D1D',
    light: '#F8F8F8',
    gray100: '#EFF0F2',
    gray200: '#DDDFE0',
    gray300: '#C9CDD1',
    gray400: '#9DA3AA',
    gray500: '#66717D',
    gray600: '#4B5663',
    gray700: '#36404B',
    gray800: '#212B36',
    gray900: '#0B1118',
}
const CONSTANT = {
    main: '#ffffff',
    dark: '#000000',
}

const FUNCTIONAL = {
    // blue
    blue100: '#D2E1FE',
    blue200: '#A5C1FE ',
    blue300: '#789EFD',
    blue400: '#5781FB',
    blue500: '#2053F9',
    blue600: '#173FD6',
    blue700: '#102EB3',
    blue800: '#0A1F90',
    blue900: '#061577',
    // green
    green100: '#EDFFEE',
    green200: '#CCFCD4',
    green300: '#95ECAD',
    green400: '#38D081',
    main: '#00A64F', //green500
    green600: '#008E52',
    green700: '#007750',
    green800: '#00604A',
    green900: '#004F45',
    // yellow
    yellow100: '#FEF5CD',
    yellow200: '#FEE89B',
    yellow300: '#FDD869',
    yellow400: '#FBC744',
    yellow500: '#F9AD07',
    yellow600: '#D68D05',
    yellow700: '#B37003',
    yellow800: '#905502',
    yellow900: '#774301 ',
    // red
    red100: '#FEF3F2',
    red200: '#FEE4E2',
    red300: '#FECDCA',
    red400: '#FDA29B',
    red500: '#F04438',
    red600: '#D92D20',
    red700: '#B32318',
    red800: '#912018',
    red900: '#7A271A',
    // gray
    gray100: '#EFF0F2',
    gray200: '#DDDFE0',
    gray300: '#C9CDD1',
    gray400: '#9DA3AA',
    gray500: '#66717D',
    gray600: '#4B5663',
    gray700: '#36404B',
    gray800: '#212B36',
    gray900: '#0B1118',
    // pagination
    paginationItemDisable: '#919EAB',
    paginationItemBorder: '#DFE3E8',
    paginationDisablePreNextIcon: '#C4CDD5',
    // alert
    alertBackground: 'rgba(11, 17, 24, 0.7)',
    // effect shadow
    shadow1: '0px 0px 6px rgba(14, 14, 14, 0.26)',
    shadow2: '0px 6px 12px rgba(0, 0, 0, 0.13)',
}

//EXPORT
const palette = {
    primary: PRIMARY,
    textColor: TEXT,
    constant: CONSTANT,
    functional: FUNCTIONAL,
}

export default palette
