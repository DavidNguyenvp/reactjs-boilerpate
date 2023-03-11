import { Stack, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { Label } from '../../components'
import { keyLanguage } from '../../constants/Langauge'
import i18n from '../../translations/i18n'
import { localStorageSetItem, localStorageGetItem } from '../../utils/common'
import Language from './components/Language'

const Header = () => {
    const classes = useStyles()
    const changeLanguage = (e: string) => {
        const languageSaveLocal: string = e
        localStorageSetItem(keyLanguage, languageSaveLocal)
        const languageValue = localStorageGetItem(keyLanguage)
        if (!languageValue) return
        i18n.changeLanguage(languageValue)
    }

    return (
        <div className={classes.header}>
            <Stack className={classes.menu} direction="row" justifyContent="space-between">
                <Stack direction="row" alignItems="center">
                    <Label name="MicRoak" label="Microak" />
                </Stack>
                <Stack direction="row" alignItems="center">
                    <Stack direction="row" alignItems="center" className={classes.notificationsAndLanguage}>
                        <Language changeLanguage={changeLanguage} />
                    </Stack>
                </Stack>
            </Stack>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        width: '100%',
        height: '70px',
        background: theme.palette.functional.green600,
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        zIndex: 990,
    },
    menu: {
        maxWidth: '1920px',
        width: '100%',
        height: '100%',
        padding: '0 41px',
        margin: '0 auto',
    },
    favoriteAndLanguage: {
        marginLeft: '14px',
    },
    notificationsAndLanguage: {
        marginLeft: '25px',
    },
}))

export default Header
