import { Link } from "react-router-dom"
import "../css/Login.css"

export default function Login() {
    return (

        <section>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3>Login Here</h3>

                <label htmlFor="username">Email</label>
                <input type="text" placeholder="Email" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" />

                <input type="submit" className="btn-submit" value="Login"/>
                <div className="social">
                    <span>If you don't have profile click <Link className="here" to="/register">here</Link></span>
                </div>
            </form>
        </section>
    )
}