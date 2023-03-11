import { Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

interface ILabelProps {
    name: string
    label: string
    isRequired?: boolean
}

const Label = (props: ILabelProps): JSX.Element => {
    const { name, isRequired, label } = props
    const classes = useStyles()
    return (
        <Typography component="label" htmlFor={name} className={classes.label} variant="text14Medium20">
            {label}
            {isRequired && <span className={classes.required}> *</span>}
        </Typography>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    label: {
        marginBottom: '4px',
        display: 'block',
        color: theme.palette.textColor.gray800,
    },
    required: {
        color: theme.palette.functional.red500,
        userSelect: 'none',
    },
}))

export default Label
