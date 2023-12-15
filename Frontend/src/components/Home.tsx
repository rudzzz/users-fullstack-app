import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [users, setUsers] = useState([]);
    
    const loadUser = async() => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }

    useEffect( () => {
        loadUser();
    }, []);

    return <>
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className='actionsBtn'>
                                    <button className='viewBtn' type='button'>View</button>
                                    <button className='editBtn' type='button'>Edit</button>
                                    <button className='deleteBtn' type='button'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default Home;