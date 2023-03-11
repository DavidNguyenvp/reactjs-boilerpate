import AdapterDateFns from '@date-io/date-fns'
import { TextField, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import vnLocale from 'date-fns/locale/vi'
import { Controller, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import Label from './Label'

interface DatePickerProps {
    name: string
    label?: string
    isRequired?: boolean
    disabled?: boolean
    classNameDatePicker?: string
    minDate?: Date | null | undefined
    maxDate?: Date | null | undefined
}

const RHFDatePicker = (props: DatePickerProps): JSX.Element => {
    const { name, label, isRequired, disabled, classNameDatePicker, minDate, maxDate } = props
    const methods = useFormContext()
    const classes = useStyles()
    const { t } = useTranslation()

    const formatDay = (day: string) => {
        return day.toString()
    }

    return (
        <Controller
            control={methods.control}
            name={name}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <div className={classes.root}>
                    <Label name={name} label={t(`${label}`)} isRequired={isRequired} />
                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={vnLocale}>
                        <DatePicker
                            inputFormat="dd/MM/yyyy"
                            dayOfWeekFormatter={(day) => {
                                return formatDay(day)
                            }}
                            minDate={minDate}
                            maxDate={maxDate}
                            onChange={onChange}
                            value={value}
                            disabled={disabled}
                            renderInput={(params) => (
                                <div className={`${classes.root} ${classNameDatePicker}`}>
                                    <TextField
                                        fullWidth
                                        {...params}
                                        className={classes.input}
                                        error={!!error}
                                        helperText={error?.message && t(`${error?.message}`) + ' ' + t(`${label}`)}
                                    />
                                </div>
                            )}
                        />
                    </LocalizationProvider>
                </div>
            )}
        />
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginBottom: '21px',
        textAlign: 'left',
        '& .MuiTextField-root > p': {
            marginLeft: 0,
        },
    },
    input: {
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '20px',
        '& .MuiInputBase-root': {
            height: '42px',
        },
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
    },
}))

export default RHFDatePicker
