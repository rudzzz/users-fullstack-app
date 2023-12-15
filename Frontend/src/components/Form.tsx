import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
    });

    const {name, email} = user;

    const handleInputChange = (event) => {
        setUser(
            {...user,[event.target.name]:event.target.value}
        );
    }

    const handleFormSubmit = async(event) => {
        event.preventDefault();
        console.log(event);
        await axios.post("http://localhost:8080/users", user);
        navigate("/");
    }

    return <>
        <div className="container">
            <h1>Register User</h1>
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
                    <button type="button" className="cancel-btn">
                        <Link className="navLink" to={'/'}>Cancel</Link>
                    </button>
                    <button className="save-btn">
                        Save
                    </button>
                </div>

            </form>
        </div>
    </>
}

export default Form;