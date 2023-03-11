import { Grid, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { Loading } from '../../components'
import { statusLoadingSelector } from '../../store/slice/loadingSlide'
import SideBar from '../sidebar/SideBar'
import Footer from './Footer'
import Header from './Header'

function MainLayout() {
    const classes = useStyles()
    const statusLoading = useAppSelector(statusLoadingSelector)

    return (
        <>
            <div className={classes.containerBackground}>
                <Header />
                <Grid container className={classes.content}>
                    <Grid item xs={2} className={classes.sidebar}>
                        <SideBar />
                    </Grid>
                    <Grid item xs={10} className={classes.layout}>
                        <Outlet />
                    </Grid>
                </Grid>
                <Footer />
            </div>
            {statusLoading ? <Loading /> : <></>}
        </>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    containerBackground: {
        background: 'white',
        height: 'calc(100vh - 60px)',
        width: '100vw',
    },
    content: {
        height: 'calc(100vh - 44px)',
    },
    sidebar: {
        background: theme.palette.functional.gray800,
        padding: '36px 16px',
    },
    layout: {
        background: theme.palette.functional.gray100,
        padding: '20px',
    },
}))

export default MainLayout
