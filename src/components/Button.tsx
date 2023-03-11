import { Button, ButtonProps } from '@mui/material'
import React from 'react'

interface Props extends ButtonProps {
    label: string
}

const VSButton: React.FC<Props> = ({ label, ...rest }) => {
    return (
        <Button {...rest} variant="contained" color="primary">
            {label}
        </Button>
    )
}

export default VSButton
