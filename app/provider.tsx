'use client'
import { UserDetailContext } from '@/context/UserDetailContext';
import { useUser } from '@clerk/nextjs';
import axios from 'axios'
import { useEffect, useState } from 'react';
function Provider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { user } = useUser()
    const [userDetail, setUserDetail]=useState<any>()
    useEffect(() => {
        user && CreateNewUser()
    }, [user])


    const CreateNewUser = async () => {
        const result = await axios.post('/api/users', {})
        
        setUserDetail(result.data?.user)
    }
    return (
        <div>
            <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
                {children}
            </UserDetailContext.Provider></div>
    )
}
export default Provider