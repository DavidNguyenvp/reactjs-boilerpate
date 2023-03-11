/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox as MuiCheckBox, FormControlLabel, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

type TCheckboxProps = {
    label?: string | React.ReactNode
    checked?: boolean
    onChange?: any
    name?: string
    classNameCheckbox: string
}
const Checkbox = (props: TCheckboxProps) => {
    const classes = useStyles()
    const { label, onChange, checked, classNameCheckbox, name } = props
    return (
        <FormControlLabel
            className={`${classes.root} ${classNameCheckbox}`}
            control={<MuiCheckBox />}
            label={label}
            onChange={onChange}
            checked={checked}
            name={name}
        />
    )
}

Checkbox.defaultProps = {
    classNameCheckbox: '',
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        '& .MuiTypography-root': {
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '20px',
            color: theme.palette.textColor.gray500,
        },
    },
}))

export default Checkbox
