import { createContext } from "react";
import users from "../constants/userTestData";

export const UserContext = createContext({})

const UserProvider = ({ children }) => {
    const actualUser = users[0]

    return (
        <UserContext.Provider value={{ actualUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;