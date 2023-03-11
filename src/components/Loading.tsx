import { CircularProgress, Stack, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

type TDisableBackground = {
    className: string
}
const DisableBackground = (props: TDisableBackground): JSX.Element => {
    const { className } = props
    return <div className={className} />
}

function Loading(): JSX.Element {
    const classes = useStyles()

    return (
        <>
            <Stack justifyContent="center" alignItems="center" className={classes.container}>
                <CircularProgress className={classes.root} />
            </Stack>
            <DisableBackground className={classes.disableBackground} />
        </>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        position: 'fixed',
        top: '0',
        width: '100%',
        height: '100%',
        zIndex: '1045',
    },
    root: {
        zIndex: '1050',
        height: '70px !important',
        width: '70px !important',
        display: 'block',
        color: theme.palette.functional.gray100,
    },
    disableBackground: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: '1040',
        top: '0',
        background: 'rgba(0, 0, 0, 0.5)',
    },
}))

export default Loading
