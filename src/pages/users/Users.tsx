import { useEffect, useState } from "react";
import { fetchUsers } from "../../utils/operation";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
const Users = () => {
    const [users, setUsers] = useState<User[]>([])
    const [filter, setFilter] = useState("")
    const [sortUsers, setSortUsers] = useState(false)

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetchUsers();
setUsers(response)
    };
    getUsers();
  }, []);

  const filteredUsers = filter ? users.filter(user => user.name.toLowerCase().startsWith(filter.toLowerCase())) : users
//   const sortedUsers = sortUsers ? users.sort((a, b) => a.name > b.name ? 1 : -1);


  return <div>
    <h2>Users</h2>
<input type="text"
value={filter}
onChange={e=> setFilter(e.target.value)} />
<button onClick={()=>setSortUsers(true)}>SortABC</button>
<ul>{
    filteredUsers.map(user => <li key={user.id}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
    </li>)
}
</ul>
  </div>;
};

export default Users;
