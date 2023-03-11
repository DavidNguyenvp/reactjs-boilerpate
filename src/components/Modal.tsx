import { Divider, Fade, IconButton, Modal as MuiModal, Stack, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Close } from './icons'

type IModalProps = {
    open: boolean
    onClose: () => void
    children: React.ReactNode
    showTitle?: boolean
    showCloseModal?: boolean
    classNameModal: string
    title?: string
    subtitle?: string
    stylesModal?: string
}

const Modal = (props: IModalProps) => {
    const classes = useStyles()
    const { open, onClose, children, showCloseModal, classNameModal, title, showTitle, stylesModal, subtitle } = props
    const { t } = useTranslation()

    return (
        <MuiModal
            className={`${classes.modalWrapper} ${stylesModal}`}
            open={open}
            onClose={onClose}
            disableScrollLock
            closeAfterTransition
        >
            <Fade in={open}>
                <div className={`${classes.root} ${classNameModal}`}>
                    {showTitle && (
                        <>
                            <Stack
                                className={classes.head}
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <div>
                                    <Typography variant="text24Medium32">{t(`${title}`)}</Typography>
                                    <br />
                                    <Typography variant="text14Regular20">
                                        {subtitle !== undefined && t(`${subtitle}`)}
                                    </Typography>
                                </div>

                                {showCloseModal ? (
                                    <IconButton className={classes.closeIcon} onClick={onClose}>
                                        <Close />
                                    </IconButton>
                                ) : (
                                    <></>
                                )}
                            </Stack>
                            <Divider className={classes.divider} />
                        </>
                    )}

                    <div className={classes.content}>{children}</div>
                </div>
            </Fade>
        </MuiModal>
    )
}

Modal.defaultProps = {
    showTitle: true,
    showCloseModal: true,
    classNameModal: '',
    title: '',
}

const useStyles = makeStyles((theme: Theme) => ({
    modalWrapper: {
        zIndex: '1010',
    },
    root: {
        width: 'auto',
        zIndex: '1020',
        borderRadius: '6px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: theme.palette.constant.main,
        '&:focus-visible': {
            outline: 'none',
        },
    },
    head: {
        padding: '24px',
    },
    closeIcon: {},
    divider: {},
    content: {
        padding: '24px',
    },
}))

export default Modal
