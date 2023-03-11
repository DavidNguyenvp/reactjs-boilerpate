import * as React from 'react'
import { Box, Theme, Typography, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useTranslation } from 'react-i18next'
import { Dayjs } from 'dayjs'

type IDatePickerProps = {
    valueSince: Dayjs | null
    setValueSince: React.Dispatch<React.SetStateAction<Dayjs | null>>
    value: Dayjs | null
    setValue: React.Dispatch<React.SetStateAction<Dayjs | null>>
}
const DatePickers = (props: IDatePickerProps) => {
    const { valueSince, setValueSince, value, setValue } = props
    const classes = useStyles()
    const { t } = useTranslation()

    return (
        <Box className={classes.boxOptions}>
            <Box className={classes.boxDatePicker}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Typography className={classes.nameDatePicker}>
                        {t('selectListProduct.harvestTimeFromDate')}
                    </Typography>
                    <DatePicker
                        inputFormat="DD/MM/YYYY"
                        value={valueSince}
                        onChange={(newValueSince) => {
                            setValueSince(newValueSince)
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Box>
            <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Typography className={classes.nameDatePicker}>{t('selectListProduct.toDay')}</Typography>
                    <DatePicker
                        minDate={valueSince}
                        inputFormat="DD/MM/YYYY"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Box>
        </Box>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    boxSelect: {
        marginLeft: '20px',
    },
    listSelect: {
        bgcolor: 'background.paper',
        marginBottom: '10px',
    },
    listItem: {
        border: `1px solid ${theme.palette.textColor.gray300}`,
        borderRadius: '5px',
        height: '35px',
    },
    listItemText: {
        paddingRight: '10px',
    },
    menu: {
        marginTop: '10px',
    },
    boxOptions: {
        paddingTop: '20px',
        paddingLeft: '10px',
        marginRight: '10px',
    },
    boxDatePicker: {
        paddingBottom: '15px',
    },
    nameDatePicker: {
        fontWeight: '600',
    },
    Button: {
        mt: 2,
        mr: 5,
        background: theme.palette.functional.green600,
        color: 'white',
        marginLeft: '12px',
        '&:hover': {
            background: theme.palette.functional.green400,
            border: `1px solid ${theme.palette.functional.green400}`,
        },
    },
}))

export default DatePickers
