import React, {useState, useEffect} from 'react'
import { getUsers } from './UserManager'
import { UserCard } from './UserCard';

export const UserList = () => {
    const [users, setUsers] = useState(localStorage.getItem('token'));
   
    useEffect(() => {
        getUsers().then(theUsers => {
            setUsers(theUsers);
        });
    }, [])

    console.log(users)

    return (
        <div className='container'>
            {users.map((user) => <UserCard key={user.id} user={user}/>)}
        </div>
    )
}