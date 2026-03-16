import React from 'react';
import '../styles/login.css';
import { UserAuth } from '../context/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import bg_1 from '../assets/bg/bg_1.png';



function Login() {
    const [email, setEmail] = useState('');//Décomposition
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const { login } = UserAuth();

    const onSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(email, password);
            navigate('/compte');
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
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
                    <h2>Connexion</h2>
                    <p>
                        Vous n'avez pas encore un compte?
                        <Link to='/signup'>Inscrivez-vous ici!</Link>
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
                                aria-describedby="emailHelp" />

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
                        <div>
                            <NavLink to='forgotPassword'>
                                Mot de passe oublié?
                            </NavLink>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </form>
                    <div>{error}</div>
                </div>
            </div>
        </>
    )
}

export default Login;