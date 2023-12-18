import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        return date.toISOString().split("T")[0];
    }

    const [user, setUser] = useState({
        name: "",
        email: "",
        dateOfBirth: "",
        phoneNumber: "",
        gender: "",
    });

    useEffect( () => {
       const fetchUserData = async () => {
            try{
                if(id){
                    const response = await axios.get(`http://localhost:8080/users/${id}`);
                    setUser({
                        ...response.data,
                        dateOfBirth: formatDate(response.data.dateOfBirth),
                    });
                }
            } catch(error){
                alert(`Error fetching user data: ${error}`);
            }
       };

       fetchUserData();

    }, [id]);

    const { name, email, dateOfBirth, phoneNumber, gender } = user;

    const handleInputChange = (event) => {
        setUser(
            {
                ...user,
                [event.target.name]:event.target.value
            });
    }

    const handleFormSubmit = async(event) => {
        event.preventDefault();
        console.log(event);
        if(id){
            await axios.put(`http://localhost:8080/users/${id}`, user);
        }else {
            await axios.post("http://localhost:8080/users", user);
        }
        navigate("/");
    }

    const today = new Date().toISOString().split("T")[0];

    return <>
        <div className="container">
            <h1>{id ? "Edit User" : "Register User"}</h1>

            <form className="form" onSubmit={(event) => handleFormSubmit(event)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input value={name} 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        onChange={(event) => handleInputChange(event)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input value={email} 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        onChange={(event) => handleInputChange(event)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dateOfBirth">Birth Date</label>
                    <input value={dateOfBirth}
                        type="date" 
                        id="dateOfBirth"
                        name="dateOfBirth"
                        required
                        max={today}
                        onChange={(event) => handleInputChange(event)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input value={phoneNumber}
                        type="tel" 
                        id="phoneNumber"
                        name="phoneNumber"
                        required
                        onChange={(event) => handleInputChange(event)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">Gender</label>
                    <select name="gender" 
                        id="gender"
                        value={gender}
                        className="formSelect"
                        onChange={(event) => handleInputChange(event)}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="formBtn">
                    <Link className="cancel-btn linkBtn navLink" to={'/'}>Cancel</Link>
                    <button className="save-btn">Save</button>
                </div>

            </form>
        </div>
    </>
}

export default Form;