import React, {useState} from 'react'
import SignInImage from '../Assets/google-sign-in.png'
import Base from '../Core/Base'

const SignIn = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        success: false,
        didRedirect: false, // it's gonna redirect the user to user dashboard or admin dashboard after a succesful authentication
    });

    const { email, password, success, didRedirect, loading, error } = values; // object destructured

    // check higherOrder functions
    const handleChange = name => event => {
        setValues({ ...values, error: "", [name]: event.target.value });
    };

    // const { user } = isAuthenticated(); // return JSON.parse(localStorage.getItem("jwt"));

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        // signin({ email, password }) // this methods automatically sends an request to the server and returns a server side response, that we need to deal accordingly
        //     .then(data => {
        //         console.log("Response from our beloved server is: " + JSON.stringify(data));
        //         if (data.err) {
        //             setValues({ ...values, error: data.err, success: false, didRedirect: false });
        //         }
        //         else {
        //             authenticate(data, () => {
        //                 setValues({
        //                     ...values,
        //                     didRedirect: true,
        //                     success: true,
        //                 })
        //             })
        //         }
        //     })
        //     .catch(err => {
        //         console.log("Error is: " + err); // not possible to reach the server
        //         setValues({ ...values, error: err, didRedirect: false, success: false, });
        //     });
    };

    const signInForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form action="">
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" onChange={handleChange("email")} type="email"
                                value={email}
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control"
                                value={password}
                                onChange={handleChange("password")} type="password" />
                        </div>
                        <div className="btn btn-success btn-block" onClick={onSubmit}>Submit</div>
                    </form>
                </div>
            </div>
        );
    }
   
    const errorMesssage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">

                    <div className="alert alert-danger"
                        style={{ display: error ? "" : "none" }}
                    >
                        {error}
                    </div>
                </div>
            </div>
        );
    };

    const signInWithGoogle = () => {
        
    }

    return (
        <Base title="SignIn Page" description="A page for an existing user to signin">
            {signInForm()}
            <div className="row" >
                <div className="col-md-6 offset-sm-3 text-left">
                    <p className="text-white text-center font-weight-bold">Or</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <button onClick={signInWithGoogle} type="submit">
                        <img src={SignInImage} alt="Sign Up with google" height="50" className="bg-dark" />
                    </button>
                </div>
            </div>
            <p className="text-white text-center">
                {JSON.stringify(values)}
            </p>
        </Base>
    )
}

export default SignIn
