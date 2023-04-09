import { useState } from "react";

type AuthUser = {
    name:string
    email:string
}

export const User = () => {
    const [user,setUser] = useState<AuthUser | null>(null)
    const handleLogin = () =>{
        setUser({
        name: 'Juhi',
        email: 'juhi@example.com',
        })
    }
    const handleLogout =() => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is </div>
            <div>User email is </div>

        </div>
    )
}
