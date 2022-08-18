import { Outlet } from "react-router-dom"
import { Navigation } from "components/Navigation"

export const SharedLayout = () => {
    return (
        <div>
            <header>
                <Navigation />
            </header>
            <Outlet />
        </div>
    )
}