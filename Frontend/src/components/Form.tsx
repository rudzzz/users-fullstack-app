import { Link } from "react-router-dom";

const Form = () => {
    return <>
        <div className="container">
            <h1>Register User</h1>
            <form className="form" action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input type="text" id="name"/>
                </div>

                <div className="formBtn">
                    <button type="button" className="cancel-btn">
                        <Link className="navLink" to={'/'}>Cancel</Link>
                    </button>
                    <button className="save-btn">Save</button>
                </div>

            </form>
        </div>
    </>
}

export default Form;