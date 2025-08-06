import { useMemo, useState } from "react";
import { useUsers } from "../../hooks/useUsers";


const Users = () => {
    const {users, loading, error} = useUsers();
     const [filter, setFilter] = useState("")
     const [sortUsers, setSortUsers] = useState(false)


  const filteredUsers = filter ? users.filter(user => user.name.toLowerCase().startsWith(filter.toLowerCase())) : users
  const sortedUsers = useMemo(()=>{return sortUsers ? [...filteredUsers].sort((a, b) => a.name.localeCompare(b.name)) : filteredUsers;},[filteredUsers, sortUsers]) 

if(error) return <p>{`Error happened ${error.message} because of ${error.cause}`}</p>
  return <div>
    <h2>Users</h2>
<input type="text"
value={filter}
onChange={e=> setFilter(e.target.value)} />
<button onClick={()=>setSortUsers(!sortUsers)}>SortABC</button>
{
    loading ? <p>loading...</p> : <ul>{
    sortedUsers.map(user => <li key={user.id}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
    </li>)
}
</ul>
}

  </div>;
};

export default Users;
