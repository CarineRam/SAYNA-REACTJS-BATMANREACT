import { React, useState, useRef } from 'react';
import '../styles/signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';
import bg_1 from '../assets/bg/bg_1.png';


function SignUp() {
    const [email, setEmail] = useState('');//Décomposition
    const [password, setPassword] = useState('');
    const passwordConfirmRef = useRef();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { createUser } = UserAuth();


    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== passwordConfirmRef.current.value){
            return setError('Les passwords ne sont pas identiques');
        } 
        setError('');
        try {
            await createUser(email, password)
            navigate('/compte');
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }



        console.log(email);
        console.log(password);
        console.log(passwordConfirmRef);

    }


    return (
        <>
            <img src={bg_1} alt="Fond Batman" className="backgroundBatman1"></img>
            <section id="hero">
                
                    <div className="container">
                        <h1 className="hero-title text-uppercase text-white"></h1>
                    </div>
               
            </section>

            <div className="container formulaire">
                <div className="head text-center">
                    <h2>Inscription</h2>
                    <p>
                        Vous avez déjà un compte?
                        <Link to='/login'>Connectez-vous ici!</Link>
                    </p>
                </div>


                <div className="form-body">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputEmail1"
                                className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <div
                                id="emailHelp"
                                className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputPassword1"
                                className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                className="form-control"
                                id="exampleInputPassword1"
                                
                            />
                        </div>
                      
                        <div className="mb-3">
                            <label
                                htmlFor="confirmPassword"
                                className="form-label">
                                Confirmation du mot de passe
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                ref={passwordConfirmRef}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-100">
                            Submit
                        </button>
                    </form>
                    <div>{error}</div>
                </div>
            </div>
        </>
    )

}


export default SignUp
