import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
                                    <Link className="viewBtn linkBtn navLink" to={'/list'}>
                                        View
                                    </Link>
                                    <Link to={`/form/${user.id}`} className='linkBtn editBtn'>
                                        Edit
                                    </Link>
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