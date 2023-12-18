import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchUserData, formatDateList } from "../functions";

const List = () => {
    const {id}  = useParams();
    const [userData, setUserData] = useState(null);

    useEffect( () => {
        const fetchData = async () => {
            const data = await fetchUserData(id);
            setUserData(data);
        }
        fetchData();        
    }, [id]);

    if(!userData){
        return null;
    }

    const { name, email, dateOfBirth, phoneNumber, gender } = userData;

    return <>
        <div className="container">
            <h1 className="detailH1">Details</h1>
            <div className="userDetail">
                <ul>
                    <li>
                        <b>Name:</b>
                        {name}
                    </li>
                    <li>
                        <b>Email:</b>
                        {email}
                    </li>
                    <li>
                        <b>Date of Birth:</b>
                        {formatDateList(dateOfBirth)}
                    </li>
                    <li>
                        <b>Phone Number:</b>
                        {phoneNumber}
                    </li>
                    <li>
                        <b>Gender:</b>
                        {gender}
                    </li>
                </ul>
            </div>
            <Link className="home-btn linkBtn navLink" to={'/'}>Back to Home</Link>
        </div>
    </>
}

export default List;