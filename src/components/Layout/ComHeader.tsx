import Header from "../Header/Header";
import { Outlet } from "react-router";
const ComHeader = () => {
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}
export default ComHeader