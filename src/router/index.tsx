import { Navigate } from 'react-router-dom'
import { MainLayout } from '../Containers/Layout'
import HomePage from '../pages/home'
import { TRoutes } from '../types'
import { Router } from './Router'

// Public Layout & Routers
const publicLayout: TRoutes = {
    layout: <MainLayout />,
    routes: [
        { path: Router.home.index, element: <Navigate to={Router.home.top} /> },
        { path: Router.home.top, element: <HomePage /> },
    ],
}

export { publicLayout }
