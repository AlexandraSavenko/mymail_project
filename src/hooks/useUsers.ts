import { useEffect, useState } from "react"
import {type User } from "../types/userTypes"
import { fetchUsers } from "../utils/operation";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(()=>{
       ( async()=>{
        try {
            const response = await fetchUsers();
            setUsers(response)
        } catch (error) {
            setError(error as Error)
        }finally{
            setLoading(false)
        }
       })();
    },[]);
    return {users, loading, error}
}