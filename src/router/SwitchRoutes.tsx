import { Route, Routes } from 'react-router-dom'
import { publicLayout } from '.'
import { TRoutes, TRoutesItem } from '../types'

const SwitchRoutes = () => {
    /**
     * Define Layout & Route
     * @param layoutDefinition
     * @returns
     */
    const defineLayout = (layoutDefinition: TRoutes): JSX.Element => {
        return (
            <Route element={layoutDefinition.layout}>
                {layoutDefinition.routes.map((route: TRoutesItem, key: number) => (
                    <Route key={key} path={route.path} element={route.element} />
                ))}
            </Route>
        )
    }

    return (
        <Routes>
            {/* Public Layout & Router */}
            {defineLayout(publicLayout)}
        </Routes>
    )
}

export default SwitchRoutes
