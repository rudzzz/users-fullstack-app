import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        email: "",
    });

    useEffect( () => {
       const fetchUserData = async () => {
            try{
                if(id){
                    const response = await axios.get(`http://localhost:8080/users/${id}`);
                    setUser(response.data);
                }
            } catch(error){
                alert(`Error fetching user data: ${error}`);
            }
       };

       fetchUserData();

    }, [id]);

    const {name, email} = user;

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

                <div className="formBtn">
                    <Link className="cancel-btn linkBtn navLink" to={'/'}>Cancel</Link>
                    <button className="save-btn">Save</button>
                </div>

            </form>
        </div>
    </>
}

export default Form;