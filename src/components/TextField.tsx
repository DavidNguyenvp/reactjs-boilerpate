import {
    IconButton,
    InputAdornment,
    TextField as MuiTextField,
    TextFieldProps as MuiTextFieldProps,
    Theme,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ETextFieldType } from '../constants/component'
import { HidePassword, ShowPassword } from './icons'
import Label from './Label'

interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'className'> {
    name: string
    label?: string
    type?: ETextFieldType
    isRequired?: boolean
    endIcon?: React.ReactNode
    disabled?: boolean
    classNameTextField: string
    textFieldProps?: MuiTextFieldProps
    rows?: number
    maxRows?: number
    minRows?: number
}

const TextField = (props: TextFieldProps): JSX.Element => {
    const { name, label, type, isRequired, endIcon, disabled, classNameTextField, textFieldProps } = props

    const methods = useFormContext()
    const classes = useStyles()
    const { t } = useTranslation()
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const exceptThisSymbols = ['e', 'E', '+', '-', '.']
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    switch (type) {
        case ETextFieldType.TEXTAREA: {
            const { rows, maxRows, minRows } = props
            return (
                <Controller
                    name={name}
                    control={methods.control}
                    render={({ field, fieldState: { error } }) => (
                        <div className={`${classes.root} ${classNameTextField}`}>
                            <Label name={name} label={t(`${label}`)} isRequired={isRequired} />
                            <MuiTextField
                                {...field}
                                {...textFieldProps}
                                className={classes.textArea}
                                type={type}
                                disabled={disabled}
                                rows={rows}
                                minRows={minRows}
                                maxRows={maxRows}
                                fullWidth
                                multiline
                                error={!!error}
                                helperText={error?.message && t(`${error?.message}`) + ' ' + t(`${label}`)}
                                InputProps={{
                                    endAdornment: endIcon && (
                                        <InputAdornment className={classes.endIcon} position="end">
                                            {endIcon}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                    )}
                />
            )
        }
        case ETextFieldType.PASSWORD:
            return (
                <Controller
                    name={name}
                    control={methods.control}
                    render={({ field, fieldState: { error } }) => (
                        <div className={`${classes.root} ${classNameTextField}`}>
                            <Label name={name} label={t(`${label}`)} isRequired={isRequired} />
                            <MuiTextField
                                className={classes.input}
                                {...field}
                                disabled={disabled}
                                error={!!error}
                                fullWidth
                                autoComplete="off"
                                type={showPassword ? ETextFieldType.DEFAULT : ETextFieldType.PASSWORD}
                                helperText={error?.message && t(`${error?.message}`) + ' ' + t(`${label}`)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                className={classes.showPassword}
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                            >
                                                {showPassword ? <ShowPassword /> : <HidePassword />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                    )}
                />
            )
        case ETextFieldType.NUMBER:
            return (
                <Controller
                    name={name}
                    control={methods.control}
                    render={({ field, fieldState: { error } }) => (
                        <div className={`${classes.root} ${classNameTextField}`}>
                            <Label name={name} label={t(`${label}`)} isRequired={isRequired} />
                            <MuiTextField
                                className={classes.input}
                                {...field}
                                type={type}
                                disabled={disabled}
                                fullWidth
                                error={!!error}
                                onKeyDown={(e) => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                helperText={error?.message && t(`${error?.message}`) + ' ' + t(`${label}`)}
                                InputProps={{
                                    endAdornment: endIcon && (
                                        <InputAdornment className={classes.endIcon} position="end">
                                            {endIcon}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                    )}
                />
            )
        default:
            return (
                <Controller
                    name={name}
                    control={methods.control}
                    render={({ field, fieldState: { error } }) => (
                        <div className={`${classes.root} ${classNameTextField}`}>
                            <Label name={name} label={t(`${label}`)} isRequired={isRequired} />
                            <MuiTextField
                                className={classes.input}
                                {...field}
                                {...textFieldProps}
                                type={type}
                                disabled={disabled}
                                fullWidth
                                error={!!error}
                                helperText={error?.message && t(`${error?.message}`) + ' ' + t(`${label}`)}
                                InputProps={{
                                    endAdornment: endIcon && (
                                        <InputAdornment className={classes.endIcon} position="end">
                                            {endIcon}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                    )}
                />
            )
    }
}

TextField.defaultProps = {
    type: ETextFieldType.DEFAULT,
    isRequired: true,
    classNameTextField: '',
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginBottom: '21px',
        textAlign: 'left',
    },
    label: {
        marginBottom: '4px',
        display: 'block',
        color: theme.palette.textColor.gray800,
    },
    required: {
        color: theme.palette.functional.red500,
        userSelect: 'none',
    },
    input: {
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '20px',
        '& .MuiInputBase-root': {
            paddingRight: '0',
            height: '40px',
        },
        '& .MuiInputBase-input': {
            height: '40px',
            padding: '0 0 0 10px',
        },
        color: theme.palette.textColor.gray800,
        '& .MuiFormHelperText-root': {
            marginLeft: '0px',
            marginTop: '4px',
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '16px',
            textTransform: 'lowercase',
        },
        '& .MuiFormHelperText-root:first-letter': {
            textTransform: 'uppercase',
        },
        '& .MuiInputBase-root.Mui-disabled': {
            background: theme.palette.textColor.gray100,
        },
        '& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
        },
    },
    textArea: {
        '& .MuiFormHelperText-root': {
            marginLeft: '0px',
            marginTop: '4px',
            textTransform: 'lowercase',
        },
        '& .MuiFormHelperText-root:first-letter': {
            textTransform: 'uppercase',
        },
    },
    showPassword: {
        marginRight: '7px',
    },
    endIcon: {
        paddingRight: '10px',
        userSelect: 'none',
    },
}))

export default TextField
