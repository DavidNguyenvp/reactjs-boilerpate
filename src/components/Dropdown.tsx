import {
    List,
    ListItem,
    ListItemText,
    Menu as MuiMenu,
    MenuItem,
    PopoverOrigin,
    Stack,
    Theme,
    Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { DROPDOWN_STYLE } from '../constants/Common'
import { TItemDropDownProps } from '../types'
import { AngleDown } from './icons'

type TDropdownProps = {
    open: boolean
    anchorEL: null | Element | ((element: Element) => Element)
    handleClose: () => void
    list: TItemDropDownProps[]
    anchorOrigin?: PopoverOrigin
    transformOrigin?: PopoverOrigin
    handleLogout?: () => void
    dropdownStyle: DROPDOWN_STYLE
    handleClickList?: (event: React.MouseEvent<HTMLElement>) => void
    handleMenuItemClick: (event: string | number | undefined) => void
    initSelectedIndex: number
    children?: React.ReactNode
}

const Dropdown = (props: TDropdownProps): JSX.Element => {
    // Hooks
    const { t } = useTranslation()
    const classes = useStyles()
    const navigate = useNavigate()

    // Props
    const {
        open,
        anchorEL,
        handleClose,
        list,
        anchorOrigin,
        transformOrigin,
        handleLogout,
        dropdownStyle,
        handleClickList,
        handleMenuItemClick,
        initSelectedIndex,
        children,
    } = props

    // State, variable
    const [selectedIndex, setSelectedIndex] = useState<number | null>(initSelectedIndex)

    // Events
    const handleClickItemDropdownDefault = (
        event: React.MouseEvent<HTMLElement>,
        index: number,
        item: TItemDropDownProps
    ) => {
        if (item.path) {
            navigate(item.path)
            handleClose()
        }
        setSelectedIndex(index)
        if (!handleLogout) return
    }

    const handleClickItemDropDownChangeText = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setSelectedIndex(index)
        if (!handleMenuItemClick) return
        handleMenuItemClick(list[index].value)
        handleClose()
    }

    switch (dropdownStyle) {
        case DROPDOWN_STYLE.CHANGE_TEXT:
            return (
                <>
                    <List component="nav" aria-label="change-text" className={classes.listRoot}>
                        <ListItem onClick={handleClickList}>
                            <ListItemText
                                primary={
                                    <Stack direction="row" alignItems="center">
                                        <Typography variant="text14Medium20" className={classes.textChange}>
                                            {!!selectedIndex && list[selectedIndex].value === 0
                                                ? list[selectedIndex].value
                                                : list[selectedIndex!].value}
                                        </Typography>
                                        <AngleDown className={classes.marginLeft6px} />
                                    </Stack>
                                }
                            />
                        </ListItem>
                    </List>
                    <MuiMenu
                        open={open}
                        onClose={handleClose}
                        anchorEl={anchorEL}
                        className={classes.root}
                        disableScrollLock
                        anchorOrigin={anchorOrigin}
                        transformOrigin={transformOrigin}
                    >
                        {list.map((item: TItemDropDownProps, key) => (
                            <MenuItem
                                className={classes.item}
                                key={key}
                                value={item?.value}
                                selected={key === selectedIndex}
                                onClick={(event) => handleClickItemDropDownChangeText(event, key)}
                            >
                                {item?.icon} {t(`${item.name}`)}
                            </MenuItem>
                        ))}
                    </MuiMenu>
                </>
            )
        default:
            return (
                <>
                    {children}
                    <MuiMenu
                        open={open}
                        onClose={handleClose}
                        anchorEl={anchorEL}
                        className={classes.root}
                        disableScrollLock
                        anchorOrigin={anchorOrigin}
                        transformOrigin={transformOrigin}
                    >
                        {list.map((item: TItemDropDownProps, key) => (
                            <MenuItem
                                className={classes.item}
                                key={key}
                                value={item?.value}
                                selected={key === selectedIndex}
                                onClick={(event) => handleClickItemDropdownDefault(event, key, item)}
                            >
                                {item?.icon} {t(`${item.name}`)}
                            </MenuItem>
                        ))}
                    </MuiMenu>
                </>
            )
    }
}

Dropdown.defaultProps = {
    anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
    },
    transformOrigin: {
        vertical: 'top',
        horizontal: 'right',
    },
    dropdownStyle: DROPDOWN_STYLE.DEFAULT,
    initSelectedIndex: null,
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        '& .MuiPaper-root': {
            zIndex: '1000',
            marginTop: '12px',
            border: `1px solid ${theme.palette.textColor.gray300}`,
            borderRadius: '6px',
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        },
        '& .MuiMenu-list': {
            padding: '0',
        },
        '& .MuiMenuItem-root': {
            height: '36px',
            ...theme.typography.text14Medium20,
            color: theme.palette.textColor.gray800,
            transition: 'all 0.04s linear 0.04s',
            '& div': {
                width: '24px',
                textAlign: 'left',
            },
        },
        '& .MuiMenuItem-root:hover': {
            background: theme.palette.primary.main + '!important',
            color: theme.palette.constant.main + '!important',
            '& :nth-child(1)': {
                color: theme.palette.constant.main,
            },
            '& :nth-child(1) path': {
                fill: theme.palette.constant.main,
            },
        },
        '& .MuiMenuItem-root.Mui-selected': {
            background: theme.palette.primary.main,
            color: theme.palette.constant.main,
            '& :nth-child(1)': {
                color: theme.palette.constant.main,
            },
            '& :nth-child(1) path': {
                fill: theme.palette.constant.main,
            },
        },
    },
    listRoot: {
        '& .MuiListItem-root': {
            padding: 0,
        },
    },
    item: {
        '& :nth-child(1)': {
            marginRight: '12px',
        },
    },
    textChange: {
        textTransform: 'uppercase',
        color: theme.palette.constant.main,
        cursor: 'pointer',
    },
    marginLeft6px: {
        marginLeft: '6px',
    },
}))

export default Dropdown
