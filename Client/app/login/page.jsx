'use client'
import { useEffect, useState } from 'react';

export default function Login() {
    useEffect(() => {
        document.title = "Login";
    })

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [alert,setAlert] = useState('')

    useEffect(() => {
        console.log(email)
        console.log(password)
    },[email,password])

    function formHandle() {
        const username = email;
        const pwd = password;
        if(username === '' || pwd === '' || username === " " || pwd === '') {
            setAlert('Please enter the both username and password field')
        }
    }

    return (
        <>       
            <div className='flex bg-[#1E262F] max-[640px]:flex-wrap'>      
                <div className='my-64 max-[640px]:mx-24 max-[640px]:my-32 mx-96 bg-white/[.02] px-24 py-12'>
                    <h1 className='text-white font-helvetica font-bold my-4 text-4xl'>BlogWare</h1>
                    <h3 className='text-white font-medium font-helvetica'>Enter the username</h3>
                    <input className='bg-white/[.06] py-2 px-2 my-2 rounded-md' value={email} type='text' placeholder='Enter the username' onChange={(e) => setEmail(e.target.value)} spellCheck={false} />
                    <h3 className='text-white font-medium font-helvetica'>Enter the password</h3>
                    <input className='bg-white/[.06] py-2 px-2 my-2 rounded-md' type='text' placeholder='Enter the password' value={password} onChange={(e) => setPassword(e.target.value)} spellCheck={false} />
                    <button 
                        className='text-center	place-items-center bg-violet-600 text-white px-4 py-1 w-full rounded-full my-2'
                        onClick={formHandle}
                    >LOGIN</button>
                    <p className='my-3 text-red-600 text-sm text-center'>{alert}</p>
                </div>      
                <div style={{ width: '100%', height: '100vh' }}>
                    <iframe
                        src="https://my.spline.design/sketchbookcopy-08d0199433703b30ab69c324b8bc7f24/"
                        frameBorder="0"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        title="Embedded Spline"
                    ></iframe>
                </div>
            </div> 
        </>
    );
}
