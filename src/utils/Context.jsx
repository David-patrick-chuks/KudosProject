import { createContext, useState } from "react";
import App from "../App";
import { users } from "./fakeData";
import { toast } from "react-toastify";

export const GlobalContext = createContext();

export const GlobalProvider = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function loginUser(email, password) {
        if(!email || !password) {
            toast.error("Please enter a valid email and password", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                // transition: Bounce,
            })
        }
        const userExist = users.find(user => user.email === email);
        if(!userExist) return;
        if(userExist.password !== password) return;
        // setName(userExist.name);
        // setEmail(userExist.email);
        localStorage.setItem('email', userExist.email);
        location.assign("/")
    }

    function loggedInUserChecker(){
        const userEmail = localStorage.getItem('email');
        if(!userEmail) return;
        const user = users.find(user => user.email === userEmail);
        if(!user) return;
        setName(user.name);
        setEmail(userEmail);
    }

    const globalStates = {
        name, email, loginUser, loggedInUserChecker
    }

    return (
        <GlobalContext.Provider value={globalStates}>
            <App />
        </GlobalContext.Provider>
    )
}
