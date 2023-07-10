import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../pages/Login";


export const RequireAuth = ({ children }: { children: JSX.Element }) => {

    const auth = useContext(AuthContext);

    console.log(auth.user);

    if (!auth.user) {
        return <Login />
    }

    return children;
}