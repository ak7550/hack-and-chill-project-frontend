import React from 'react'
import Base from './Base'
import SignOut from '../User/SignOut';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../config/auth';
import '../styles.css'
import { Link } from 'react-router-dom';
import UserDashBoard from '../User/UserDashBoard';

const Home = () => {
    const [user] = useAuthState(auth);

    const userIsNotLoggedIn = () =>
        <div className="container-fluid">
            <div className="jumbotron bg-dark text-white text-center">
                <div className="row">
                    <div className="col-md">
                        <button type="button" class="btn btn-outline-success btn-lg" ><Link to="/signup">SignUp <i class="fas fa-user-plus"></i> </Link></button>
                    </div>
                    <div className="col-md">
                        <button type="button" class="btn btn-outline-danger btn-lg" ><Link to="/signin">SignIn <i class="fas fa-user-check" ></i> </Link></button>
                    </div>
                </div>
            </div>
        </div>

    return (
        <div>
            <Base title={user ? `Hello ${user}` : "Hello User"} description={user ? "These are your favourite Stocks" : "Please Create an account "} >
                <section>
                    {user ?
                        <div>
                            <UserDashBoard />
                            < SignOut />
                        </div>
                        :
                        < div >
                            {userIsNotLoggedIn()}
                        </div>
                    }
                </section>
            </Base>
        </div>
    )
}

export default Home