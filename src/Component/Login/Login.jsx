import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
     
      if ((username === 'Pankaj' && password === 'Pankaj') || (username === 'Admin@vidyagxp.com' && password === 'Amit@121')) 
        {
           
            navigate("/dashboard");
        } else {
          
            alert("Incorrect username or password");
        }
    };

    return (
        <div className='login-container  flex flex-col'>
            <div className='flex gap-2 justify-end items-center h-full'>
                <div className='h-[500px] w-[470px] bg-white flex justify-center items-center border border-black rounded card'>
                    <div>
                        <div className='flex flex-col gap-8'>
                            <div className='flex justify-center items-center'>
                                <img src='/headerlogo.png' className='h-[100px] w-[300px]' alt="Logo" />
                            </div>
                            <div className='flex flex-col'>
                                <label><b>User Name</b></label>
                                <input
                                    className='w-full py-3 px-2 border border-black rounded-md'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label><b>Password</b></label>
                                <input
                                    type="password"
                                    className='w-full py-3 px-2 border border-black rounded-md'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <button
                                    className='bg-[#e69743] py-2 px-[195px] rounded-md text-white'
                                    onClick={handleLogin}
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
