import { Outlet } from "react-router-dom";
import { Navigation } from "components/Navigation"

export const SharedLayout = () => {
    return (
        <div>
            <header
            style={{
                outline: '1px solid red'
            }}>
                <Navigation />
            </header>
            <Outlet />
        </div>
    )
}