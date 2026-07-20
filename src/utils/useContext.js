import { createContext } from "react";

const Usercontext=createContext({
    name:"default user",
    email:"user@gmial.com",
})

export default Usercontext;