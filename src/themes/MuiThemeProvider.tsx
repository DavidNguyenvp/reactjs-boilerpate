import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import { viVN } from '@mui/material/locale'
import typography from './typography'
import palette from './palette'
import breakpoint from './breakpoint'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MuiThemeProvider = ({ children }: any) => {
    const muiTheme = createTheme(
        {
            typography,
            palette,
            breakpoints: breakpoint,
        },
        viVN
    )

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={muiTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default MuiThemeProvider
