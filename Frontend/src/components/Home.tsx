import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    const {id} = useParams();
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    
    const loadUser = async() => {
        const result = await axios.get(`http://localhost:8080/users/${pageNumber}/${pageSize}`);
        console.log(result.data.content);
        setUsers(result.data.content);
        setTotalPages(result.data.totalPages);
    }

    useEffect( () => {
        loadUser();
        }, [pageNumber, pageSize]
    );

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/users/${id}`);
        loadUser();
    }

    const handleNextPage = (event) => {
        setPageNumber(pageNumber + 1);
    }

    const handlePreviousPage = (event) => {
        setPageNumber(pageNumber - 1);
    }


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
                                    <Link className="viewBtn linkBtn navLink" to={`/list/${user.id}`}>
                                        View
                                    </Link>
                                    <Link to={`/form/${user.id}`} className='linkBtn editBtn'>
                                        Edit
                                    </Link>
                                    <button className='deleteBtn' 
                                        type='button'
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
            <br />
            
            <div className="pagination-controls">
                    <button onClick={handlePreviousPage} disabled={pageNumber == 0}>{'<'}</button>
                    <span>{pageNumber + 1} of {totalPages}</span>
                    <button onClick={handleNextPage} disabled={pageNumber == totalPages - 1}>{'>'}</button>
            </div>
            <br />

        </div>
    </>
}

export default Home;