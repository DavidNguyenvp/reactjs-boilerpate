import React from 'react'
import { Dropdown } from '../../../components'
import { DROPDOWN_STYLE } from '../../../constants/Common'
import { LANGUAGE } from '../../../constants/Langauge'

interface ILanguageProps {
    changeLanguage: (e: string) => void
}

const Language = ({ changeLanguage }: ILanguageProps) => {
    // State, variable
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    // Events
    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleMenuItemClick = (index: string | number | undefined) => {
        changeLanguage(index as string)
    }

    const handleClickList = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    return (
        <Dropdown
            open={open}
            anchorEL={anchorEl}
            handleClose={handleClose}
            list={LANGUAGE.languageOption}
            dropdownStyle={DROPDOWN_STYLE.CHANGE_TEXT}
            handleClickList={handleClickList}
            handleMenuItemClick={handleMenuItemClick}
            initSelectedIndex={LANGUAGE.languageOption.findIndex((item) => item.value === LANGUAGE.languageDefault)}
        />
    )
}

export default Language
