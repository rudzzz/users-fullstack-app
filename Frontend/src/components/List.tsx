import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const List = () => {
    const {id}  = useParams();
    const [userData, setUserData] = useState(null);

    useEffect( () => {
        const fetchUserData = async () => {
            try{
                const response = await axios.get(`http://localhost:8080/users/${id}`);
                setUserData(response.data);
                console.log(response.data)
            } catch (error){
                alert(`Error fetching user data: ${error}`);
            }
        };

        fetchUserData();
        
    }, [id]);

    if(!userData){
        return null;
    }

    const {name, email} = userData;

    return <>
        <div className="container">
            <h1 className="detailH1">Details</h1>
            <div className="userDetail">
                <ul>
                    <li><b>Name:</b> {name}</li>
                    <li><b>Email:</b> {email}</li>
                </ul>
            </div>
            <Link className="home-btn linkBtn navLink" to={'/'}>Back to Home</Link>
        </div>
    </>
}

export default List;