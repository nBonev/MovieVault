import { Link } from "react-router-dom";
import "../css/Register.css"
export default function Register() {
    return (
        <section>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3>Register Here</h3>

                <label htmlFor="username">Email</label>
                <input type="text" placeholder="Email" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" />

                <label htmlFor="password">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" id="confirm-password" />

                <input type="submit" className="btn-submit" value="Register"/>
                <div className="social">
                    <span>If you already have profile click <Link className="here" to="/login">here</Link></span>
                </div>
            </form>
        </section>
    )
}