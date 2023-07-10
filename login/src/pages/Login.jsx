import React, { useContext, useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useApi } from '../hooks/useApi';

const Login = () => {

    const auth = useContext(AuthContext);
    const api = useApi();

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {

        //const isLogged = await signin(email, password);
        const data = api.signin(email, password);
        data.then((response) => {
            auth.user = {
                id: response.user.id,
                name: response.user.name,
                email: response.user.email,
                password: response.user.password,
            }
            navigate('/private');
        })
        console.log(auth.user)
        /* auth.user = {
            id: 'kkk',
            name: 'slkjdfljk',
            email: 'slkdfkj',
            password: 'slkjdfljk',
        } */
  
    };

    const handleRequest = async () => {

        /*         const msg = 'OI OI'
        
                const response = await fetch('http://localhost:8080/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    })
                }).then((response) => { console.log(response) });
         */

        auth.user = null;

    }

    return (
        <div>
            <div className='flex justify-center'>
                <div className='m-3'>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='m-3'>
                    <TextField
                        id="outlined-basic"
                        label="Senha"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                    />
                </div>
            </div>
            <div className='flex justify-center ml-'>
                <Button
                    className='hover:text-blue-300 bg-gradient-to-r from-indigo-500 from-10%
                            via-sky-500 via-30% to-emerald-500 to-90% 
                            hover:drop-shadow-xl 
                            hover:rounded-lg '
                    variant="outlined"
                    style={{ color: '#00d4ff' }}
                    onClick={handleLogin}
                >
                    Entrar
                </Button>
                <Button
                    onClick={handleRequest}
                >
                    Sent Request
                </Button>
            </div>
        </div>
    )
}

export default Login