import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const MonCompte = () => {

    const {user} = UserAuth();
    const {logout} = UserAuth();
    const navigate = useNavigate();

    const deconnecter = async () =>{
        try{
            await logout();
            navigate('/eshop');
        } catch (e) {
            console.log(e);
        }
    }

    /*{ user.email ? (
        ) : ( 
            <p>Email utilisateur non disponible</p>
            )}*/

    return (
        <> 
        <h1> Batman mon compte</h1>
        
        
        <p>Email utilisateur :{user.email}</p>
        
        <button className='text-uppercase' onClick={deconnecter}>deconnecter</button>
        </>
    )
}

export default MonCompte;